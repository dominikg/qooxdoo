/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Gabriel Munteanu (gabios)

************************************************************************ */

/* ************************************************************************

#asset(mobileshowcase/icon/camera.png)

************************************************************************ */
/**
 * Mobile page responsible for showing the different showcases.
 */
qx.Class.define("mobileshowcase.page.Toolbar",
{
  extend : qx.ui.mobile.page.NavigationPage,

  construct : function()
  {
    this.base(arguments);
    this.setTitle("Toolbar");
    this.setShowBackButton(true);
    this.setBackButtonText("Back");
  },


  events :
  {
    /** The page to show */
    "show" : "qx.event.type.Data"
  },


  members :
  {
  
    /**
     * The toolbar
     */
    __toolbar : null,
    
    // overridden
    _initialize : function()
    {
      this.base(arguments);
      
      var label = new qx.ui.mobile.form.Title("Search");
      this.getContent().add(label);

      var button = new qx.ui.mobile.form.Button("Toggle the toolbar");
      button.addListener("tap", this._onButtonTap, this);
      this.getContent().add(button);

      var toolbar = this.__toolbar = new qx.ui.mobile.toolbar.ToolBar();
      this.add(toolbar); // getContent()
      var searchBtn = new qx.ui.mobile.toolbar.Button("search");
      toolbar.add(searchBtn);
      searchBtn.addListener("tap", function(){
        label.setValue("Searching...");
        qx.lang.Function.delay(function(){
          this.setValue("Search");
        }, 2000, label);
      }, this);
      toolbar.add(new qx.ui.mobile.toolbar.Separator());
      var goBackBtn = new qx.ui.mobile.toolbar.Button(null,"mobileshowcase/icon/arrowleft.png");
      toolbar.add(goBackBtn);
      goBackBtn.addListener("tap", function(){
        label.setValue("Go Back");
      }, this);
      toolbar.add(new qx.ui.mobile.toolbar.Separator());
      var closeButton = new qx.ui.mobile.toolbar.Button("Take Picture","mobileshowcase/icon/camera.png");
      toolbar.add(closeButton);
      
      closeButton.addListener("tap", function(){
        label.setValue("Take a Picture");
      });
    },
    
    /**
     * Handler for the main button in the page
     */
    _onButtonTap : function()
    {
      this.__toolbar.toggle();
    },
    
    // overridden
    _back : function()
    {
      qx.ui.mobile.navigation.Manager.getInstance().executeGet("/", {reverse:true});
    }
  }
});