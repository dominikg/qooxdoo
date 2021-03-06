/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

************************************************************************ */

/* ************************************************************************
#ignore(simulator) 
************************************************************************ */

/**
 * Base class for Demo simulations.
 * 
 * @lint ignoreUndefined(simulator)
 */
qx.Class.define("demobrowser.simulation.demo.Abstract", {

  extend : simulator.unit.TestCase,
  
  type : "abstract",
  
  construct : function()
  {
    this.base(arguments);
    this.demoName = this._getDemoNameFromClass();
    this.demoWindow = simulator.QxSimulation.AUTWINDOW + "."
      + simulator.QxSimulation.QXAPPLICATION 
      + ".viewer._iframe.getWindow()";
  },
  
  members :
  {
    demoName : null,
    __demoList : null,
    __demoLoaded : false,
    demoWindow : null,
    iframeRootLocator : 'qxhv=[@classname=demobrowser.DemoBrowser]/qx.ui.splitpane.Pane/qx.ui.splitpane.Pane/qx.ui.embed.Iframe/qx.ui.root.Application',
    demoTreeLocator : 'qxhv=[@classname=demobrowser.DemoBrowser]/qx.ui.splitpane.Pane/qx.ui.container.Composite/qx.ui.tree.Tree',
    
    
    /**
     * Loads the demo to be tested.
     */
    setUp : function()
    {
      if (!this.__demoLoaded) {
        this.loadDemo();
        this.prepareDemo();
      }
    },
    
    /**
     * Logs any warnings of errors found in the AUT's log or caught by the
     * global error handler
     */
    tearDown : function()
    {
      var entries = this.getSimulation().getRingBufferEntries(this.demoWindow);
      for (var i=0,l=entries.length; i<l; i++) {
        this.warn(this.demoName + " said: " + entries[i]);
      }
      
      var globalErrors = this.getSimulation().getGlobalErrors(this.demoWindow);
      for (var i=0,l=globalErrors.length; i<l; i++) {
        this.error("Global Error Handler caught exception in demo " + this.demoName + ". " + globalErrors[i]);
      }
      
    },
    
    
    /**
     * Loads the demo corresponding to this test class in the demobrowser.
     * A test class name like "demobrowser.simulation.demo.widget.Tree"
     * is converted to a parameter like "#widget~Tree.html". This is
     * appended to the Demobrowser's URL and loaded in the browser.
     */
    loadDemo : function()
    {
      var hash = this.demoName.replace(/\./, "~") + ".html";
      if (!hash) {
        throw new Error("Couldn't determine demo URL from class name!");
      }
      
      var fullUrl = qx.core.Setting.get("simulator.autHost") 
      + qx.core.Setting.get("simulator.autPath") + "#" + hash; 
      
      this.getSimulation().qxOpen(fullUrl);
      this.getSimulation().waitForQxApplication(10000, this.demoWindow);
      this.getSimulation()._prepareNameSpace(this.demoWindow);
      this.__demoLoaded = true;
    },
    
    
    /**
     * Prepares the demo application for testing.
     *  
     *  @lint ignoreUndefined(simulator)
     */
    prepareDemo : function()
    {
      simulator.QxSelenium.getInstance().getEval(this.demoWindow + '.qx.log.Logger.setLevel("warn");');
      this.getSimulation().addRingBuffer(this.demoWindow);
      this.getSimulation().addGlobalErrorHandler(this.demoWindow);
      this.getSimulation().addGlobalErrorGetter(this.demoWindow);
    },
    
    /**
     * Determines the name of the currently tested demo from the name of the 
     * test class, e.g. demobrowser.simulation.demo.widget.Tree -> widget.Tree
     * 
     * @return {String} The demo's name
     */
    _getDemoNameFromClass : function()
    {
      var testClass = this.classname;
      var match = /demobrowser\.simulation\.demo\.(.*)/.exec(testClass);
      if (match && match[1]) {
        return match[1];
      }
      else {
        return;
      }
    }
    
  }
  
});