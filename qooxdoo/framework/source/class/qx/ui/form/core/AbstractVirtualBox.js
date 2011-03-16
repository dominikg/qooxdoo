/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */

/**
 * Basic class for widgets which need a virtual list as popup for example a 
 * SelectBox. It's basically supports a drop-down as popup with a virtual list 
 * and the whole children management.
 *
 * @childControl dropdown {qx.ui.form.core.VirtualDropDownList} The drop-down list.
 */
qx.Class.define("qx.ui.form.core.AbstractVirtualBox",
{
  extend  : qx.ui.core.Widget,
  include : qx.ui.form.MForm,
  implement : qx.ui.form.IForm,
  type : "abstract",


  /**
   * @param model {qx.data.Array?null} The model data for the widget.
   */
  construct : function(model)
  {
    this.base(arguments);

    // set the layout
    var layout = new qx.ui.layout.HBox();
    this._setLayout(layout);
    layout.setAlignY("middle");

    // Register listeners
    this.addListener("keypress", this._handleKeyboard, this);
    this.addListener("click", this._handleMouse, this);
    this.addListener("mousewheel", this._handleMouse, this);
    this.addListener("blur", this._onBlur, this);
    this.addListener("resize", this._onResize, this);

    this._createChildControl("dropdown");

    if (model != null) {
      this.setModel(model);
    } else {
      this.setModel(new qx.data.Array());
    }
  },


  properties :
  {
    // overridden
    focusable :
    {
      refine : true,
      init : true
    },


    // overridden
    width :
    {
      refine : true,
      init : 120
    },


    /** Data array containing the data which should be shown in the drop-down. */
    model :
    {
      check : "qx.data.Array",
      apply : "_applyModel",
      event: "changeModel",
      nullable : false
    },


    /**
     * Delegation object which can have one or more functions defined by the
     * {@link qx.ui.list.core.IListDelegate} interface, but *note* the grouping
     * feature is not supported. 
     */
    delegate :
    {
      apply: "_applyDelegate",
      event: "changeDelegate",
      init: null,
      nullable: true
    },


    /**
     * The path to the property which holds the information that should be
     * displayed as a label. This is only needed if objects are stored in the
     * model.
     */
    labelPath :
    {
      check: "String",
      apply: "_applyLabelPath",
      event: "changeLabelPath",
      nullable: true
    },


    /**
     * A map containing the options for the label binding. The possible keys
     * can be found in the {@link qx.data.SingleValueBinding} documentation.
     */
    labelOptions :
    {
      apply: "_applyLabelOptions",
      event: "changeLabelOptions",
      nullable: true
    },
    
    
    /**
     * The path to the property which holds the information that should be
     * displayed as an icon. This is only needed if objects are stored in the
     * model and icons should be displayed.
     */
    iconPath :
    {
      check: "String",
      event : "changeIconPath",
      apply: "_applyIconPath",
      nullable: true
    },


    /**
     * A map containing the options for the icon binding. The possible keys
     * can be found in the {@link qx.data.SingleValueBinding} documentation.
     */
    iconOptions :
    {
      apply: "_applyIconOptions",
      event : "changeIconOptions",
      nullable: true
    },


    /** Default item height. */
    itemHeight :
    {
      check : "Integer",
      init : 25,
      apply : "_applyRowHeight",
      themeable : true
    },


    /**
     * The maximum height of the drop-down list. Setting this value to 
     * <code>null</code> will set cause the list to be auto-sized.
     */
    maxListHeight :
    {
      check : "Number",
      apply : "_applyMaxListHeight",
      nullable: true,
      init : 200
    }
  },


  members :
  {
    /**
     * @lint ignoreReferenceField(_forwardStates)
     */
    _forwardStates : {
      focused : true
    },

    
    /*
    ---------------------------------------------------------------------------
      PUBLIC API
    ---------------------------------------------------------------------------
    */


    // overridden
    syncWidget : function()
    {
      this._removeBindings();
      this._addBindings();
    },
    
    
    /**
     * Shows the drop-down.
     */
    open : function() {
      this._beforeOpen();
      this.getChildControl("dropdown").open();
    },


    /**
     * Hides the drop-down.
     */
    close : function() {
      this._beforeClose();
      this.getChildControl("dropdown").close();
    },


    /**
     * Toggles the drop-down visibility.
     */
    toggle : function() {
      var dropDown =this.getChildControl("dropdown");
      
      if (dropDown.isVisible()) {
        this.close();
      } else {
        this.open();
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      INTERNAL API
    ---------------------------------------------------------------------------
    */
    

    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "dropdown":
          control = new qx.ui.form.core.VirtualDropDownList(this);
          break;
      }

      return control || this.base(arguments, id, hash);
    },


    /**
     * This abstract method is called when the binding can be added to the 
     * widget. For e.q. bind the drop-down selection with the widget.
     */
    _addBindings : function() {
      throw new Error("Abstract method: '_addBindings()' called!");
    },
    
    
    /**
     * This abstract method is called when the binding can be removed from the 
     * widget. For e.q. remove the bound drop-down selection.
     */
    _removeBindings : function() {
      throw new Error("Abstract method: '_removeBindings()' called!");
    },

    
    /**
     * This method is called before the drop-down is opened.
     */
    _beforeOpen: function() {},
    
    
    /**
     * This method is called before the drop-down is closed.
     */
    _beforeClose: function() {},
    
    
    /**
     * Returns the action dependent on the user interaction: <code>open</code>,
     * <code>close</code>, <code>selectPrevious</code>, <code>selectNext</code>,
     * <code>selectFirst</code> or <code>selectLast</code>.
     *
     * @param event {qx.event.type.KeySequence} The keyboard event.
     * @return {String|null} The action or <code>null</code> when interaction 
     *  doesn't hit any action.
     */
    _getAction : function(event)
    {
      var keyIdentifier = event.getKeyIdentifier();
      var isOpen = this.getChildControl("dropdown").isVisible();

      if (
        !isOpen && event.isAltPressed() && 
        (keyIdentifier === "Down" || keyIdentifier === "Up")
      ) {
        return "open";
      } else if (isOpen && keyIdentifier === "Escape") {
        return "close";
      } else if (!isOpen && keyIdentifier === "Up") {
        return "selectPrevious";
      } else if (!isOpen && keyIdentifier === "Down") {
        return "selectNext";
      } else if (!isOpen && keyIdentifier === "PageUp") {
        return "selectFirst";
      } else if (!isOpen && keyIdentifier === "PageDown") {
        return "selectLast";
      } else {
        return null;
      }
    },


    /**
     * Helper Method to create bind path depended on the passed path.
     *
     * @param source {String} The path to the selection.
     * @param path {String?null} The path to the item's property.
     * @return {String} The created path.
     */
    _getBindPath : function(source, path)
    {
      var bindPath = source + "[0]";

      if (path != null && path != "") {
        bindPath += "." + path;
      }

      return bindPath;
    },
    

    /*
    ---------------------------------------------------------------------------
      EVENT LISTENERS
    ---------------------------------------------------------------------------
    */


    /**
     * Handler for the blur event of the current widget.
     *
     * @param event {qx.event.type.Focus} The blur event.
     */
    _onBlur : function(event) {
      this.close();
    },


    /**
     * Handles the complete keyboard events for user interaction. If there is 
     * no defined user interaction {@link #_getAction}, the event is delegated 
     * to the {@link qx.ui.form.core.VirtualDropDownList#_handleKeyboard} method.
     *
     * @param event {qx.event.type.KeySequence} The keyboard event.
     */
    _handleKeyboard : function(event)
    {
      var action = this._getAction(event);

      switch(action)
      {
        case "open":
          this.open();
          break;

        case "close":
          this.close();
          break;

        case "selectPrevious":
          this.getChildControl("dropdown").selectPrevious();
          break;

        case "selectNext":
          this.getChildControl("dropdown").selectNext();
          break;

        case "selectFirst":
          this.getChildControl("dropdown").selectFirst();
          break;

        case "selectLast":
          this.getChildControl("dropdown").selectLast();
          break;

        default:
          this.getChildControl("dropdown")._handleKeyboard(event);
          break;
      }
    },


    /**
     * Handles all mouse events dispatched on the widget.
     *
     * @param event {qx.event.type.Mouse|qx.event.type.MouseWheel} The mouse event.
     */
    _handleMouse : function(event)
    {
      var type = event.getType();
      var isOpen = this.getChildControl("dropdown").isVisible();

      if (type === "mousewheel" && !isOpen)
      {
        var selectNext = event.getWheelDelta() > 0 ? true : false;
        if (selectNext == true) {
          this.getChildControl("dropdown").selectNext();
        } else {
          this.getChildControl("dropdown").selectPrevious();
        }
      }
    },


    /**
     * Updates drop-down minimum size.
     *
     * @param event {qx.event.type.Data} Data event.
     */
    _onResize : function(event){
      this.getChildControl("dropdown").setMinWidth(event.getData().width);
    },

    
    /*
    ---------------------------------------------------------------------------
      APPLY ROUTINES
    ---------------------------------------------------------------------------
    */


    // property apply
    _applyModel : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setModel(value);
      qx.ui.core.queue.Widget.add(this);
    },


    // property apply
    _applyDelegate : function(value, old) {
      this.getChildControl("dropdown").getChildControl("list").setDelegate(value);
    },


    // property apply
    _applyLabelPath : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setLabelPath(value);
      qx.ui.core.queue.Widget.add(this);
    },


    // property apply
    _applyLabelOptions : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setLabelOptions(value);
      qx.ui.core.queue.Widget.add(this);
    },
    
    
    // property apply
    _applyIconPath : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setIconPath(value);
      qx.ui.core.queue.Widget.add(this);
    },


    // property apply
    _applyIconOptions : function(value, old)
    {
      this.getChildControl("dropdown").getChildControl("list").setIconOptions(value);
      qx.ui.core.queue.Widget.add(this);
    },


    // property apply
    _applyRowHeight : function(value, old) {
      this.getChildControl("dropdown").getChildControl("list").setRowHeight(value);
    },


    // property apply
    _applyMaxListHeight : function(value, old) {
      this.getChildControl("dropdown").getChildControl("list").setMaxHeight(value);
    }
  },
  
  
  destruct : function() {
    this._removeBindings();
  }
});
