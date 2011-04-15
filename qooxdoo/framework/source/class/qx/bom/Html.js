/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2009 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

   ======================================================================

   This class contains code based on the following work:

   * jQuery
     http://jquery.com
     Version 1.3.1

     Copyright:
       2009 John Resig

     License:
       MIT: http://www.opensource.org/licenses/mit-license.php

************************************************************************ */

/**
 * This class is mainly a convenience wrapper for DOM elements to
 * qooxdoo's event system.
 */
qx.Class.define("qx.bom.Html",
{
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /**
     * Helper method for XHTML replacement.
     *
     * @param all {String} Complete string
     * @param front {String} Front of the match
     * @param tag {String} Tag name
     * @return {String} XHTML corrected tag
     */
    __fixNonDirectlyClosableHelper : function(all, front, tag)
    {
      return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ?
        all : front + "></" + tag + ">";
    },


    /** {Map} Contains wrap fragments for specific HTML matches */
    __convertMap :
    {
      opt : [ 1, "<select multiple='multiple'>", "</select>" ], // option or optgroup
      leg : [ 1, "<fieldset>", "</fieldset>" ],
      table : [ 1, "<table>", "</table>" ],
      tr : [ 2, "<table><tbody>", "</tbody></table>" ],
      td : [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
      col : [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
      def : qx.core.Environment.select("engine.name",
      {
        "mshtml" : [ 1, "div<div>", "</div>" ],
        "default" : null
      })
    },


    /**
     * Translates a HTML string into an array of elements.
     *
     * @param html {String} HTML string
     * @param context {Document} Context document in which (helper) elements should be created
     * @return {Array} List of resulting elements
     */
    __convertHtmlString : function(html, context)
    {
      var div = context.createElement("div");

      // Fix "XHTML"-style tags in all browsers
      // Replaces tags which are not allowed to be directly closed like
      // <code>div</code> or <code>p</code>. They are patched to use an
      // open and close tag instead e.g. <p> => <p></p>
      html = html.replace(/(<(\w+)[^>]*?)\/>/g, this.__fixNonDirectlyClosableHelper);

      // Trim whitespace, otherwise indexOf won't work as expected
      var tags = html.replace(/^\s+/, "").substring(0, 5).toLowerCase();

      // Auto-wrap content into required DOM structure
      var wrap, map = this.__convertMap;
      if (!tags.indexOf("<opt")) {
        wrap = map.opt;
      } else if (!tags.indexOf("<leg")) {
        wrap = map.leg;
      } else if (tags.match(/^<(thead|tbody|tfoot|colg|cap)/)) {
        wrap = map.table;
      } else if (!tags.indexOf("<tr")) {
        wrap = map.tr;
      } else if (!tags.indexOf("<td") || !tags.indexOf("<th")) {
        wrap = map.td;
      } else if (!tags.indexOf("<col")) {
        wrap = map.col;
      } else {
        wrap = map.def;
      }

      // Omit string concat when no wrapping is needed
      if (wrap)
      {
        // Go to html and back, then peel off extra wrappers
        div.innerHTML = wrap[1] + html + wrap[2];

        // Move to the right depth
        var depth = wrap[0];
        while (depth--) {
          div = div.lastChild;
        }
      }
      else
      {
        div.innerHTML = html;
      }

      // Fix IE specific bugs
      if ((qx.core.Environment.get("engine.name") == "mshtml"))
      {
        // Remove IE's autoinserted <tbody> from table fragments
        // String was a <table>, *may* have spurious <tbody>
        var hasBody = /<tbody/i.test(html);

        // String was a bare <thead> or <tfoot>
        var tbody = !tags.indexOf("<table") && !hasBody ?
          div.firstChild && div.firstChild.childNodes :
          wrap[1] == "<table>" && !hasBody ? div.childNodes :
          [];

        for (var j=tbody.length-1; j>=0 ; --j)
        {
          if (tbody[j].tagName.toLowerCase() === "tbody" && !tbody[j].childNodes.length) {
            tbody[j].parentNode.removeChild(tbody[j]);
          }
        }

        // IE completely kills leading whitespace when innerHTML is used
        if (/^\s/.test(html)) {
          div.insertBefore(context.createTextNode(html.match(/^\s*/)[0]), div.firstChild);
        }
      }

      return qx.lang.Array.fromCollection(div.childNodes);
    },


    /**
     * Cleans-up the given HTML and append it to a fragment
     *
     * When no <code>context</code> is given the global document is used to
     * create new DOM elements.
     *
     * When a <code>fragment</code> is given the nodes are appended to this
     * fragment except the script tags. These are returned in a separate Array.
     *
     * @param objs {Element[]|String[]} Array of DOM elements or HTML strings
     * @param context {Document?document} Context in which the elements should be created
     * @param asFragment {Boolean} Whether a document fragment should be returned
     * @return {Element[]|Document} Array of elements or a document, depending on third parameter
     */
    clean: function(objs, context, asFragment)
    {
      context = context || document;

      // !context.createElement fails in IE with an error but returns typeof 'object'
      if (typeof context.createElement === "undefined") {
        context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
      }

      // Interate through items in incoming array
      var obj, ret=[];
      for (var i=0, l=objs.length; i<l; i++)
      {
        obj = objs[i];

        // Convert HTML string into DOM nodes
        if (typeof obj === "string") {
          obj = this.__convertHtmlString(obj, context);
        }

        // Append or merge depending on type
        if (obj.nodeType) {
          ret.push(obj);
        } else if (obj instanceof qx.type.BaseArray) {
          ret.push.apply(ret, Array.prototype.slice.call(obj, 0));
        } else if (obj.toElement) {
          ret.push(obj.toElement());
        } else {
          ret.push.apply(ret, obj);
        }
      }

      // Append to fragment and filter out scripts... or...
      if (asFragment)
      {
        var fragment = document.createDocumentFragment();
        for (var i=0; ret[i]; i++) {
          fragment.appendChild(ret[i]);
        }

        return fragment;
      }

      // Otherwise return the array of all elements
      return ret;
    }
  }
});
