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

************************************************************************ */

/**
 * Basic class for all kind of element modification
 */
qx.Class.define("qx.bom.Element",
{
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /*
    ---------------------------------------------------------------------------
      UTILITIES
    ---------------------------------------------------------------------------
    */

    __allowMarkup : {},

    /**
     * Detects if the DOM support a <code>document.createElement</code> call with a 
     * <code>String</code> as markup like:
     * 
     * <pre class="javascript">
     * document.createElement("<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>");
     * </pre>
     *
     * Element creation with markup is not standard compatible with Document Object Model (Core) Level 1, but
     * Internet Explorer supports it. With an exception that IE9 in IE9 standard mode is standard compatible and
     * doesn't support element creation with markup. 
     *
     * @param win {Window?} Window to check for
     * @return {Boolean} <code>true</code> if the DOM supports it, <code>false</code> otherwise.
     */
    allowCreationWithMarkup : function(win) 
    {
      if (!win) {
        win = window;
      }

      // key is needed to allow using different windows
      var key = qx.core.ObjectRegistry.toHashCode(win);
      var allow = qx.bom.Element.__allowMarkup;
      if (allow[key] == undefined)
      {
        try {
          win.document.createElement("<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>");
          allow[key] = true;
        } catch(e) {
          allow[key] = false;
        }
      }

      return qx.bom.Element.__allowMarkup[key];
    },


    /**
     * Creates and returns an DOM helper element.
     *
     * @param win {Window?} Window to create the element for
     * @return {Element} The created element node
     */
    getHelperElement : function (win)
    {
      if (!win) {
        win = window;
      }

      // key is needed to allow using different windows
      var key = qx.core.ObjectRegistry.toHashCode(win);

      if (!qx.bom.Element.__helperElement[key])
      {
        var helper = qx.bom.Element.__helperElement[key] = win.document.createElement("div");

        // innerHTML will only parsed correctly if element is appended to document
        if (qx.core.Environment.get("engine.name") == "webkit")
        {
          helper.style.display = "none";
          win.document.body.appendChild(helper);
        }
      }

      return qx.bom.Element.__helperElement[key];
    },




    /*
    ---------------------------------------------------------------------------
      CREATION
    ---------------------------------------------------------------------------
    */

    /** {Map} A list of all attributes which needs to be part of the initial element to work correctly */
    __initialAttributes :
    {
      "onload" : true,
      "onpropertychange" : true,
      "oninput" : true,
      "onchange" : true,
      "name" : true,
      "type" : true,
      "checked" : true,
      "disabled" : true
    },

    __helperElement : {},


    /**
     * Creates an DOM element.
     *
     * Attributes may be given directly with this call. This is critical
     * for some attributes e.g. name, type, ... in many clients.
     *
     * @param name {String} Tag name of the element
     * @param attributes {Map?} Map of attributes to apply
     * @param win {Window?} Window to create the element for
     * @return {Element} The created element node
     */
    create : function(name, attributes, win)
    {
      if (!win) {
        win = window;
      }

      if (!name) {
        throw new Error("The tag name is missing!");
      }

      var initial = this.__initialAttributes;
      var attributesHtml = "";

      for (var key in attributes)
      {
        if (initial[key]) {
          attributesHtml += key + "='" + attributes[key] + "' ";
        }
      }

      var element;

      // If specific attributes are defined we need to process
      // the element creation in a more complex way.
      if (attributesHtml != "")
      {
        if (qx.bom.Element.allowCreationWithMarkup(win)) {
          element = win.document.createElement("<" + name + " " + attributesHtml + ">");
        }
        else
        {
          var helper = qx.bom.Element.getHelperElement(win);

          helper.innerHTML = "<" + name + " " + attributesHtml + "></" + name + ">";
          element = helper.firstChild;
        }
      }
      else
      {
        element = win.document.createElement(name);
      }

      for (var key in attributes)
      {
        if (!initial[key]) {
          qx.bom.element.Attribute.set(element, key, attributes[key]);
        }
      }

      return element;
    },





    /*
    ---------------------------------------------------------------------------
      MODIFICATION
    ---------------------------------------------------------------------------
    */

    /**
     * Removes all content from the given element
     *
     * @param element {Element} element to clean
     * @return {String} empty string (new HTML content)
     */
    empty : function(element) {
      return element.innerHTML = "";
    },




    /*
    ---------------------------------------------------------------------------
      UTILS
    ---------------------------------------------------------------------------
    */

    /**
     * Clone given DOM element. May optionally clone all attached
     * events (recursively) as well.
     *
     * @param element {Element} Element to clone
     * @param events {Boolean?false} Whether events should be copied as well
     * @return {Element} The copied element
     */
    clone : function(element, events)
    {
      var clone;

      if (events || ((qx.core.Environment.get("engine.name") == "mshtml") && !qx.xml.Document.isXmlDocument(element)))
      {
        var mgr = qx.event.Registration.getManager(element);
        var all = qx.dom.Hierarchy.getDescendants(element);
        all.push(element);
      }

      // IE copies events bound via attachEvent() when
      // using cloneNode(). Calling detachEvent() on the
      // clone will also remove the events from the orignal.
      //
      // In order to get around this, we detach all locally
      // attached events first, do the cloning and recover
      // them afterwards again.
      if ((qx.core.Environment.get("engine.name") == "mshtml"))
      {
        for (var i=0, l=all.length; i<l; i++) {
          mgr.toggleAttachedEvents(all[i], false);
        }
      }

      // Do the native cloning
      var clone = element.cloneNode(true);

      // Recover events on original elements
      if ((qx.core.Environment.get("engine.name") == "mshtml"))
      {
        for (var i=0, l=all.length; i<l; i++) {
          mgr.toggleAttachedEvents(all[i], true);
        }
      }

      // Attach events from original element
      if (events === true)
      {
        // Produce recursive list of elements in the clone
        var cloneAll = qx.dom.Hierarchy.getDescendants(clone);
        cloneAll.push(clone);

        // Process all elements and copy over listeners
        var eventList, cloneElem, origElem, eventEntry;
        for (var i=0, il=all.length; i<il; i++)
        {
          origElem = all[i];
          eventList = mgr.serializeListeners(origElem);

          if (eventList.length > 0)
          {
            cloneElem = cloneAll[i];

            for (var j=0, jl=eventList.length; j<jl; j++)
            {
              eventEntry = eventList[j];
              mgr.addListener(cloneElem, eventEntry.type, eventEntry.handler, eventEntry.self, eventEntry.capture);
            }
          }
        }
      }

      // Finally return the clone
      return clone;
    }
  }
});
