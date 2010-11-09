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
 * Border implementation with two CSS borders. Both borders can be styled
 * independent of each other. This decorator is used to create 3D effects like
 * <code>inset</code>, <code>outset</code>, <code>ridge</code> or <code>groove</code>.
 */
qx.Class.define("qx.ui.decoration.Double",
{
  extend : qx.ui.decoration.Single,


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param width {Integer} Width of the border
   * @param style {String} Any supported border style
   * @param color {Color} The border color
   * @param innerWidth {String} Width of the inner border
   * @param innerColor {Color} The inner border color
   */
  construct : function(width, style, color, innerWidth, innerColor)
  {
    this.base(arguments, width, style, color, innerWidth, innerColor);

    // Initialize properties
    if (innerWidth != null) {
      this.setInnerWidth(innerWidth);
    }

    if (innerColor != null) {
      this.setInnerColor(innerColor);
    }
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



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __ownMarkup : null,


    // overridden
    _getDefaultInsets : function()
    {
      return {
        top : this.getWidthTop() + this.getInnerWidthTop(),
        right : this.getWidthRight() + this.getInnerWidthRight(),
        bottom : this.getWidthBottom() + this.getInnerWidthBottom(),
        left : this.getWidthLeft() + this.getInnerWidthLeft()
      };
    },


    // overridden
    _isInitialized: function() {
      return !!this.__ownMarkup;
    },


    /*
    ---------------------------------------------------------------------------
      INTERFACE IMPLEMENTATION
    ---------------------------------------------------------------------------
    */

    // interface implementation
    getMarkup : function()
    {
      if (this.__ownMarkup) {
        return this.__ownMarkup;
      }

      var Color = qx.theme.manager.Color.getInstance();


      // Inner styles
      // Inner image must be relative to be compatible with qooxdoo 0.8.x
      // See http://bugzilla.qooxdoo.org/show_bug.cgi?id=3450 for details
      var innerStyles = { position : "relative" };

      // Add inner borders
      var width = this.getInnerWidthTop();
      if (width > 0) {
        innerStyles.borderTop = width + "px " + this.getStyleTop() + " " + Color.resolve(this.getInnerColorTop());
      }

      var width = this.getInnerWidthRight();
      if (width > 0) {
        innerStyles.borderRight = width + "px " + this.getStyleRight() + " " + Color.resolve(this.getInnerColorRight());
      }

      var width = this.getInnerWidthBottom();
      if (width > 0) {
        innerStyles.borderBottom = width + "px " + this.getStyleBottom() + " " + Color.resolve(this.getInnerColorBottom());
      }

      var width = this.getInnerWidthLeft();
      if (width > 0) {
        innerStyles.borderLeft = width + "px " + this.getStyleLeft() + " " + Color.resolve(this.getInnerColorLeft());
      }

      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (innerStyles.length === 0) {
          throw new Error("Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!");
        }
      }

      // Generate inner HTML
      var innerHtml = this._generateBackgroundMarkup(innerStyles);


      // Generate outer HTML
      var outerStyles = 'line-height:0;';

      // Do not set the line-height on IE6, IE7, IE8 in Quirks Mode and IE8 in IE7 Standard Mode
      // See http://bugzilla.qooxdoo.org/show_bug.cgi?id=3450 for details
      if ((qx.bom.client.Engine.MSHTML && qx.bom.client.Engine.VERSION < 8) ||
          (qx.bom.client.Engine.MSHTML && qx.bom.client.Engine.DOCUMENT_MODE < 8)) {
        outerStyles = '';
      }
      
      var width = this.getWidthTop();
      if (width > 0) {
        outerStyles += "border-top:" + width + "px " + this.getStyleTop() + " " + Color.resolve(this.getColorTop()) + ";";
      }

      var width = this.getWidthRight();
      if (width > 0) {
        outerStyles += "border-right:" + width + "px " + this.getStyleRight() + " " + Color.resolve(this.getColorRight()) + ";";
      }

      var width = this.getWidthBottom();
      if (width > 0) {
        outerStyles += "border-bottom:" + width + "px " + this.getStyleBottom() + " " + Color.resolve(this.getColorBottom()) + ";";
      }

      var width = this.getWidthLeft();
      if (width > 0) {
        outerStyles += "border-left:" + width + "px " + this.getStyleLeft() + " " + Color.resolve(this.getColorLeft()) + ";";
      }

      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (outerStyles.length === 0) {
          throw new Error("Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!");
        }
      }


      // Store
      return this.__ownMarkup = '<div style="position:absolute;top:0;left:0;' + outerStyles + '">' + innerHtml + '</div>';
    },


    // interface implementation
    resize : function(element, width, height)
    {
      // Fix box model
      // Note: Scaled images are always using content box
      var scaledImage = this.getBackgroundImage() && this.getBackgroundRepeat() == "scale";
      var insets = this.getInsets();

      if (scaledImage || qx.bom.client.Feature.CONTENT_BOX)
      {
        var innerWidth = width - insets.left - insets.right;
        var innerHeight = height - insets.top - insets.bottom;
      }
      else
      {
        // inset usually inner + outer border
        var topInset = insets.top - this.getInnerWidthTop();
        var bottomInset = insets.bottom - this.getInnerWidthBottom();
        var leftInset = insets.left - this.getInnerWidthLeft();
        var rightInset = insets.right - this.getInnerWidthRight();
        
        // Substract outer border
        var innerWidth = width - leftInset - rightInset;
        var innerHeight = height - topInset - bottomInset;
      }
      
      // Fix to keep applied size above zero
      // Makes issues in IE7 when applying value like '-4px'
      if (innerWidth < 0) {
        innerWidth = 0;
      }

      if (innerHeight < 0) {
        innerHeight = 0;
      }
      
      element.firstChild.style.width = innerWidth + "px";
      element.firstChild.style.height = innerHeight + "px";
      
      element.style.left = 
        (parseInt(element.style.left) + 
        insets.left - 
        this.getWidthLeft() - 
        this.getInnerWidthLeft()) + "px";
      element.style.top = 
        (parseInt(element.style.top) + 
        insets.top - 
        this.getWidthTop() - 
        this.getInnerWidthTop()) + "px";
    }
  },



  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function() {
    this.__ownMarkup = null;
  }
});
