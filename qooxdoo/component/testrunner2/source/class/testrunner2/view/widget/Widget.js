/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

************************************************************************ */

/* ************************************************************************
#asset(qx/icon/Tango/22/actions/media-playback-start.png)
#asset(qx/icon/Tango/22/actions/media-playback-stop.png)
#asset(qx/icon/Tango/22/actions/view-refresh.png)
#asset(qx/icon/Tango/22/categories/system.png)
#asset(qx/icon/Tango/22/status/dialog-information.png)
#asset(qx/icon/Tango/22/status/dialog-warning.png)
#asset(qx/icon/Tango/22/status/dialog-error.png)
#asset(qx/icon/Tango/22/actions/document-properties.png)
#asset(qx/icon/Tango/22/actions/media-seek-forward.png)

#asset(testrunner2/view/widget/css/testrunner.css)
#asset(testrunner2/view/widget/image/*)
************************************************************************ */
/**
 * Widget-based Testrunner view
 */
qx.Class.define("testrunner2.view.widget.Widget", {

  extend : testrunner2.view.Abstract,
  
  construct : function()
  {
    this.__menuItemStore = {};
    this.__logLevelData = [
      ["debug", "Debug", "icon/22/categories/system.png"],
      ["info", "Info", "icon/22/status/dialog-information.png"],
      ["warn", "Warning", "icon/22/status/dialog-warning.png"],
      ["error", "Error", "icon/22/status/dialog-error.png"]
    ];
    
    this.__app = qx.core.Init.getApplication();
    
    var mainContainer = new qx.ui.container.Composite();
    var layout = new qx.ui.layout.VBox();

    mainContainer.setLayout(layout);
    this.__app.getRoot().add(mainContainer, {edge : 0});
    
    // Header
    mainContainer.add(this.__createHeader());

    // Toolbar
    mainContainer.add(this.__createToolbar());
    
    // Main Pane
    // split
    var mainsplit = new qx.ui.splitpane.Pane("horizontal");
    mainContainer.add(mainsplit, {flex : 1});

    this.__labelDeco = null;
    try {
      this.__labelDeco = new qx.ui.decoration.Background().set({
        backgroundColor : "background-medium"
      });
    } catch(ex) {}
    
    mainsplit.add(this.__createTestList(), 0);
    
    var outerPane = new qx.ui.splitpane.Pane("horizontal");
    outerPane.setDecorator(null);
    
    mainsplit.add(outerPane, 1);
    
    outerPane.add(this.__createCenterPane(), 1);
    
    outerPane.add(this.__createAutPane(), 1);
    
    qx.ui.core.queue.Manager.flush();

    var statuspane = this.__createStatusBar();
    mainContainer.add(statuspane);
    
    this._makeCommands();
  },
  
  statics :
  {
    /** Grey icons for items without a result */
    TREEICONS :
    {
      "package" : "testrunner2/view/widget/image/package18_grey.gif",
      "class" : "testrunner2/view/widget/image/class18_grey.gif",
      "test" : "testrunner2/view/widget/image/method_public18_grey.gif"
    },

    /** Green icons for items without failures */
    TREEICONSOK :
    {
      "package" : "testrunner2/view/widget/image/package18.gif",
      "class" : "testrunner2/view/widget/image/class18.gif",
      "test" : "testrunner2/view/widget/image/method_public18.gif"
    },

    /** Red icons for items with failures */
    TREEICONSERROR :
    {
      "package" : "testrunner2/view/widget/image/package_warning18.gif",
      "class" : "testrunner2/view/widget/image/class_warning18.gif",
      "test" : "testrunner2/view/widget/image/method_public_error18.gif"
    }
  },
  
  properties :
  {
    /** Controls the display of stack trace information for exceptions */
    showStackTrace :
    {
      check : "Boolean",
      event : "changeShowStackTrace"
    },
    
    /** Running count of failed tests */
    failedTestCount :
    {
      check : "Integer",
      init : 0,
      event : "changeFailedTestCount"
    },
    
    /** Running count of passed tests */
    successfulTestCount :
    {
      check : "Integer",
      init : 0,
      event : "changeSuccessfulTestCount"
    },
    
    /** Running count of skipped tests */
    skippedTestCount :
    {
      check : "Integer",
      init : 0,
      event : "changeSkippedTestCount"
    },
    
    /** Log level for the AUT log appender */
    logLevel :
    {
      check : ["debug", "info", "warn", "error"],
      init  : "debug",
      event : "changeLogLevel"
    }
  },
  
  members :
  {
    /**
     * Creates the application header.
     */
    
    __logLevelData : null,
    
    __app : null,
    __iframe : null,
    __overflowMenu : null,
    __menuItemStore : null,
    __labelDeco : null,
    __logElement : null,
    __testTree : null,
    __runButton : null,
    __stopButton : null,
    __progressBar : null,
    __testResultView : null,
    __testCountField : null,
    __selectedTestField : null,
    __statusField : null,
    
    /**
     * Returns the iframe element the AUT should be loaded in.
     * @return {Element} Iframe element
     */
    getIframe : function()
    {
      return this.__iframe.getContentElement().getDomElement();
    },
    
    /**
     * Returns a DIV element that will be used by a 
     * {@link qx.log.appender.Element} to display the AUT's log output.
     * 
     * @return {Element} DIV element
     */
    getLogAppenderElement : function()
    {
      if (!this.__logElement) {
        this.__logElement = document.createElement("DIV");
      }
      return this.__logElement;
    },
    
    /**
     * Returns the application header
     * 
     * @return {qx.ui.container.Composite} The application header
     */
    __createHeader : function()
    {
      var layout = new qx.ui.layout.HBox();
      var header = new qx.ui.container.Composite(layout);
      header.setAppearance("app-header");

      var title = new qx.ui.basic.Label("Test Runner");
      var version = new qx.ui.basic.Label("qooxdoo " + qx.core.Setting.get("qx.version"));

      header.add(title);
      header.add(new qx.ui.core.Spacer, {flex : 1});
      header.add(version);

      return header;
    },
    
    /**
     * Returns the tool bar with the main test suite controls
     * 
     * @return {qx.ui.toolbar.ToolBar} The tool bar
     */
    __createToolbar : function()
    {
      var toolbar = new qx.ui.toolbar.ToolBar;

      var part1 = new qx.ui.toolbar.Part();
      toolbar.add(part1);
      
      this.bind("testSuiteState", part1, "enabled", {converter : function(data) {
        switch(data) {
          case "init":
          case "loading":
            return false;
            break;
          default:
            return true;
            break;
        }
      }});
      
      // Run button
      var runButton = this.__runButton = new qx.ui.toolbar.Button(this.__app.tr('<b>Run&nbsp;Tests!</b>'), "icon/22/actions/media-playback-start.png");
      runButton.set({
        textColor : "#36a618",
        rich : true,
        visibility : "excluded",
        toolTipText : this.__app.tr("Run selected tests (Ctrl+R)")
      });
      runButton.setUserData("value", "run");

      runButton.addListener("execute", this.__runTests, this);

      part1.add(runButton);
      
      // Stop button
      var stopButton = this.__stopButton = new qx.ui.toolbar.Button(this.__app.tr('<b>Stop&nbsp;Tests</b>'), "icon/22/actions/media-playback-stop.png");
      stopButton.set({
        textColor : "#ff0000",
        rich : true,
        toolTipText : this.__app.tr("Stop the test suite (Ctrl+S)")
      });
      stopButton.setUserData("value", "stop");
      
      stopButton.addListener("execute", this.__stopTests, this);
      
      part1.add(stopButton);
      
      // Reload button
      var reloadButton = new qx.ui.toolbar.Button(this.__app.tr("Reload"), "icon/22/actions/view-refresh.png");
      part1.add(reloadButton);
      reloadButton.setToolTipText(this.__app.tr("Reload the test suite (Ctrl+Shift+R)"));
      reloadButton.addListener("execute", this.__reloadAut, this);
      
      var part2 = new qx.ui.toolbar.Part();
      toolbar.add(part2);

      var autUriField = new qx.ui.form.TextField();
      this.bind("autUri", autUriField, "value");
      autUriField.addListener("changeValue", function(ev) {
        this.__iframe.setSource(ev.getData());
      }, this);
      autUriField.setToolTipText(this.__app.tr("Application under test URL"));
      autUriField.set(
      {
        width : 300,
        alignY : "middle",
        marginLeft : 3
      });
      
      part2.add(autUriField);
      
      toolbar.addSpacer();
      
      var part3 = new qx.ui.toolbar.Part();
      toolbar.add(part3);

      part3.add(this.__createLogLevelMenu());
      
      // Stack trace toggle
      var stacktoggle = new qx.ui.toolbar.CheckBox(this.__app.tr("Show Stack Trace"), "icon/22/actions/document-properties.png");
      part3.add(stacktoggle);
      stacktoggle.setShow("both");
      stacktoggle.setToolTipText(this.__app.tr("Show stack trace information for exceptions"));
      stacktoggle.setValue(true);
      stacktoggle.bind("value", this, "showStackTrace");
      
      return toolbar;
    },
    

    /**
     * Returns the icon for a given log level
     * @param data {String} The log level
     * @return {String} The icon's resource id
     */
    __logLevelIconConverter: function(data) {
        for (var i=0,l=this.__logLevelData.length; i<l; i++) {
          if (this.__logLevelData[i][0] == data) {
            return this.__logLevelData[i][2];
          }
        }
        return null;
      },
    
    /**
     * Returns the menu button used to select the AUT's log level
     * 
     * @return {qx.ui.toolbar.MenuButton}
     */
    __createLogLevelMenu : function()
    {
      var logLevelMenu = new qx.ui.menu.Menu();
      var logLevelMenuButton = new qx.ui.toolbar.MenuButton(this.__app.tr("Log Level"), "icon/22/categories/system.png");
      logLevelMenuButton.setMenu(logLevelMenu);
            
      for (var i=0,l=this.__logLevelData.length; i<l; i++) {
        var data = this.__logLevelData[i];
        var button = new qx.ui.menu.Button(this.__app.tr(data[1]), data[2]);
        button.setUserData("model", data[0]);
        button.addListener("execute", function(ev) {
          var pressedButton = ev.getTarget();
          this.setLogLevel(pressedButton.getUserData("model"));
          logLevelMenuButton.setIcon(pressedButton.getIcon());
        }, this);
        logLevelMenu.add(button);
      }
      
      return logLevelMenuButton;
    },
    
    /**
     * Returns a container with the list of available tests
     * 
     * @return {qx.ui.container.Composite} 
     */
    __createTestList : function()
    {
      var layout = new qx.ui.layout.VBox();
      //layout.setSeparator("separator-vertical");

      var container = new qx.ui.container.Composite(layout).set({
        decorator : "main"
      });
      
      var leftPaneWidth = qx.bom.Cookie.get("leftPaneWidth");
      if (leftPaneWidth !== null) {
        container.setWidth(parseInt(leftPaneWidth));
      }
      else {
        container.setWidth(250);
      }
  
      container.setUserData("pane", "left");
      container.addListener("resize", this.__onPaneResize);

      var caption = new qx.ui.basic.Label(this.__app.tr("Tests")).set({
        font : "bold",
        decorator : this.__labelDeco,
        padding : 5,
        allowGrowX : true,
        allowGrowY : true
      });
      container.add(caption);
      
      this.__testTree = new qx.ui.tree.VirtualTree();
      this.__testTree.set({
        labelPath : "name",
        childProperty : "children",
        delegate : {
          bindNode : this.__bindTreeItem,
          bindLeaf : this.__bindTreeItem
        },
        decorator : "separator-vertical"
      });
      
      var selection = new qx.data.Array();
      selection.addListener("change", 
        this._onChangeTestSelection, this);
      
      this.__testTree.setSelection(selection);
      
      this.setSelectedTests(this.__testTree.getSelection());
      
      container.add(this.__testTree, {flex : 1});
      
      return container;
    },
    
    
    /**
     * Open a selected node
     * 
     * @param {qx.event.type.Data} Data event containing the selection
     */
    _onChangeTestSelection : function(ev)
    {
      var selected = this.getSelectedTests();
      if (selected.length > 0) {
        var node = selected.getItem(0);
        if (!this.__testTree.isNodeOpen(node)) {
          this.__testTree.openNodeAndParents(node);
        }
        qx.bom.Cookie.set("selectedTest", node.getFullName());
      }
    },
    
    /**
     * Sets the tree icons according to the model item's state and type.
     * 
     * @param controller {MWidgetController} The currently used controller.
     * @param node {qx.ui.core.Widget} The created and used node.
     * @param id {Integer} The id for the binding.
     */
    __bindTreeItem : function(controller, node, id) {
      controller.bindProperty("", "model", null, node, id);
      controller.bindProperty("name", "label", null, node, id);
      controller.bindProperty("state", "icon", {
        converter : function(data, model) {
          var state = data;
          var type = model.getType();          
          var iconMap;
          switch (state) {
            case "success":
              iconMap = "TREEICONSOK";
              break;
            case "error":
            case "failure":
              iconMap = "TREEICONSERROR"
              break;
            default:
              iconMap = "TREEICONS";
            break;
          }
          return testrunner2.view.widget.Widget[iconMap][type];
        }
      }, node, id);
    },
    
    /**
     * Store pane width in cookie
     *
     * @param e {Event} Event data: The pane
     * @return {void}
     */
    __onPaneResize : function(e)
    {
      var pane = this.getUserData("pane");
      qx.bom.Cookie.set(pane + "PaneWidth", e.getData().width, 365);
    },
    
    /**
     * Returns a container with the progress bar and test results view
     * 
     * @return {qx.ui.container.Composite} The center pane's content
     */
    __createCenterPane : function()
    {
      var layout = new qx.ui.layout.VBox();
      layout.setSeparator("separator-vertical");
      
      var p1 = new qx.ui.container.Composite(layout).set({
        decorator : "main"
      });

      var centerPaneWidth = qx.bom.Cookie.get("centerPaneWidth");
      if (centerPaneWidth !== null) {
        p1.setWidth(parseInt(centerPaneWidth));
      }
      else {
        p1.setWidth(400);
      }
      
      p1.setUserData("pane", "center");
      p1.addListener("resize", this.__onPaneResize);

      var caption1 = new qx.ui.basic.Label(this.__app.tr("Test Results")).set({
        font : "bold",
        decorator : this.__labelDeco,
        padding : 5,
        allowGrowX : true,
        allowGrowY : true
      });
      p1.add(caption1);
      
      p1.add(this.__createProgressBar());
      
      qx.bom.Stylesheet.includeFile("testrunner2/view/widget/css/testrunner.css");
      this.__testResultView = new testrunner2.view.widget.TestResultView();
      p1.add(this.__testResultView, {flex : 1});
      this.bind("showStackTrace", this.__testResultView, "showStackTrace");
      
      return p1;
    },
    
    /**
     * Returns the rightmost pane containing the AUT iframe and log
     * 
     * @return {qx.ui.splitpane.Pane} The configured pane
     */
    __createAutPane : function()
    {
      // Second Page
      var pane2 = new qx.ui.splitpane.Pane("vertical");
      pane2.setDecorator(null);

      pane2.add(this.__createIframeContainer(), 1);
      pane2.add(this.__createLogContainer(), 1);
      
      return pane2;
    },
    
    /**
     * Returns a container with the AUT iframe widget
     * 
     * @return {qx.ui.container.Composite} Iframe container
     */
    __createIframeContainer : function()
    {
      var layout2 = new qx.ui.layout.VBox();
      
      var pp3 = new qx.ui.container.Composite(layout2).set({
        decorator : "main"
      });

      var caption3 = new qx.ui.basic.Label(this.__app.tr("Application under test")).set({
        font : "bold",
        decorator : this.__labelDeco,
        padding : 5,
        allowGrowX : true,
        allowGrowY : true
      });
      
      pp3.add(caption3);

      var iframe = new qx.ui.embed.Iframe();
      iframe.setSource(null);
      this.__iframe = iframe;
      pp3.add(iframe, {flex: 1});

      iframe.set({
        width : 50,
        height : 50,
        zIndex : 5,
        decorator : "separator-vertical"
      });
      
      return pp3;
    },
    
    /**
     * Returns a container with the AUT log element
     * 
     * @return {qx.ui.container.Composite} The log container
     */
    __createLogContainer : function()
    {
      var layout3 = new qx.ui.layout.VBox();
      //layout3.setSeparator("separator-vertical");
      var pp2 = new qx.ui.container.Composite(layout3).set({
        decorator : "main"
      });

      var caption2 = new qx.ui.basic.Label("Log").set({
        font : "bold",
        decorator : this.__labelDeco,
        padding : [4, 3],
        allowGrowX : true,
        allowGrowY : true
      });
      pp2.add(caption2);

      // main output area
      var f2 = new qx.ui.embed.Html('');
      f2.set({
        backgroundColor : "white",
        overflowY : "scroll",
        decorator : "separator-vertical"
      });
      pp2.add(f2, {flex: 1});
      f2.getContentElement().setAttribute("id", "sessionlog");
      
      var logAppender = this.getLogAppenderElement();
      f2.addListenerOnce("appear", function(ev) {
        this.getContentElement().getDomElement().appendChild(logAppender);
      });
      
      return pp2;
    },
    
    /**
     * Returns a container with the progress bar
     * 
     * @return {qx.ui.container.Composite} The progressbar container
     */
    __createProgressBar : function()
    {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox());

      var bar = this.__progressBar = new qx.ui.indicator.ProgressBar(0, 10);
      bar.setMargin(5);
      container.add(bar);
      
      var labelBox = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
      labelBox.setPadding(2);
      labelBox.setMarginTop(2);
      labelBox.setMarginLeft(5);
      container.add(labelBox);
      
      labelBox.add(new qx.ui.basic.Label(this.__app.tr("Queued: ")).set({
        alignY : "middle"
      }));
      var queuecnt = new qx.ui.form.TextField("0").set({
        width : 40,
        font : "small",
        readOnly : true,
        textAlign : "right"
      });
      labelBox.add(queuecnt);
      
      this.bind("testCount", queuecnt, "value", {
        converter : function(data) {
          if (data) {
            return data.toString();
          }
          else {
            return "0";
          }
        }
      });

      labelBox.add(new qx.ui.basic.Label(this.__app.tr("Failed: ")).set({
        alignY : "middle"
      }));
      var failcnt = new qx.ui.form.TextField("0").set({
        width : 40,
        font : "small",
        readOnly : true,
        textAlign : "right"
      });
      labelBox.add(failcnt);
      
      this.bind("failedTestCount", failcnt, "value", {
        converter : function(data) {
          return data.toString();
        }
      });

      labelBox.add(new qx.ui.basic.Label(this.__app.tr("Succeeded: ")).set({
        alignY : "middle"
      }));
      var succcnt = new qx.ui.form.TextField("0").set({
        width : 40,
        font : "small",
        readOnly : true,
        textAlign : "right"
      });
      labelBox.add(succcnt);
      
      this.bind("successfulTestCount", succcnt, "value", {
        converter : function(data) {
          return data.toString();
        }
      });
      
      labelBox.add(new qx.ui.basic.Label(this.__app.tr("Skipped: ")).set({
        alignY : "middle"
      }));
      var skipcnt = new qx.ui.form.TextField("0").set({
        width : 40,
        font : "small",
        readOnly : true,
        textAlign : "right"
      });
      labelBox.add(skipcnt);
      
      this.bind("skippedTestCount", skipcnt, "value", {
        converter : function(data) {
          return data.toString();
        }
      });
      
      return container;
    },
    
    /**
     * Returns a container with the status bar
     * 
     * @return {qx.ui.container.Composite} Status bar container
     */
    __createStatusBar : function()
    {
      var layout = new qx.ui.layout.HBox(10);
      var statuspane = new qx.ui.container.Composite(layout);
      statuspane.set({
        margin : 4
      });

      // Test Info
      statuspane.add(new qx.ui.basic.Label(this.__app.tr("Selected Test: ")).set({
        alignY : "middle"
      }));
      
      var l1 = this.__selectedTestField = new qx.ui.form.TextField("").set({
        width : 300,
        font : "small",
        readOnly : true
      });
      statuspane.add(l1);

      statuspane.add(new qx.ui.basic.Label(this.__app.tr("Number of Tests: ")).set({
        alignY : "middle"
      }));

      var l2 = new qx.ui.form.TextField("").set({
        width : 40,
        font : "small",
        readOnly : true,
        textAlign : "right"
      });
      this.__testCountField = l2;

      statuspane.add(l2);
      
      this.getSelectedTests().addListener("change", function(ev) {
        var selectedName = "";
        var count = 0;
        var selectedTests = this.getSelectedTests();
        if (selectedTests !== null && selectedTests.length > 0) {
          count = testrunner2.runner.ModelUtil.getItemsByProperty(selectedTests.getItem(0), "type", "test").length;
          selectedName = this.getSelectedTests().getItem(0).getFullName();
        }
        this.__selectedTestField.setValue(selectedName);
        this.__testCountField.setValue(count.toString());
      }, this);

      // System Info
      statuspane.add(new qx.ui.basic.Label(this.__app.tr("System Status: ")).set({
        alignY : "middle"
      }));
      var l3 = new qx.ui.basic.Label("").set({
        alignY : "middle"
      });
      statuspane.add(l3);
      l3.set({ width : 150 });
      this.__statusField = l3;

      return statuspane;
    },
    
    _applyTestSuiteState : function(value, old)
    {
      switch(value) 
      {
        case "loading" :
          this.__testTree.resetModel();
          this.setStatus("Loading tests...");
          break;
        case "ready" :
          this.setStatus("Test suite ready");
          this._setActiveButton(this.__runButton);
          this._applyTestCount(this.getTestCount());
          this.setFailedTestCount(0);
          this.setSuccessfulTestCount(0);
          break;
        case "running" :
          this.__progressBar.setValue(0);
          this.__progressBar.setMaximum(this.getSelectedTests().length);
          this.setStatus("Running tests...");
          this._setActiveButton(this.__stopButton);
          break;
        case "finished" :
          this.setStatus("Test suite finished.");
          this._setActiveButton(this.__runButton);
          break;
        case "aborted" :
          this.setStatus("Test run stopped");
          this._setActiveButton(this.__runButton);
          break;
      };
    },
    
    _applyTestModel : function(value, old)
    {
      if (value && value !== old) {
        var model = qx.data.marshal.Json.createModel(value);
        this.__testTree.setModel(model);
        this.__testTree.openNode(model.getChildren().getItem(0));
                
        var cookieSelection = qx.bom.Cookie.get("selectedTest");
        if (cookieSelection) {
          var found = testrunner2.runner.ModelUtil.getItemByFullName(model, cookieSelection);
          if (found) {
            this.getSelectedTests().removeAll();
            this.getSelectedTests().push(found);
          }
        }
      }
    
    },
    
    _applyTestCount : function(value, old)
    {},
    
    _applyStatus : function(value, old)
    {
      if (value) {
        this.__statusField.setValue(value);
      }
    },
    
    
    _onTestChangeState : function(testResultData) 
    {
      var state = testResultData.getState();
      this.__progressBar.setValue(this.__progressBar.getValue() + 1);
      switch (state) {
        case "skip":
          this.setSkippedTestCount(this.getSkippedTestCount() + 1);
          break;
        case "error":
        case "failure":
          this.setFailedTestCount(this.getFailedTestCount() + 1);
          break;
        case "success":
          this.setSuccessfulTestCount(this.getSuccessfulTestCount() + 1);
      }
    },
    
    /**
     * Toggle the visibility of the run/stop buttons
     * 
     * @param button {qx.ui.core.Widget} The button that should be visible
     */
    _setActiveButton : function(button)
    {
      button.setVisibility("visible");
      if (button == this.__runButton) {
        this.__stopButton.setVisibility("excluded");
      }
      else if (button == this.__stopButton) {
        this.__runButton.setVisibility("excluded");
      }
    },
    
    /**
     * Run the selected tests
     */
    __runTests : function()
    {
      this.reset();
      this.fireEvent("runTests");
    },
    
    /**
     * Stop a running test suite
     */
    __stopTests : function()
    {
      this.fireEvent("stopTests");
    },
    
    /**
     * Reload the test suite
     */
    __reloadAut : function()
    {
      var src = this.getAutUri();
      this.resetAutUri();
      this.setAutUri(src);
    },
    
    // overridden
    addTestResult : function(testResultData)
    {
      this.base(arguments, testResultData);
      this.__testResultView.addTestResult(testResultData);
    },
    
    /**
     * Resets the result counters and clears the results display so that the 
     * suite can be run again.
     */
    reset : function()
    {
      this.resetFailedTestCount();
      this.resetSuccessfulTestCount();
      this.resetSkippedTestCount();
      this.__testResultView.clear();
      /*
       * TODO
      var selection = qx.lang.Array.clone(this.getSelectedTests());
      this.resetSelectedTests();
      this.setSelectedTests(selection);
      */
    },
    
    /**
     * Create keyboard shortcuts for the main controls.
     */
    _makeCommands : function()
    {
      var runTests = new qx.ui.core.Command("Ctrl+R");
      runTests.addListener("execute", this.__runTests, this);
      
      var stopTests = new qx.ui.core.Command("Ctrl+S");
      stopTests.addListener("execute", this.__stopTests, this);
      
      var reloadAut = new qx.ui.core.Command("Ctrl+Shift+R");
      reloadAut.addListener("execute", this.__reloadAut, this);
    }
  },
  
  destruct : function()
  {
    this._disposeObjects(
    "__iframe",
    "__overflowMenu",
    "__menuItemStore",
    "__labelDeco",
    "__logElement",
    "__testTree",
    "__runButton",
    "__stopButton",
    "__progressBar",
    "__testResultView",
    "__testCountField",
    "__selectedTestField",
    "__statusField",
    "__app");
  }
});