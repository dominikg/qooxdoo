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
 * Mixin responsible for setting the background color of a widget.
 */
qx.Mixin.define("qx.ui.decoration.MBackgroundColor", 
{
  properties : 
  {
    /** Color of the background */
    backgroundColor :
    {
      check : "Color",
      nullable : true,
      apply : "_applyBackgroundColor"
    }    
  },


  members :
  {
    /**
     * Tint function for the background color.
     * 
     * @param element {Element} The element which could be resized.
     * @param bgcolor {Color} The new background color.
     * @param styles {Map} A map of styles to apply.
     */
    _tintBackgroundColor : function(element, bgcolor, styles) {
      var Color = qx.theme.manager.Color.getInstance();

      if (bgcolor == null) {
        bgcolor = this.getBackgroundColor();
      }

      styles.backgroundColor = Color.resolve(bgcolor) || "";
    },

    
    /**
     * Resize function for the background color.
     * 
     * @param element {Element} The element which could be resized.
     * @param width {Number} The new width.
     * @param height {Number} The new height.
     * @return {Map} A map containing the desired position and dimension 
     *   (width, height, top, left).
     */
    _resizeBackgroundColor : function(element, width, height) {
      var insets = this.getInsets();
      width -= insets.left + insets.right;
      height -= insets.top + insets.bottom;
      return {
        left : insets.left,
        top : insets.top,
        width : width,
        height : height
      };
    },


    // property apply
    _applyBackgroundColor : function()
    {
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (this._isInitialized()) {
          throw new Error("This decorator is already in-use. Modification is not possible anymore!");
        }
      }
    }
  }
});
