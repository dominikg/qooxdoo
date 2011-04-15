/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("qx.test.bom.Element",
{
  extend : qx.dev.unit.TestCase,

  members :
  {
    setUp : function()
    {
      var div = document.createElement("div");
      div.id = "el";

      this._el = div;
      document.body.appendChild(div);
    },

    tearDown : function() {
      document.body.removeChild(this._el);
    },

    testCreate : function()
    {
      var el = qx.bom.Element.create("div", {name: "juhu"}, window);
      this.assertElement(el);
      this.assertEquals("juhu", qx.bom.element.Attribute.get(el, "name"));
    },

    testEmpty : function()
    {
      this._el.innerHTML = "Juhu";
      qx.bom.Element.empty(this._el);
      this.assertEquals("", this._el.innerHTML);
    },

    testGetCommonParent : function()
    {
      if ((qx.core.Environment.get("engine.name") == "opera")) {
        this.assertNull(qx.dom.Hierarchy.getCommonParent(this._el, document));
      } else if ((qx.core.Environment.get("engine.name") == "mshtml")) {
        this.assertIdentical(document.body, qx.dom.Hierarchy.getCommonParent(this._el, document.body));
      } else {
        this.assertIdentical(document, qx.dom.Hierarchy.getCommonParent(this._el, document));
      }
    },

    testClone : function()
    {
      var clone = qx.bom.Element.clone(this._el);

      this.assertElement(clone, "Cloning of the element failed!");
      this.assertEquals(clone.id, "el",  "Cloning of the element failed! Attribute 'id' was not cloned.")
      this.assertEquals(clone.nodeName.toLowerCase(), "div",  "Cloning of the element failed! Different node name.")
    }
  }
});
