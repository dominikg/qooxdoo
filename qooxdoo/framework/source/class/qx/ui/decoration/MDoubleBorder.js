/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * Border implementation with two CSS borders. Both borders can be styled
 * independent of each other.
 */
qx.Mixin.define("qx.ui.decoration.MDoubleBorder", 
{
  include : [qx.ui.decoration.MSingleBorder, qx.ui.decoration.MBackgroundImage],
  
  construct : function() {
    // override the methods of single border and background image
    this._getDefaultInsetsForBorder = this.__getDefaultInsetsForDoubleBorder;
    this._resizeBorder = this.__resizeDoubleBorder;
    this._styleBorder = this.__styleDoubleBorder;
    this._generateMarkup = this.__generateMarkupDoubleBorder;
  },
  
  
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /*
    ---------------------------------------------------------------------------
      PROPERTY: INNER WIDTH
    ---------------------------------------------------------------------------
    */

    /** top width of border */
    innerWidthTop :
    {
      check : "Number",
      init : 0
    },

    /** right width of border */
    innerWidthRight :
    {
      check : "Number",
      init : 0
    },

    /** bottom width of border */
    innerWidthBottom :
    {
      check : "Number",
      init : 0
    },

    /** left width of border */
    innerWidthLeft :
    {
      check : "Number",
      init : 0
    },

    /** Property group to set the inner border width of all sides */
    innerWidth :
    {
      group : [ "innerWidthTop", "innerWidthRight", "innerWidthBottom", "innerWidthLeft" ],
      shorthand : true
    },




    /*
    ---------------------------------------------------------------------------
      PROPERTY: INNER COLOR
    ---------------------------------------------------------------------------
    */

    /** top inner color of border */
    innerColorTop :
    {
      nullable : true,
      check : "Color"
    },

    /** right inner color of border */
    innerColorRight :
    {
      nullable : true,
      check : "Color"
    },

    /** bottom inner color of border */
    innerColorBottom :
    {
      nullable : true,
      check : "Color"
    },

    /** left inner color of border */
    innerColorLeft :
    {
      nullable : true,
      check : "Color"
    },

    /**
     * Property group for the inner color properties.
     */
    innerColor :
    {
      group : [ "innerColorTop", "innerColorRight", "innerColorBottom", "innerColorLeft" ],
      shorthand : true
    }
  },  
  
  
  members :
  {
    __ownMarkup : null,
    
    /**
     * Takes a styles map and adds the inner border styles styles in place 
     * to the given map.
     * 
     * @param styles {Map} A map to add the styles.
     */
    __styleDoubleBorder : function(styles)
    {
      var Color = qx.theme.manager.Color.getInstance();

      // Inner styles
      // Inner image must be relative to be compatible with qooxdoo 0.8.x
      // See http://bugzilla.qooxdoo.org/show_bug.cgi?id=3450 for details
      styles.position = "relative";

      // Add inner borders
      var width = this.getInnerWidthTop();
      if (width > 0) {
        styles["border-top"] = width + "px " + this.getStyleTop() + " " + Color.resolve(this.getInnerColorTop());
      }

      var width = this.getInnerWidthRight();
      if (width > 0) {
        styles["border-right"] = width + "px " + this.getStyleRight() + " " + Color.resolve(this.getInnerColorRight());
      }

      var width = this.getInnerWidthBottom();
      if (width > 0) {
        styles["border-bottom"] = width + "px " + this.getStyleBottom() + " " + Color.resolve(this.getInnerColorBottom());
      }

      var width = this.getInnerWidthLeft();
      if (width > 0) {
        styles["border-left"] = width + "px " + this.getStyleLeft() + " " + Color.resolve(this.getInnerColorLeft());
      }

      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (!styles["border-top"] && !styles["border-right"] &&
          !styles["border-bottom"] && !styles["border-left"]) {
          throw new Error("Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!");
        }
      }
    },
    
    
    /**
     * Special generator for the markup which creates the containing div and 
     * the sourrounding div as well. 
     * 
     * @param styles {Map} The styles for the inner 
     * @return {String} The generated decorator HTML.
     */
    __generateMarkupDoubleBorder : function(styles) {
      var innerHtml = this._generateBackgroundMarkup(styles);
      var Color = qx.theme.manager.Color.getInstance();

      // get rid of the old borders
      styles["border-top"] = '';
      styles["border-right"] = '';
      styles["border-bottom"] = '';
      styles["border-left"] = '';

      // Generate outer HTML
      styles["line-height"] = 0;

      // Do not set the line-height on IE6, IE7, IE8 in Quirks Mode and IE8 in IE7 Standard Mode
      // See http://bugzilla.qooxdoo.org/show_bug.cgi?id=3450 for details
      if ((qx.bom.client.Engine.MSHTML && qx.bom.client.Engine.VERSION < 8) ||
          (qx.bom.client.Engine.MSHTML && qx.bom.client.Engine.DOCUMENT_MODE < 8)) {
        styles["line-height"] = '';
      }

      var width = this.getWidthTop();
      if (width > 0) {
        styles["border-top"] = width + "px " + this.getStyleTop() + " " + Color.resolve(this.getColorTop());
      }

      var width = this.getWidthRight();
      if (width > 0) {
        styles["border-right"] = width + "px " + this.getStyleRight() + " " + Color.resolve(this.getColorRight());
      }

      var width = this.getWidthBottom();
      if (width > 0) {
        styles["border-bottom"] = width + "px " + this.getStyleBottom() + " " + Color.resolve(this.getColorBottom());
      }

      var width = this.getWidthLeft();
      if (width > 0) {
        styles["border-left"] = width + "px " + this.getStyleLeft() + " " + Color.resolve(this.getColorLeft());
      }

      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (styles["border-top"] == '' && styles["border-right"] == '' &&
          styles["border-bottom"] == '' && styles["border-left"] == '') {
          throw new Error("Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!");
        }
      }

      // final default styles
      styles["position"] = "absolute";
      styles["top"] = 0;
      styles["left"] = 0;

      // Store
      return this.__ownMarkup = this._generateBackgroundMarkup(styles, innerHtml);
    },
    
    


    /**
     * Resize function for the decorator.
     * 
     * @param element {Element} The element which could be resized.
     * @param width {Number} The new width.
     * @param height {Number} The new height.
     * @return {Map} A map containing the desired position and dimension and a 
     *   emelent to resize.
     *   (width, height, top, left, elementToApplyDimensions).
     */
    __resizeDoubleBorder : function(element, width, height)
    {
      var insets = this.getInsets();
      width -= insets.left + insets.right;
      height -= insets.top + insets.bottom;

      var left =
        insets.left -
        this.getWidthLeft() -
        this.getInnerWidthLeft();
      var top =
        insets.top -
        this.getWidthTop() -
        this.getInnerWidthTop();
        
      return {
        left: left,
        top: top,
        width: width,
        height: height,
        elementToApplyDimensions : element.firstChild
      };
    },   
   
   
   /**
    * Implementation of the interface for the double border.
    * 
    * @return {Map} A map containing the default insets. 
    *   (top, right, bottom, left)
    */
    __getDefaultInsetsForDoubleBorder : function()
    {
      return {
        top : this.getWidthTop() + this.getInnerWidthTop(),
        right : this.getWidthRight() + this.getInnerWidthRight(),
        bottom : this.getWidthBottom() + this.getInnerWidthBottom(),
        left : this.getWidthLeft() + this.getInnerWidthLeft()
      };
    }
  }
});
