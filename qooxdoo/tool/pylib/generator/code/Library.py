#!/usr/bin/env python
################################################################################
#
#  qooxdoo - the new era of web development
#
#  http://qooxdoo.org
#
#  Copyright:
#    2006-2010 1&1 Internet AG, Germany, http://www.1und1.de
#
#  License:
#    LGPL: http://www.gnu.org/licenses/lgpl.html
#    EPL: http://www.eclipse.org/org/documents/epl-v10.php
#    See the LICENSE file in the project's top-level directory for details.
#
#  Authors:
#    * Sebastian Werner (wpbasti)
#    * Thomas Herchenroeder (thron7)
#
################################################################################

import os, re, sys

from misc import filetool, Path
from misc.NameSpace import NameSpace
from ecmascript.frontend import lang
from generator.resource.ImageInfo import ImageInfo, ImgInfoFmt, CombinedImage
from generator import Context as context

##
# pickle complains when I use NameSpace!?
class C(object): pass

##
# Represents a qooxdoo library
class Library(object):
    # is called with a "library" entry from the config.json
    def __init__(self, libconfig, console):
        self._config = libconfig
        self._console = console

        self._classes = {}
        self._docs = {}
        self._translations = {}

        self._resources = []
        self.resources  = C()
        self.resources.combImages = set()

        self._path = context.config.absPath(self._config.get("path", ""))

        if self._path == "":
            raise ValueError("Missing path information!")

        if not os.path.exists(self._path):
            raise ValueError("Path does not exist: %s" % self._path)

        self._uri = self._config.get("uri", self._path)
        self._encoding = self._config.get("encoding", "utf-8")

        self._classPath = os.path.join(self._path, self._config.get("class","source/class"))
        self._classUri  = os.path.join(self._uri,  self._config.get("class","source/class"))

        self._translationPath = os.path.join(self._path, self._config.get("translation","source/translation"))
        self._resourcePath    = os.path.join(self._path, self._config.get("resource","source/resource"))

        self.namespace = self._config.get("namespace")
        if not self.namespace: raise RuntimeError
        self._checkNamespace(self._classPath)

        #ImageInfoObj = ImageInfo(context.console, context.cache)
        self._imageInfoObj = ImageInfo(context.console, context.cache)

    ##
    # pickling: provide state
    def __getstate__(self):
        d = self.__dict__.copy()
        # the Log object (the StreamWriter for a potential log file) makes
        # problems on unpickling
        del d['_console']
        # the ImageInfo object includes (way down) an InterruptHandler obj
        # that holds an instance method (from the Cache); cannot be pickled
        del d['_imageInfoObj']
        return d


    ##
    # unpickling: update state
    def __setstate__(self, d):
        d['_imageInfoObj'] = ImageInfo(context.console, context.cache)
        d['_console']      = context.console
        self.__dict__ = d


    _codeExpr = re.compile(r'''qx.(Bootstrap|List|Class|Mixin|Interface|Theme).define\s*\(\s*["']((?u)[^"']+)["']''', re.M)
    _illegalIdentifierExpr = re.compile(lang.IDENTIFIER_ILLEGAL_CHARS)
    _ignoredDirectories    = re.compile(r'%s' % '|'.join(filetool.VERSIONCONTROL_DIR_PATTS), re.I)
    _docFilename           = ["__init__.js","readme.txt"]


    def getClasses(self):
        return self._classes


    def getDocs(self):
        return self._docs


    def getTranslations(self):
        return self._translations


    def getNamespace(self):
        return self.namespace

    def getResources(self):
        return self._resources

    def scan(self):
        self._console.info("Scanning %s..." % self._path)
        self._console.indent()

        self._scanClassPath(self._classPath, self._classUri, self._encoding)
        self._scanTranslationPath(self._translationPath)
        self._scanResourcePath(self._resourcePath)

        self._console.outdent()


    def _getCodeId(self, fileContent):
        for item in self._codeExpr.findall(fileContent):
            illegal = self._illegalIdentifierExpr.search(item[1])
            if illegal:
                raise ValueError, "Item name '%s' contains illegal character '%s'" % (item[1],illegal.group(0))
            return item[1]

        return None


    def _checkNamespace(self, path):
        if not os.path.exists(path):
            raise ValueError("The given path does not contain a class folder: %s" % path)

        ns = None
        files = os.listdir(path)

        for entry in files:
            if entry.startswith(".") or self._ignoredDirectories.match(entry):
                continue

            full = os.path.join(path, entry)
            if os.path.isdir(full):
                if ns != None:
                    raise ValueError("Multiple namespaces per library are not supported (%s,%s)" % (full, ns))

                ns = entry

        if ns == None:
            raise ValueError("Namespace could not be detected!")


    def _detectNamespace(self, path):
        if not os.path.exists(path):
            raise ValueError("The given path does not contain a class folder: %s" % path)

        ns = None
        files = os.listdir(path)

        for entry in files:
            if entry.startswith(".") or self._ignoredDirectories.match(entry):
                continue

            full = os.path.join(path, entry)
            if os.path.isdir(full):
                if ns != None:
                    raise ValueError("Multiple namespaces per library are not supported (%s,%s)" % (full, ns))

                ns = entry

        if ns == None:
            raise ValueError("Namespace could not be detected!")

        self._console.debug("Detected namespace: %s" % ns)
        self.namespace = ns



    def scanResourcePath(self):
        # path to the lib resource root
        libpath = os.path.normpath(self._resourcePath)  # normalize "./..."
        liblist = filetool.find(libpath)  # liblist is a generator
        return liblist


    def _scanResourcePath(self, path):
        if not os.path.exists(path):
            raise ValueError("The given resource path does not exist: %s" % path)

        self._console.debug("Scanning resource folder...")

        for root, dirs, files in filetool.walk(path):
            # filter ignored directories
            for dir in dirs:
                if self._ignoredDirectories.match(dir):
                    dirs.remove(dir)

            for file in files:
                fpath = os.path.join(root, file)
                self._resources.append(fpath)
                if CombinedImage.isCombinedImage(fpath):
                    self.resources.combImages.add(os.path.normpath(fpath))

        return



    def _scanClassPath(self, path, uri, encoding):
        if not os.path.exists(path):
            raise ValueError("The given class path does not exist: %s" % path)

        self._console.debug("Scanning class folder...")

        # Iterate...
        for root, dirs, files in filetool.walk(path):
            # Filter ignored directories
            for ignoredDir in dirs:
                if self._ignoredDirectories.match(ignoredDir):
                    dirs.remove(ignoredDir)

            # Searching for files
            for fileName in files:
                # Ignore dot files
                if fileName.startswith("."):
                    continue

                # Process path data
                filePath = os.path.join(root, fileName)
                fileRel  = filePath.replace(path + os.sep, "")
                fileExt  = os.path.splitext(fileName)[-1]
                fileSize = os.stat(filePath).st_size

                # Compute full URI from relative path
                fileUri = uri + "/" + fileRel.replace(os.sep, "/")

                # Compute identifier from relative path
                filePathId = fileRel.replace(fileExt, "").replace(os.sep, ".")

                # Extract package ID
                filePackage = filePathId[:filePathId.rfind(".")]

                # Handle doc files
                if fileName in self._docFilename:
                    fileFor = filePathId[:filePathId.rfind(".")]
                    self._docs[filePackage] = {
                        "relpath" : fileRel,
                        "path" : filePath,
                        "encoding" : encoding,
                        "namespace" : self.namespace,
                        "id" : filePathId,
                        "package" : filePackage,
                        "size" : fileSize
                    }

                    # Stop further processing
                    continue

                # Ignore non-script
                if os.path.splitext(fileName)[-1] != ".js":
                    continue

                # Read content
                fileContent = filetool.read(filePath, encoding)

                # Extract code ID (e.g. class name, mixin name, ...)
                try:
                    fileCodeId = self._getCodeId(fileContent)
                except ValueError, e:
                    raise ValueError, e.message + u' (%s)' % fileName

                # Ignore all data files (e.g. translation, doc files, ...)
                if fileCodeId == None:
                    continue

                # Compare path and content
                if fileCodeId != filePathId:
                    self._console.error("Detected conflict between filename and classname!")
                    self._console.indent()
                    self._console.error("Classname: %s" % fileCodeId)
                    self._console.error("Path: %s" % fileRel)
                    self._console.outdent()
                    raise RuntimeError()

                # Store file data
                self._console.debug("Adding class %s" % filePathId)
                self._classes[filePathId] = {
                    "relpath" : fileRel,
                    "path" : filePath,
                    "encoding" : encoding,
                    "namespace" : self.namespace,
                    "id" : filePathId,
                    "package" : filePackage,
                    "size" : fileSize
                }

        self._console.indent()
        self._console.debug("Found %s classes" % len(self._classes))
        self._console.debug("Found %s docs" % len(self._docs))
        self._console.outdent()



    def _scanTranslationPath(self, path):
        if not os.path.exists(path):
            self._console.warn("The given path does not contain a translation folder: %s" % path)

        self._console.debug("Scanning translation folder...")

        # Iterate...
        for root, dirs, files in filetool.walk(path):
            # Filter ignored directories
            for ignoredDir in dirs:
                if self._ignoredDirectories.match(ignoredDir):
                    dirs.remove(ignoredDir)

            # Searching for files
            for fileName in files:
                # Ignore non-script and dot files
                if os.path.splitext(fileName)[-1] != ".po" or fileName.startswith("."):
                    continue

                filePath = os.path.join(root, fileName)
                fileLocale = os.path.splitext(fileName)[0]

                self._translations[fileLocale] = self.translationEntry(fileLocale, filePath, self.namespace)

        self._console.indent()
        self._console.debug("Found %s translations" % len(self._translations))
        self._console.outdent()


    ##
    # get the resource Id and resource value
    def analyseResource(self, resource):
        ##
        # compute the resource value of an image for the script
        def imgResVal(resource, assetId):
            imageInfo = self._imageInfoObj.getImageInfo(resource , assetId)

            # Now process the image information
            # use an ImgInfoFmt object, to abstract from flat format
            imgfmt = ImgInfoFmt()
            imgfmt.lib = self.namespace
            if not 'type' in imageInfo:
                raise RuntimeError, "Unable to get image info from file: %s" % resource 
            imgfmt.type = imageInfo['type']

            # Add this image
            # imageInfo = {width, height, filetype}
            if not 'width' in imageInfo or not 'height' in imageInfo:
                raise RuntimeError, "Unable to get image info from file: %s" % resource 
            imgfmt.width  = imageInfo['width']
            imgfmt.height = imageInfo['height']
            imgfmt.type   = imageInfo['type']

            return imgfmt

        # ----------------------------------------------------------
        imgpatt = re.compile(r'\.(png|jpeg|jpg|gif)$', re.I)
        librespath = os.path.normpath(self._resourcePath)
        lib_prefix_len = len(librespath)
        if not librespath.endswith(os.sep):
            lib_prefix_len += 1
        assetId = resource[lib_prefix_len:]
        assetId = Path.posifyPath(assetId)
        if imgpatt.search(resource): # handle images
            resvalue = imgResVal(resource, assetId)
        else:  # handle other resources
            resvalue = self.namespace
        return assetId, resvalue


    @staticmethod
    def translationEntry(fileLocale, filePath, namespace):

        if "_" in fileLocale:
            split = fileLocale.index("_")
            parent = fileLocale[:split]
            variant = fileLocale[split+1:]

        else:
            parent = "C"
            variant = ""

        return {
            "path" : filePath,
            "id" : fileLocale,
            "parent" : parent,
            "variant" : variant,
            "namespace" : namespace
        }

