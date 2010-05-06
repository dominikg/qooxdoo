/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2009-2010 Deutsche Telekom AG, Germany, http://www.telekom.com

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

/**
 * Rewritten support for applying style properties.
 *
 * Differences to old implementation:
 *
 * * Faster compution
 * * No special support for scroll bars which not that much
 *
 */
qx.Class.define("qx.bom.element2.Dimension",
{
  statics :
  {
    getContentWidth : function(elem)
    {
      var Style = qx.bom.element2.Style;
      var paddingLeft = Style.get(elem, "paddingLeft", true);
      var paddingRight = Style.get(elem, "paddingRight", true);

      return elem.clientWidth - (paddingLeft ? parseInt(paddingLeft, 10) : 0) - (paddingRight ? parseInt(paddingRight, 10) : 0);
    },


    getContentHeight : function(elem)
    {
      var Style = qx.bom.element2.Style;
      var paddingTop = Style.get(elem, "paddingTop", true);
      var paddingBottom = Style.get(elem, "paddingBottom", true);

      return elem.clientWidth - (paddingTop ? parseInt(paddingTop, 10) : 0) - (paddingBottom ? parseInt(paddingBottom, 10) : 0);
    },


    getWidth : function(elem) {
      return elem.offsetWidth;
    },

    getHeight : function(elem) {
      return elem.offsetHeight;
    }
  }
});

