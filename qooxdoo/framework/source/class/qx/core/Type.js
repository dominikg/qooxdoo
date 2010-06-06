/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2010 Sebastian Werner, http://sebastian-werner.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

/**
 * Convenient type check API with focus on a small base set features, mainly as
 * used by the property system, and an additional possibility to register
 * new types dynamically.
 * 
 * Built-in support:
 * 
 * * All native types e.g. String, Number, Boolean, Function, ...
 * * Node types. Currently: Node, Element and Document
 * * Special numeric values: Integer, PositiveNumber and PositiveInteger
 * * Check whether the value matches the given regular expression
 * * qooxdoo-specific types Class, Interface, Mixin and Theme
 * * Instanceof checks based on class name
 * * Implementation checks based on interface
 * * Whether a mixin is included into the value
 * 
 * Plus:
 * 
 * * Lists of possible values e.g. ["top","bottom"]
 * * Custom check functions e.g. function(value) { return xxx } (should return boolean)
 */
qx.Class.define("qx.core.Type",
{
  statics :
  {
    __hacks :
    {
      "String" : "$$isString"
    },
    
    __native :
    {
      "String" : 1,
      "Number" : 1,
      "Function" : 1,
      "RegExp" : 1,
      "Date" : 1,
      "Boolean" : 1,
      "Array" : 1,
      "Object" : 1,
      "Error" : 1
    },
    
    __nativeVariations :
    {
      "Integer" : "Number",
      "PositiveNumber" : "Number",
      "PositiveInteger" : "Number"
    },
    
    __primitive :
    {
      "String" : "string",
      "Number" : "number",
      "Boolean" : "boolean"
    },
    
    __stringToClass :
    {
      "[object String]": "String",
      "[object Array]": "Array",
      "[object Object]": "Object",
      "[object RegExp]": "RegExp",
      "[object Number]": "Number",
      "[object Boolean]": "Boolean",
      "[object Date]": "Date",
      "[object Function]": "Function",
      "[object Error]": "Error"
    },    
    
    __classLike :
    {
      "Class" : 1,
      "Mixin" : 1,
      "Interface" : 1,
      "Theme" : 1
    },
    
    __nodeLike :
    {
      "Node" : 1,
      "Element" : 1,
      "Document" : 1
    },
    
    __addons : {},
        
    
    /**
     * Registers new types to the class.
     * 
     * The function should return <code>false</code> whenever the value is invalid.
     * 
     * @param type {String} Identifier of the type. Should be camel-case (with first character being uppercase)
     * @param method {Function} Pointer to function to call
     * @param context {Object} Context to call the function in
     */
    add : function(type, method, context)
    {
      var db = this.__addons;
      
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (db[type]) {
          throw new Error("Type if already registered by another class: " + type);
        }
      }
      
      db[type] = 
      {
        method : method,
        context : context
      };
    },
    
    
    /**
     * Advanced type checks offered by the property system, made available
     * widely for usage in other scenarios as well. 
     * 
     * Just call the method with the value and any of the property 
     * system supported checks and the method throws an error whenever
     * the incoming value does not conform.
     * 
     * @param value {var} Any value
     * @param check {String} Any supported check e.g. native type, class name, ...
     * @param context {Object?window} Only useful when function-checks are used. Defines the context
     *    in this the function is being called.
     * @param errorClass {Error?Error} The error class
     */
    check : function(value, check, context, errorClass)
    {
      var result, nativeCheck, variant, type, hack, nodeType, clazz, construct, iface, mixin, addon, i, l;
      
      if (value == null) 
      {
        result = check == "Null";
        
        if (qx.core.Variant.isSet("qx.debug", "on"))
        {
          if (result == false) {
            throw new errorClass("Value: '" + value + "' is null but needs to be: " + check + "!");
          }
        }        
      }
      
      else if (typeof check == "string")
      {
        // Check basic native types
        if (this.__native[check] || this.__nativeVariations[check]) 
        {
          nativeCheck = this.__nativeVariations[check];
          if (nativeCheck)
          {
            variant = check;
            check = nativeCheck;
          }

          type = this.__primitive[check];
          if (type) {
            result = typeof value == type;
          } 

          if (!result) {
            result = this.__stringToClass[Object.prototype.toString.call(value)] == check;
          }

          hack = this.__hacks[check];
          if (!result && hack) {
            result = hack in value; 
          }

          if (result && check == "Number") {
            result = isFinite(value);
          }

          if (variant) 
          {
            check = variant;

            if (result)
            {
              if (check == "Integer") {
                result = value % 1 == 0;
              } else if (check == "PositiveInteger") {
                result = value % 1 == 0 && value >= 0;
              } else if (check == "PositiveNumber") {
                result = value >= 0;
              }
            }
          }
          
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (result == false) {
              throw new errorClass("Value: '" + value + "' is not type of: " + check + "!");
            }
          }          
        }   

        // Check node types
        else if (this.__nodeLike[check])
        {
          nodeType = value.nodeType;
          result = nodeType != null && 
            (check == "Node" || (nodeType == 1 && check == "Element") || (nodeType == 9 && check == "Document"));
          
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (result == false) {
              throw new errorClass("Value: '" + value + "' is not type of " + check + "!");
            }
          }            
        }

        // Check class like types
        else if (this.__classLike[check]) 
        {
          result = value.$$type == check;
          
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (result == false) {
              throw new errorClass("Value: '" + value + "' is not type of " + check + "!");
            }
          }            
        }
        
        else
        {
          // Check classes, interfaces, mixins
          clazz = qx.Class.getByName(check);
          if (clazz) 
          {
            result = value.hasOwnProperty && value instanceof clazz;
            
            if (qx.core.Variant.isSet("qx.debug", "on"))
            {
              if (result == false) {
                throw new errorClass("Value: '" + value + "' is not an instance of " + check + "!");
              }
            }            
          }
          else
          {
            construct = value.constructor;
            iface = qx.Interface.getByName(check);
            if (iface) 
            {
              result = qx.Bootstrap.hasInterface(construct, iface);
              
              if (qx.core.Variant.isSet("qx.debug", "on"))
              {
                if (result == false) {
                  throw new errorClass("Value: '" + value + "' do not implement interface: " + check + "!");
                }
              }              
            } 
            else
            {
              mixin = qx.Mixin.getByName(check);
              if (mixin) 
              {
                result = qx.Class.hasMixin(construct, mixin);
                
                if (qx.core.Variant.isSet("qx.debug", "on"))
                {
                  if (result == false) {
                    throw new errorClass("Value: '" + value + "' does not include mixin: " + check + "!");
                  }
                }                
              }
            }          
          }        
        } 
        
        // Support dynamically added checks as well
        if (result == null)
        {
          addon = this.__addons[check];
          if (addon) {
            result = addon.method.call(addon.context||window, value);
          }
        }       
      }
          
      // Multi value lists 
      else if (check instanceof Array)
      {
        if (check.indexOf) 
        {
          result = check.indexOf(value) != -1;
        }
        else
        {
          result = false;
          for (i=0, l=check.length; i<l; i++) 
          {
            if (value === check[i]) 
            {
              result = true;
              break;
            }
          }
        }
        
        if (qx.core.Variant.isSet("qx.debug", "on"))
        {
          if (result == false) {
            throw new errorClass("Value: '" + value + "' is not listed in possible values: " + check);
          }
        }        
      }
      
      // Custom regexps
      else if (check instanceof RegExp)
      {
        qx.core.Type.check(value, "String");
        result = check.match(value);
        
        if (qx.core.Variant.isSet("qx.debug", "on"))
        {
          if (result == false) {
            throw new errorClass("Value: '" + value + "' does not match regular expression: " + check);
          }
        }        
      }
      
      // Custom functions
      else if (check instanceof Function) 
      {
        try 
        {
          result = check.call(context||window, value);
          
          // If function has no return value, but did not throw an exception
          // than we think it's OK.
          if (result == null) {
            result = true;
          }
        } 
        catch(ex) 
        {
          if (qx.core.Variant.isSet("qx.debug", "on")) {
            throw new errorClass("Value: '" + value + "' is not accepted by check routine: " + ex);
          } else {
            result = false;
          }
        }
        
        if (qx.core.Variant.isSet("qx.debug", "on"))
        {
          if (result == false) {
            throw new errorClass("Value: '" + value + "' is not accepted by check routine.");
          }
        }
      }      
      
      // Done
      if (result == null || result == false)
      {
        if (!errorClass) {
          errorClass = Error;
        }
        
        if (result == null) {
          throw new errorClass("Unsupported check: " + check);
        } else {
          throw new errorClass("Value: '" + value + "' does not validates as: " + check);
        }
      }
    }    
  }
});