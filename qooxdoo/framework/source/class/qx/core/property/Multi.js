/* ********************************************************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2009-2010 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

******************************************************************************************************************** */

/* ********************************************************************************************************************

#require(qx.core.property.Core)
#use(qx.event.dispatch.Direct)

******************************************************************************************************************** */

/**
 * Multi-level property which support multiple values per property with integrated priorization. The following fields
 * are available for properties depending on their configuration:
 * 
 * # Inheritable
 * # Theme
 * # User
 * # Override
 * 
 * Higher values mean higher priority e.g. user values override themed values. There is an additional value
 * which is the init value and is stored property-wide (read: class specific - not instance specific).
 * 
 * Additional configuration flags (compared to simple properties):
 * 
 * <ul>
 * <li><strong>inheritable</strong>: Whether the property value should be inheritable. If the property does not have a
 *   user defined or an init value, the property will try to get the value from the parent of the current object.</li>
 * <li><strong>themeable</strong>: Whether the property allows a themable value read dynamically from a theming system.
 *   The object containing this property needs to implement a method <code>getThemedValue</code>.</li>
 * </ul>
 */
qx.Bootstrap.define("qx.core.property.Multi",
{
  statics :
  {
    /*
    ---------------------------------------------------------------------------
      INTERNAL DATA
    ---------------------------------------------------------------------------
    */    
    
    /** {Integer} Number of properties created. For debug proposes. */
    __counter : 0,
    
    /** {Integer} Maps multi property names to global property IDs */
    __propertyNameToId : {},
    
    /**
     * {Map} Configuration for property fields
     */
    __priorityToFieldConfig : 
    {
      // Override
      4 : {},
      
      // User (aka Instance-specific value)
      3: {},
      
      // Theme
      2: {
        get : "getThemedValue"
      },
      
      // Inheritance
      1 : {
        get : "getInheritedValue"
      }
    },
    
    
    /**
     * Maps the name of a field to its priority
     * 
     */
    __fieldToPriority :
    {
      inherited : 1,
      theme : 2,
      user : 3,
      override : 4
    },
    
    
    
    /*
    ---------------------------------------------------------------------------
      PUBLIC API
    ---------------------------------------------------------------------------
    */    
    
    /**
     * Adds a new multi-field property to the given class.
     * 
     * Please note that you need to define one of "init" or "nullable". Otherwise you might get errors during runtime
     * function calls.
     *  
     * @param clazz {Class} The class to modify
     * @param name {String} Name of the property. Camel-case. No special characters.
     * @param config {Map} Configuration for the property to being created
     */
    add : function(clazz, name, config)
    {
      /*
      ---------------------------------------------------------------------------
         INTRO: IDENTICAL BETWEEN SIMPLE AND MULTI
      ---------------------------------------------------------------------------
      */
      
      // Improve compressibility
      var Undefined;
            
      // Increase counter
      this.__counter++;
            
      // Generate property ID
      // Identically named property might store data on the same field as in this case this is typically on different
      // classes. We reserve four slots for storing data: inheritance, theme, user and override
      var propertyNameToId = this.__propertyNameToId;
      var propertyId = propertyNameToId[name];
      if (!propertyId) 
      {
        propertyId = propertyNameToId[name] = qx.core.property.Core.ID;
        
        // Number of fields + Meta field to store where we store the data
        qx.core.property.Core.ID += 5;
      }
    
      // Store init value (shared data between instances)
      var members = clazz.prototype;
      if (config.init !== Undefined) 
      {
        var propertyInitKey = "$$init-" + name;
        members[propertyInitKey] = config.init;
      }
      
      // Precalc
      var up = qx.Bootstrap.$$firstUp[name] || qx.Bootstrap.firstUp(name);
         
      // Shorthands: Better compression/obfuscation/performance
      var nullable = config.nullable; 
      var priorityToFieldConfig = this.__priorityToFieldConfig;
      
      
      
      // Shorthands: Better compression/obfuscation/performance
      var propertyNullable=config.nullable, propertyEvent=config.event, 
        propertyApply=config.apply, propertyValidate=config.validate;
      

              
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: SETTER
      ---------------------------------------------------------------------------
      */

      var setter = function(modifyPriority)
      {
        return function(newValue)
        {
          var context = this;

          if (qx.core.Variant.isSet("qx.debug", "on")) {
            qx.core.property.Debug.checkSetter(context, config, arguments);
          }
          
          if (propertyValidate) {
            qx.core.Type.check(newValue, propertyValidate, context, qx.core.ValidationError);
          }          
          
          var data = context.$$data;
          if (!data) {
            data = context.$$data = {};
          }
          else
          {
            // Read old value
            var oldPriority = data[propertyId];
            if (oldPriority !== Undefined) 
            {
              var oldGetter = priorityToFieldConfig[oldPriority].get;
              if (oldGetter) {
                var oldValue = context[oldGetter](name);
              } else {
                var oldValue = data[propertyId+oldPriority];
              }            
            }
          }
          
          // context.debug("Save " + name + "[" + modifyPriority + "]=" + newValue);
          
          // Store new value
          data[propertyId+modifyPriority] = newValue;
          
          // Ignore lower-priority changes
          if (oldPriority === Undefined || oldPriority <= modifyPriority) 
          {
            // Whether the storage field was changed
            if (oldPriority !== modifyPriority) {
              data[propertyId] = modifyPriority;
            }

            // Fallback to init value on prototype chain (when supported)
            // This is always the value on the current class, not explicitely the class which creates the property. 
            // This is mainly for supporting init value overrides with "refined" properties
            if (oldValue === Undefined && propertyInitKey) {
              oldValue = context[propertyInitKey];
            }

            // this.debug("Value Compare: " + newValue + " !== " + oldValue);
            // Whether the value has been modified
            if (newValue !== oldValue) 
            {
              // Call apply
              if (config.apply) {
                context[config.apply](newValue, oldValue, config.name);
              }

              // Fire event
              if (config.event) {
                context.fireDataEvent(config.event, newValue, oldValue);
              }

              // Inheritance support
              if (config.inheritable) {
                qx.core.property.Multi.__changeInheritedHelper(context, newValue, oldValue, config);
              }              
            }     
          }
          
          return newValue;
        };      
      };



      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: RESETTER
      ---------------------------------------------------------------------------
      */
          
      var resetter = function(modifyPriority)
      {
        return function(value)
        {
          var context = this;

          if (qx.core.Variant.isSet("qx.debug", "on")) {
            qx.core.property.Debug.checkResetter(context, config, arguments);
          }
          
          var data = context.$$data;        
          
          // context.debug("Delete " + name + "[" + modifyPriority + "]");

          // Only need to react when current field is resetted
          var oldPriority = data[propertyId];
          if (oldPriority === modifyPriority) 
          {
            // Read old value
            var oldValue = data[propertyId+oldPriority];
            
            // We lost the current value, now we need to find the next stored value
            var newValue, newGetter;
            for (var newPriority=modifyPriority-1; newPriority>0; newPriority--)
            {
              newGetter = priorityToFieldConfig[newPriority].get;
              if (newGetter) {
                newValue = context[newGetter] ? context[newGetter](name) : Undefined;
              } else {
                newValue = data[propertyId+newPriority];
              }              

              if (newValue !== Undefined) {
                break;
              }             
            }
            
            // No value has been found
            if (newValue === Undefined) 
            {
              newPriority = Undefined;
              
              // Let's try the class-wide init value
              if (propertyInitKey) {
                newValue = context[propertyInitKey];
              }
              else if (qx.core.Variant.isSet("qx.debug", "on"))
              {
                // Still no value. We warn about that the property is not nullable.
                if (!nullable) {
                  context.error("Missing value for: " + name + " (during reset())");
                }
              }
            }
            
            // Update current field
            data[propertyId] = newPriority;
          }
          
          // Remove value from store
          // This is placed here, because we need to keep the old value first and only want to do this when needed.
          // Do not use delete operator for performance reasons: just modifying the value to undefined is enough.
          data[propertyId+modifyPriority] = Undefined;

          // Only need to react when current field is resetted
          if (oldPriority === modifyPriority && oldValue !== newValue) 
          {         
            // Call apply
            if (config.apply) {
              context[config.apply](newValue, oldValue, config.name);
            }

            // Fire event
            if (config.event) {
              context.fireDataEvent(config.event, newValue, oldValue);
            }

            // Inheritance support
            if (config.inheritable) {
              qx.core.property.Multi.__changeInheritedHelper(context, newValue, oldValue, config);
            }            
          }
        };
      };      
      
      
      
      
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: GETTER
      ---------------------------------------------------------------------------
      */

      var getter = function()
      {
        var context = this;

        if (qx.core.Variant.isSet("qx.debug", "on")) {
          qx.core.property.Debug.checkGetter(context, config, arguments);
        }
        
        var data = context.$$data;

        var currentPriority = data && data[propertyId];
        if (currentPriority === Undefined) 
        {
          // Fallback to init value on prototype chain (when supported)
          // This is always the value on the current class, not explicitely the class which creates the property. 
          // This is mainly for supporting init value overrides with "refined" properties
          if (propertyInitKey) {
            return context[propertyInitKey];
          }
          
          // Alternatively chose null, if possible
          if (nullable) {
            return null;
          }
          
          if (qx.core.Variant.isSet("qx.debug", "on")) 
          {
            context.error("Missing value for: " + name + 
              " (during get()). Either define an init value, make the property nullable or define a fallback value.");
          }
          
          return;
        }
        
        // Special get() support for themable/inheritable properties
        var currentGetter = priorityToFieldConfig[currentPriority].get;
        if (currentGetter) {
          return context[currentGetter](name);
        } else {
          return data[propertyId+currentPriority];
        }
      };
      
      
      
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: ATTACH METHODS
      ---------------------------------------------------------------------------
      */
      
      members["get" + up] = getter;

      // There are exactly two types of init methods:
      // 1. Initializing the value given in the property configuration (calling apply methods, firing events, etc.)
      // 2. Initializing the value during instance creation (useful for instance-specific non-shared values)
      if (propertyInitKey)
      {
        members["init" + up] = function()
        {
          var context = this;
          var data = context.$$data;
          if (data) 
          {
            // Check whether there is already another value assigned.
            // In this case the whole function could be left early.
            var oldPriority = data[propertyId];
            if (oldPriority !== Undefined) {
              return;
            }            
          }
          
          // Call apply
          if (config.apply) {
            context[config.apply](context[propertyInitKey], Undefined, config.name);
          }

          // Fire event
          if (config.event) {
            context.fireDataEvent(config.event, context[propertyInitKey], Undefined);
          }

          // Inheritance support
          if (config.inheritable) {
            qx.core.property.Multi.__changeInheritedHelper(context, context[propertyInitKey], Undefined, config);
          }          
        };
      }
      
      members["set" + up] = setter(3);
      members["reset" + up] = resetter(3);
      
      if (this.RUNTIME_OVERRIDE)
      {
        members["setRuntime" + up] = setter(4);
        members["resetRuntime" + up] = resetter(4);
      }
      
      
      
      /*
      ---------------------------------------------------------------------------
         FACTORY METHODS :: GOODIES
      ---------------------------------------------------------------------------
      */
            
      if (config.check === "Boolean") 
      {
        members["toggle" + up] = function() {
          this["set" + up](!this["get" + up]());
        }

        members["is" + up] = getter;
      }
    },    
    
    
    /**
     * Returns a value from a specific field for the given property - ignoring the priorities.
     * 
     * @param obj {qx.core.Object} Any object with the given property
     * @param propertyName {String} Name of the property to query
     * @param field {String} One of "init", "inheritance", "theme", "user" or "override"
     */
    getSingleValue : function(obj, propertyName, field) 
    {
      var key = this.__propertyNameToId[propertyName] + this.__fieldToPriority[field];
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (typeof key != "number" || isNaN(key)) {
          throw new Error("Invalid property or field: " + propertyName + ", " + field);
        }
      }
      
      return obj.$$data[key];
    },
    
    
    /**
     * Imports a list of values. Useful for batch-applying a whole set of properties. Supports
     * <code>undefined</code> values to reset properties.
     * 
     * @param obj {qx.ui.core.Widget} Any widget
     * @param values {Map} Map of properties to apply
     * @param oldValues {Map} Map of old property values. Just used for comparision. 
     *    Required for theme changes. In case of a state change the old value is not available otherwise.
     * @param field {String} Storage field to modify
     */
    importData : function(obj, values, oldValues, field)
    {
      // Check existence of data structure
      var data = obj.$$data;
      if (!data) {
        data = obj.$$data = {};
      }

      // Commonly used variables
      var Undefined;
      var propertyNameToId = this.__propertyNameToId;
      var priorityToFieldConfig = this.__priorityToFieldConfig;
      var modifyPriority = this.__fieldToPriority[field];
      var PropertyUtil = qx.core.property.Util;
      var propertyName, propertyId, newValue, oldValue, oldPriority, propertyInitKey;
      
      // Import every given property
      for (propertyName in values) 
      {
        propertyId = propertyNameToId[propertyName];
        
        // Ignore if there is a higher priorized value
        // Earliest return option: Higher priorized value set
        oldPriority = data[propertyId];
        if (oldPriority > modifyPriority) {
          continue;
        }
        
        newValue = values[propertyName];
        
        // If nothing is set at the moment and no new value is given then simply ignore the property for the moment
        if (oldPriority === Undefined && newValue === Undefined) {
          continue;
        }
        
        // Read out old value
        if (oldPriority != null) 
        {
          if (oldValues && oldPriority == modifyPriority) {
            oldValue = oldValues[propertyName];
          } 
          else 
          {
            var oldGetter = priorityToFieldConfig[oldPriority].get;
            if (oldGetter) {
              oldValue = obj[oldGetter] ? obj[oldGetter](propertyName) : Undefined;
            } else {
              oldValue = data[propertyId+oldPriority];
            }           
          }          
        }
        else
        {
          oldValue = Undefined;
        }
        
        // Compare old and new value
        // Second earliest return option: New value given and identical to old
        if (oldValue === newValue) {
          continue;
        }
        
        // Reset implementation block
        if (newValue === Undefined) 
        {
          // We lost the current value, now we need to find the next stored value
          var newValue, newGetter;
          
          for (var newPriority=modifyPriority-1; newPriority>0; newPriority--)
          {
            newGetter = priorityToFieldConfig[newPriority].get;
            if (newGetter) {
              newValue = obj[newGetter] ? obj[newGetter](propertyName) : Undefined;
            } else {
              newValue = data[propertyId+newPriority];
            }              

            if (newValue !== Undefined) {
              break;
            }             
          }
          
          // No value has been found
          if (newValue === Undefined) 
          {
            newPriority = Undefined;
            
            // Let's try the class-wide init value
            propertyInitKey = "$$init-" + propertyName;
            if (propertyInitKey) 
						{
              newValue = obj[propertyInitKey];
            }
            else if (qx.core.Variant.isSet("qx.debug", "on"))
            {
              // Still no value. We warn about that the property is not nullable.
              var config = PropertyUtil.getPropertyDefinition(obj.constructor, propertyName);
              if (!config.nullable) {
                obj.error("Missing value for: " + propertyName + " (during reset() - from theme system)");
              }
            }
          }          

          // Be sure that priority is right
          data[propertyId] = newPriority;
        }
        
        // Set implementation block
        else if (oldPriority != modifyPriority)
        {
          data[propertyId] = modifyPriority;
        } 

        // Call change helper
        // Third earlist "return" option, ok, not really a return option, but we at least omit useless change calls 
        // when values are identical
        if (newValue !== oldValue) 
        {
          var config = PropertyUtil.getPropertyDefinition(obj.constructor, propertyName);
          
          // Call apply
          if (config.apply) {
            obj[config.apply](newValue, oldValue, config.name);
          }

          // Fire event
          if (config.event) {
            obj.fireDataEvent(config.event, newValue, oldValue);
          }

          // Inheritance support
          if (config.inheritable) {
            this.__changeInheritedHelper(obj, newValue, oldValue, config);
          }          
        }        
      }
    },    
    
    
    
    /*
    ---------------------------------------------------------------------------
      PUBLIC INHERITANCE API
    ---------------------------------------------------------------------------
    */    

    /**
     * Returns a list of all inheritable properties supported by the given class
     * 
     * @param clazz {Class} Class to query
     * @return {Map} All inheritable property names and a dictionary for faster lookup
     */
    getInheritableProperties : function(clazz)
    {
      var result = clazz.$$inheritables;
      if (result) 
      {
        if (qx.core.Variant.isSet("qx.debug", "on")) {
          qx.log.Logger.debug(this, "You may choose to access inheritable properties via: obj.$$inheritables || qx.core.property.Multi.getInheritableProperties(obj) for better performance.");
        }
        
        return result;
      }
      
      result = clazz.$$inheritables = {};

      // Find all local properties which are inheritable
      var props = clazz.$$properties;
      if (props) 
      {
        for (var name in props) 
        {
          if (props[name].inheritable) {
            result[name] = props[name];
          }
        }
      }
        
      var superClass = clazz.superclass;
      if (superClass && superClass !== Object)
      {
        var remote = superClass.$$inheritables || this.getInheritableProperties(superClass);
        for (var name in remote) {
          result[name] = remote[name];
        }
      }
      
      return result;
    },    
    
  
    /**
     * Process an object whenever the parent has changed. 
     * 
     * Should be called by the object itself which was modified. Required are both parents, the old and the new one 
     * to make this work correctly. All given objects need to support the "$$parent" and "$$data" object fields.
     * 
     * This function is quite optimized for reduced additional function calls. The only expensive scenarios are when 
     * a property is currently inherited or the new parent offers a value which needs to aquired using a get() 
     * call (e.g. themed or itself inherited). This means it is basically cheap for initial application creation, 
     * but is more expensive as soon as the application is running and objects are moved around dynamically.
     * 
     * @param obj {qx.core.Object} The modified object
     * @param newParent {qx.core.Object} The current parent
     * @param oldParent {qx.core.Object} The new parent
     */
    moveObject : function(obj, newParent, oldParent)
    {
      // Fast compare (e.g. both null - should not happen, but still)
      if (newParent == oldParent) {
        return;
      }
      
      // Runtime variables
      var Undefined,
        priorityToFieldConfig, propertyNameToId, inheritedPriority, initPriority,
        clazz, properties, propertyName, propertyId, propertyConfig, propertyInitKey,
        data, oldPriority, oldValue, newValue,
        newParentData, newParentPriority, newParentGetter;
      
      // Fill with shared values through processing of all properties
      priorityToFieldConfig = this.__priorityToFieldConfig;
      propertyNameToId = this.__propertyNameToId;
      inheritedPriority = this.__fieldToPriority.inherited;
      initPriority = this.__fieldToPriority.init;

      // Cache data field from object
      data = obj.$$data;
      if (!data) {
        data = obj.$$data = {};
      }

      // Cache data field from new parent
      newParentData = newParent ? newParent.$$data : Undefined;

      // Iterate through all inheritable properties
      clazz = obj.constructor;
      properties = clazz.$$inheritables || this.getInheritableProperties(clazz);
      for (propertyName in properties)
      {
        propertyId = propertyNameToId[propertyName];
        propertyInitKey = "$$init-" + propertyName;
        
        
        // 
        // READ OLD VALUE
        //
        
        oldPriority = data ? data[propertyId] : Undefined;
        if (oldPriority === Undefined)
        {
          // Fallback to class-wide init value
          oldValue = obj[propertyInitKey];
        }
        else if (oldPriority == inheritedPriority)
        {
          // If we have used an inherited value, just ask the old parent for its value
          oldValue = oldParent.get(propertyName);
        }
        else 
        {
          // Higher priority field exists
          continue;
        }
        
        
        //
        // READ NEW VALUE
        // 
        
        // Read new parent's value
        newValue = Undefined;
        if (newParent)
        {
          newParentPriority = newParentData ? newParentData[propertyId] : Undefined;
          if (newParentPriority === Undefined)
          {
            // try to read old value from init value
            newValue = newParent[propertyInitKey];
          }
          else
          {
            newParentGetter = priorityToFieldConfig[newParentPriority].get;
            if (newParentGetter) {
              newValue = newParent[newParentGetter] ? newParent[newParentGetter](propertyName) : Undefined;
            } else {
              newValue = newParentData[propertyId+newParentPriority];
            }
            
            if (newValue === Undefined) {
              newValue = newParent[propertyInitKey];
            }
          }
        }
        
        // In cases where we have no new parent or the new parent don't has a value
        // itself as well, then we try to use our init value as the new value
        if (newValue === Undefined) 
        {
          newValue = obj[propertyInitKey];
          
          if (data[propertyId] !== Undefined) {
            data[propertyId] = Undefined;
          }            
        }
        else
        {
          data[propertyId] = inheritedPriority;
        }
        
        
        
        //
        // PERFORM CHANGES
        //        
        
        // Compare values
        if (newValue !== oldValue)
        {
          // obj.debug("Refresh: " + propertyName + ": " + oldValue + " => " + newValue);
          
          propertyConfig = properties[propertyName];

          // Call apply
          if (propertyConfig.apply) {
            obj[propertyConfig.apply](newValue, oldValue, propertyName);
          }

          // Fire event
          if (propertyConfig.event) {
            obj.fireDataEvent(propertyConfig.event, newValue, oldValue);
          }

          // Update children
          this.__changeInheritedHelper(obj, newValue, oldValue, propertyConfig);
        }
      }
    },


    
    
    /*
    ---------------------------------------------------------------------------
      INTERNALS INHERITANCE
    ---------------------------------------------------------------------------
    */    
    
    /**
     * Updates children of a object where the given property has been modified.
     * 
     * @param obj {qx.core.Object} Object which was modified
     * @param newValue {var} Current newValue
     * @param oldValue {var} Old value
     * @param config {Map} Property configuration
     */
    __changeInheritedHelper : function(obj, newValue, oldValue, config)
    {
      // TODO: Improved this lookup via $$children
      if (!obj._getChildren) {
        return;
      }
      var children = obj._getChildren();
      var length = children.length;
      if (!length) {
        return;
      }
      
      var Undefined;

      var propertyNameToId = this.__propertyNameToId;
      var priorityToFieldConfig = this.__priorityToFieldConfig;
      var fieldToPriority = this.__fieldToPriority;
      var inheritedPriority = fieldToPriority.inherited;
      var initPriority = fieldToPriority.init;
      
      var propertyName=config.name, propertyApply=config.apply, propertyEvent=config.event;
      var propertyId = propertyNameToId[propertyName];
      var propertyInitKey = "$$init-" + propertyName;

      var child, childData, childOldPriority, childOldValue, childOldGetter, childNewValue;
      var Util = qx.core.property.Util;

      for (var i=0, l=children.length; i<l; i++)
      {
        child = children[i];

        // Block child if it does not support the changed property
        if (!Util.getPropertyDefinition(child.constructor, propertyName)) {
          continue;
        }
        
        childData = child.$$data;
        if (!childData) {
          childData = child.$$data = {};
        }
        
        // Quick lookup (higher priority value exist)
        childOldPriority = childData[propertyId];
        if (childOldPriority !== Undefined && childOldPriority > inheritedPriority) {
          continue;
        }

        
        //
        // Compute child's old value
        //
        
        if (childOldPriority === inheritedPriority)
        {
          childOldValue = oldValue;
        }
        else if (childOldPriority !== Undefined)
        {
          childOldGetter = priorityToFieldConfig[childOldPriority].get;
          if (childOldGetter) {
            childOldValue = child[childOldGetter](propertyName);
          } else {
            childOldValue = child[propertyId+childOldPriority];
          }
        }
        else
        {
          childOldValue = child[propertyInitKey];
        }
        
        
        //
        // Compute child's new value
        //
        
        childNewValue = newValue;
        if (childNewValue === Undefined)
        {
          // Simplified here a bit, as only the init value has a lower priority than the inheritance.
          // Read from instance-specific init value first
          childNewValue = childData[propertyId+initPriority];          
          if (childNewValue !== Undefined) 
          {
            childData[propertyId] = initPriority;
          }

          // Fallback to class-wide init value
          else
          {
            childNewValue = child[propertyInitKey];
            childData[propertyId] = Undefined;
          }
        }
        else
        {
          // Remember that we use the inherited value here
          childData[propertyId] = inheritedPriority;
        }
        
        
        //
        // Publish change
        //
        
        if (childNewValue !== childOldValue)
        {
          // Call apply
          if (propertyApply) {
            child[propertyApply](childNewValue, childOldValue, propertyName);
          }

          // Fire event
          if (propertyEvent) {
            child.fireDataEvent(propertyEvent, childNewValue, childOldValue);
          }

          // Go into recursion
          this.__changeInheritedHelper(child, childNewValue, childOldValue, config);
        }
      }      
    }    
  }
});
