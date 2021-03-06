/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * A very complex decoration using two, partly combined and clipped images
 * to render a graphically impressive borders with gradients.
 *
 * The decoration supports all forms of vertical gradients. The gradients must
 * be stretchable to support different heights.
 *
 * The edges could use different styles of rounded borders. Even different
 * edge sizes are supported. The sizes are automatically detected by
 * the build system using the image meta data.
 *
 * The decoration uses clipped images to reduce the number of external
 * resources to load.
 */
qx.Class.define("qx.ui.decoration.Grid",
{
  extend: qx.core.Object,
  implement : [qx.ui.decoration.IDecorator],


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param baseImage {String} Base image to use
   * @param insets {Integer|Array} Insets for the grid
   */
  construct : function(baseImage, insets)
  {
    this.base(arguments);

    this.__impl = new qx.ui.decoration.GridDiv(baseImage);

    if (insets != null) {
      this.__impl.setInsets(insets);
    }
  },





  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /**
     * Base image URL. There must be an image with this name and the sliced
     * and the nine sliced images. The sliced images must be named according to
     * the following scheme:
     *
     * ${baseImageWithoutExtension}-${imageName}.${baseImageExtension}
     *
     * These image names are used:
     *
     * * tl (top-left edge)
     * * t (top side)
     * * tr (top-right edge)

     * * bl (bottom-left edge)
     * * b (bottom side)
     * * br (bottom-right edge)
     *
     * * l (left side)
     * * c (center image)
     * * r (right side)
     */
    baseImage :
    {
      check : "String",
      nullable : true,
      apply : "_applyBaseImage"
    },


    /** Width of the left inset (keep this margin to the outer box) */
    insetLeft :
    {
      check : "Number",
      nullable: true,
      apply : "_applyInsets"
    },

    /** Width of the right inset (keep this margin to the outer box) */
    insetRight :
    {
      check : "Number",
      nullable: true,
      apply : "_applyInsets"
    },

    /** Width of the bottom inset (keep this margin to the outer box) */
    insetBottom :
    {
      check : "Number",
      nullable: true,
      apply : "_applyInsets"
    },

    /** Width of the top inset (keep this margin to the outer box) */
    insetTop :
    {
      check : "Number",
      nullable: true,
      apply : "_applyInsets"
    },

    /** Property group for insets */
    insets :
    {
      group : [ "insetTop", "insetRight", "insetBottom", "insetLeft" ],
      shorthand : true
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __impl : null,


    // interface implementation
    getMarkup : function() {
      return this.__impl.getMarkup();
    },


    // interface implementation
    resize : function(element, width, height) {
      this.__impl.resize(element, width, height);
    },


    // interface implementation
    tint : function(element, bgcolor) {
      // do nothing
    },


    // interface implementation
    getInsets : function() {
      return this.__impl.getInsets();
    },


    // property apply
    _applyInsets : function(value, old, name)
    {
      var setter = "set" + qx.lang.String.firstUp(name);
      this.__impl[setter](value);
    },


    // property apply
    _applyBaseImage : function(value, old)
    {
      if (this.__impl instanceof qx.ui.decoration.GridDiv) {
        this.__impl.setBaseImage(value);
      } else {
        this.__setBorderImage(value);
      }
    },


    /**
     * Configures the border image decorator
     *
     * @param baseImage {String} URL of the base image
     */
    __setBorderImage : function(baseImage)
    {
      this.__impl.setBorderImage(baseImage);

      var base = qx.util.AliasManager.getInstance().resolve(baseImage);
      var split = /(.*)(\.[a-z]+)$/.exec(base);
      var prefix = split[1];
      var ext = split[2];

      var ResourceManager = qx.util.ResourceManager.getInstance();

      var topSlice = ResourceManager.getImageHeight(prefix + "-t" + ext);
      var leftSlice = ResourceManager.getImageWidth(prefix + "-l" + ext);

      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        var assertMessageTop = "The value of the property 'topSlice' is null! " +
          "Please verify the image '" + prefix + "-t" + ext + "' is present.";

        var assertMessageLeft = "The value of the property 'leftSlice' is null! " +
          "Please verify the image '" + prefix + "-l" + ext + "' is present.";

        qx.core.Assert.assertNotNull(topSlice, assertMessageTop);
        qx.core.Assert.assertNotNull(leftSlice, assertMessageLeft);
      }

      this.__impl.setSlice([topSlice, leftSlice]);
    }
  },



  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function() {
    this.__impl = null;
  }

});