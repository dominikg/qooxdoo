/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

************************************************************************ */

qx.Class.define("qx.test.ui.form.VirtualComboBox",
{

  extend : qx.test.ui.LayoutTestCase,

  members :
  {
    __comboBox : null,


    setUp : function()
    {
      this.base(arguments); 
      this.__comboBox = new qx.ui.form.VirtualComboBox();
      this.getRoot().add(this.__comboBox);

      this.flush();
    },

    tearDown : function()
    {
      this.base(arguments);
      this.__comboBox.destroy();
      this.__comboBox = null;
    },

    __createSimpleModel : function()
    {
      var model = new qx.data.Array();

      for (var i = 0; i < 100; i++) {
        model.push("item " + (i + 1));
      }

      return model;
    },
    
    __createRichModel : function()
    {
      var model = new qx.data.Array();

      for (var i = 0; i < 100; i++) {
        model.push("<b>item " + (i + 1) + "</b>");
      }

      return model;
    },
    
    __createNestedModel : function()
    {
      var rawData = [
        {
          firstname : "James",
          lastname : "Kirk"
        },
        {
          firstname : "Jean-Luc",
          lastname : "Picard"
        },
        {
          firstname : "Benjamin",
          lastname : "Sisko"
        }
      ];
      var model = qx.data.marshal.Json.createModel(rawData);
      return model;
    },

    testPreselectOnOpen : function()
    {
      this.__comboBox.setModel(this.__createSimpleModel());
      this.__comboBox.setValue("i");
      this.__comboBox.open();
      this.__comboBox.close();
      // Preselection may not change the actual value
      this.assertNotEquals("item 1", this.__comboBox.getValue());
    },
    
    testSelectFirstMatch : function()
    {
      this.__comboBox.setModel(this.__createSimpleModel());
      this.__comboBox.setValue("item 4");
      this.__comboBox.open();
      var preselected = this.__comboBox.getChildControl("dropdown")._preselected;
      this.assertEquals("item 4", preselected);
    },
    
    testSelectFirstMatchWithSortedModel : function()
    {
      this.__comboBox.setModel(this.__createSimpleModel());
      var delegate = {
        // invert sort order
        sorter : function(a, b) {
          return a < b ? 1 : a > b ? -1 : 0;
        }
      }
      this.__comboBox.setDelegate(delegate);
      this.__comboBox.setValue("item 4");
      this.__comboBox.open();
      var preselected = this.__comboBox.getChildControl("dropdown")._preselected;
      this.assertEquals("item 49", preselected);
    },
    
    testSelectFirstMatchWithFilteredModel : function()
    {
      this.__comboBox.setModel(this.__createSimpleModel());
      var delegate = {
        // remove even-numbered items
        filter : function(item) {
          var num = parseInt(/([0-9]+)/.exec(item)[1], 10);
          return num % 2 ? true : false;
        }
      }
      this.__comboBox.setDelegate(delegate);
      this.__comboBox.setValue("item 22");
      this.__comboBox.open();
      // item 22 is not in the list, nothing should be preselected
      var preselected = this.__comboBox.getChildControl("dropdown")._preselected;
      this.assertNull(preselected);
    },
    
    testSelectFirstMatchWithFormatter : function()
    {
      this.__comboBox.setModel(this.__createRichModel());
      var delegate = {
        configureItem : function(item)
        {
          item.setRich(true);
        }
      };
      this.__comboBox.setDelegate(delegate);
      this.__comboBox.setDefaultFormat(function(data) {
        if (data) {
          data = qx.lang.String.stripTags(data);
          data = qx.bom.String.unescape(data);
        }
        return data;
      });
      this.__comboBox.setValue("item 4");
      this.__comboBox.open();
      var preselected = this.__comboBox.getChildControl("dropdown")._preselected;
      this.assertEquals("<b>item 4</b>", preselected);
    },
    
    testSelectFirstMatchByLabelPath : function()
    {
      this.__comboBox.setLabelPath("lastname");
      this.__comboBox.setModel(this.__createNestedModel());
      this.__comboBox.setValue("Si");
      this.__comboBox.open();
      var preselected = this.__comboBox.getChildControl("dropdown")._preselected.getLastname();
      this.assertEquals("Sisko", preselected);
    }
  }

});