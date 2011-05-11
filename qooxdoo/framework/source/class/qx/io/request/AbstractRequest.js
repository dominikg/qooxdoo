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
     * Tristan Koch (tristankoch)

************************************************************************ */

/**
 * EXPERIMENTAL - NOT READY FOR PRODUCTION
 *
 * AbstractRequest serves as a base class for {@link qx.io.request.Xhr}
 * and {@link qx.io.request.Jsonp}. It contains methods to conveniently
 * communicate with transports found in {@link qx.bom.request}.
 *
 * The general procedure to derive a new request is to choose a
 * transport (override {@link #_createTransport}) and link
 * the transport’s response (override {@link #_getParsedResponse}).
 *
 * To adjust the behavior of {@link #send} override
 * {@link #_getConfiguredUrl} and {@link #_setRequestHeader}.
 */
qx.Class.define("qx.io.request.AbstractRequest",
{
  type : "abstract",

  extend : qx.core.Object,

  construct : function()
  {
    this.base(arguments);

    var transport = this._transport = this._createTransport();

    this.__onReadyStateChangeBound = qx.lang.Function.bind(this._onReadyStateChange, this);
    this.__onLoadBound = qx.lang.Function.bind(this._onLoad, this);
    this.__onLoadEndBound = qx.lang.Function.bind(this._onLoadEnd, this);
    this.__onAbortBound = qx.lang.Function.bind(this._onAbort, this);
    this.__onTimeoutBound = qx.lang.Function.bind(this._onTimeout, this);
    this.__onErrorBound = qx.lang.Function.bind(this._onError, this);

    transport.onreadystatechange = this.__onReadyStateChangeBound;
    transport.onload = this.__onLoadBound;
    transport.onloadend = this.__onLoadEndBound;
    transport.onabort = this.__onAbortBound;
    transport.ontimeout = this.__onTimeoutBound;
    transport.onerror = this.__onErrorBound;
  },

  events :
  {
    /**
     * Fires on every change of the transport’s readyState.
     */
    "readystatechange": "qx.event.type.Event",

    /**
     * Fires when request is complete and HTTP status indicates success.
     *
     * Note: Some transports, e.g. {@link qx.bom.request.Jsonp}, do not
     * expose the HTTP status of the response. Instead they fake a
     * successful response.
     */
    "success": "qx.event.type.Event",

    /**
     * Fires when request is complete.
     *
     * Ignores the HTTP status.
     */
    "load": "qx.event.type.Event",

    /**
     * Fires when processing of request completes.
     *
     * A request completes no matter if it was successful,
     * or a network/timeout error occured.
     */
    "loadend": "qx.event.type.Event",

    /**
     * Fires when request was aborted.
     */
    "abort": "qx.event.type.Event",

    /**
     * Fires when request reached timeout limit.
     */
    "timeout": "qx.event.type.Event",

    /**
     * Fires when request could not complete
     * due to a network error.
     */
    "error": "qx.event.type.Event",

    /**
     * Fires when request completed with erroneous HTTP status.
     *
     * For instance, indicating a server error or missing resource.
     *
     * Note: Only ever fired for transports revealing an HTTP status.
     */
    "remoteError": "qx.event.type.Event",

    /**
     * Fires on timeout, error or remote error.
     *
     * This event is fired for convenience. Usually, it is recommended
     * to handle error related events in a more granular approach.
     */
    "fail": "qx.event.type.Event",

    /**
    * Fires on change of the parsed response.
    *
    * This event allows to use data binding with the
    * parsed response as source.
    *
    * For example:
    *
    * <pre class="javascript">
    * // req is an instance of qx.io.request.*,
    * // label an instance of qx.ui.basic.Label
    * req.bind("response", label, "value");
    * </pre>
    *
    * The response is parsed (and therefore changed) only
    * after the request completes successfully. This means
    * that when a new request is made the initial emtpy value
    * is ignored, instead only the final value is bound.
    *
    */
    "changeResponse": "qx.event.type.Data"
  },

  properties :
  {
    /**
     * The URL of the resource to request.
     *
     * Note: Depending on the configuration of the request
     * and/or the transport chosen, query params may be appended
     * automatically.
     */
    url: {
      check: "String"
    },

    /**
     * Map of headers to be send as part of the request. Both
     * key and value are serialized to string.
     *
     * Note: Depending on the HTTP method used (e.g. POST),
     * additional headers may be set automagically.
     *
     */
    requestHeaders: {
      check: "Map",
      nullable: true
    },

    /**
     * Timeout limit in seconds. Default (0) means no limit.
     */
    timeout: {
      check: "Number",
      nullable: true,
      init: 0
    },

    /**
     * Data to be send as part of the request.
     *
     * Supported types:
     *
     * * String
     * * Map
     * * qooxdoo Object
     *
     * For every supported type except strings, a URL encoded string
     * with unsafe characters escaped is internally generated and sent
     * with the request. However, if a string is given the user must make
     * sure it is properly formatted and escaped. See
     * {@link qx.lang.Object#toUriParameter}.
     *
     */
    requestData: {
      check: function(value) {
        return qx.lang.Type.isString(value) ||
               qx.Class.isSubClassOf(value.constructor, qx.core.Object) ||
               qx.lang.Type.isObject(value);
      },
      nullable: true
    },

    /**
     * Authentication delegate.
     *
     * The delegate must implement {@link qx.io.request.auth.IAuthDelegate}.
     */
    authentication: {
      check: "qx.io.request.authentication.IAuthentication",
      nullable: true
    }
  },

  members :
  {

    /**
     * Bound handlers.
     */
    __onReadyStateChangeBound: null,
    __onLoadBound: null,
    __onLoadEndBound: null,
    __onAbortBound: null,
    __onTimeoutBound: null,
    __onErrorBound: null,

    /**
     * Parsed response.
     */
    __response: null,

    /**
     * Holds transport.
     */
    _transport: null,

    /*
    ---------------------------------------------------------------------------
      CONFIGURE TRANSPORT
    ---------------------------------------------------------------------------
    */

    /**
     * Create and return transport.
     *
     * This method MUST be overridden, unless the constructor is overridden as
     * well. It is called by the constructor and should return the transport that
     * is to be interfaced.
     *
     * @return {qx.bom.request} Transport.
     */
    _createTransport: function() {
      throw new Error("Abstract method call");
    },

    /**
     * Get configured URL.
     *
     * A configured URL typically includes a query string that
     * encapsulates transport specific settings such as request
     * data or no-cache settings.
     *
     * This method MAY be overridden. It is called in {@link #send}
     * before the request is initialized.
     *
     * @return {String} The configured URL.
     */
    _getConfiguredUrl: function() {},

    /**
     * A request may include additional headers depending on the transport.
     *
     * This method MAY be overridden. It is called in {@link #send}
     * after the request is initialized.
     */
    _setRequestHeaders: function() {},

    /**
     * Get parsed response.
     *
     * Is called in the {@link _onReadyStateChange} event handler
     * to parse and store the transport’s response.
     *
     * This method MUST be overridden.
     *
     * @return {String} The parsed response of the request.
     */
    _getParsedResponse: function() {
      throw new Error("Abstract method call");
    },

    /*
    ---------------------------------------------------------------------------
      INTERACT WITH TRANSPORT
    ---------------------------------------------------------------------------
    */

    /**
     * Send request.
     */
    send: function() {
      var transport = this._transport,
          url, method, async, serializedData;

      //
      // Open request
      //

      url = this._getConfiguredUrl();

      // Drop fragment (anchor) from URL as per
      // http://www.w3.org/TR/XMLHttpRequest/#the-open-method
      if (/\#/.test(url)) {
        url = url.replace(/\#.*/, "");
      }

      transport.timeout = this.getTimeout() * 1000;

      // Support transports with enhanced feature set
      method = qx.lang.Type.isFunction(this.getMethod) ? this.getMethod() : "GET";
      async = qx.lang.Type.isFunction(this.getAsync) ? this.getAsync() : true;

      // Open
      if (qx.core.Environment.get("qx.debug.io")) {
        this.debug("Open low-level request with method: " +
          method + ", url: " + url + ", async: " + async);
      }

      transport.open(method, url, async);

      //
      // Send request
      //

      serializedData = this._serializeData(this.getRequestData());

      this._setRequestHeaders();
      this.__setAuthRequestHeaders();
      this.__setUserRequestHeaders();

      // Send
      if (qx.core.Environment.get("qx.debug.io")) {
        this.debug("Send low-level request");
      }
      method == "GET" ? transport.send() : transport.send(serializedData);
    },

    /**
     * Abort request.
     */
     abort: function() {
       if (qx.core.Environment.get("qx.debug.io")) {
         this.debug("Abort request");
       }
       this._transport.abort();
     },

     /*
     ---------------------------------------------------------------------------
       QUERY TRANSPORT
     ---------------------------------------------------------------------------
     */

    /**
     * Get low-level transport.
     *
     * Note: To be used with caution!
     *
     * This method can be used to query the transport directly,
     * but should be used with caution. Especially, it
     * is not advisable to call any destructive methods
     * such as {@link qx.bom.request.Xhr#open} or
     * {@link qx.bom.request.Xhr#send}.
     *
     * @return {qx.bom.request.Xhr} The transport
     */

     //
     // This method mainly exists so that some methods found in the
     // low-level transport can be deliberately omitted here,
     // but still be accessed should it be absolutely necessary.
     //
     // Valid use cases include to query the transport’s responseXML
     // property if performance is critical and any extra parsing
     // should be avoided at all costs.
     //
    getTransport: function() {
      return this._transport;
    },

    /**
     * Get ready state.
     *
     * States can be:
     * UNSENT:           0,
     * OPENED:           1,
     * HEADERS_RECEIVED: 2,
     * LOADING:          3,
     * DONE:             4
     *
     * @return {Number} Ready state.
     */
    getReadyState: function() {
      return this._transport.readyState;
    },

    /**
     * Get HTTP status code.
     *
     * @return {Number} The HTTP status code.
     */
    getStatus: function() {
      return this._transport.status;
    },

    /**
     * Get HTTP status text.
     *
     * @return {String} The HTTP status text.
     */
    getStatusText: function() {
      return this._transport.statusText;
    },

    /**
     * Get raw (unprocessed) response.
     *
     * @return {String} The raw response of the request.
     */
    getResponseText: function() {
      return this._transport.responseText;
    },

    /**
     * Get all response headers from response.
     *
     * @return {String} All response headers.
     */
    getAllResponseHeaders: function() {
      return this._transport.getAllResponseHeaders();
    },

    /**
     * Get a single response header from response.
     *
     * @param  key {String}
     *         Key of the header to get the value from.
     * @return {String}
     *         Response header.
     */
    getResponseHeader: function(key) {
      return this._transport.getResponseHeader(key);
    },

    /**
     * Get the content type response header from response.
     *
     * @return {String}
     *         Content type response header.
     */
    getResponseContentType: function() {
      return this.getResponseHeader("Content-Type");
    },

    /**
     * Whether request completed (is done).
     */
    isDone: function() {
      return this.getReadyState() === 4;
    },

    /*
    ---------------------------------------------------------------------------
      RESPONSE
    ---------------------------------------------------------------------------
    */

    /**
     * Get parsed response.
     *
     * @return {String} The parsed response of the request.
     */
    getResponse: function() {
      return this.__response;
    },

    /**
     * Set response.
     *
     * @param response {String} The parsed response of the request.
     */
    _setResponse: function(response) {
      var oldResponse = response;

      if (this.__response !== response) {
        this.__response = response;
        this.fireEvent("changeResponse", qx.event.type.Data, [this.__response, oldResponse]);
      }
    },

    /*
    ---------------------------------------------------------------------------
      EVENT HANDLING
    ---------------------------------------------------------------------------
    */

    /**
     * Handle "readystatechange" event.
     */
    _onReadyStateChange: function() {
      var parsedResponse;

      if (qx.core.Environment.get("qx.debug.io")) {
        this.debug("Fire readyState: " + this.getReadyState());
      }

      this.fireEvent("readystatechange");

      if (this.isDone()) {

        if (qx.core.Environment.get("qx.debug.io")) {
          this.debug("Request completed with HTTP status: " + this.getStatus());
        }

        // Successful HTTP status
        if (qx.bom.request.Xhr.isSuccessful(this.getStatus())) {

          // Parse response
          if (qx.core.Environment.get("qx.debug.io")) {
            this.debug("Response is of type: '" + this.getResponseContentType() + "'");
          }
          parsedResponse = this._getParsedResponse();
          this._setResponse(parsedResponse);

          this.fireEvent("success");

        // Erroneous HTTP status
        } else {
          this.fireEvent("remoteError");

          // A remote error failure
          this.fireEvent("fail");
        }
      }
    },

    /**
     * Handle "load" event.
     */
    _onLoad: function() {
      this.fireEvent("load");
    },

    /**
     * Handle "loadend" event.
     */
    _onLoadEnd: function() {
      this.fireEvent("loadend");
    },

    /**
     * Handle "abort" event.
     */
    _onAbort: function() {
      this.fireEvent("abort");
    },

    /**
     * Handle "timeout" event.
     */
    _onTimeout: function() {
      this.fireEvent("timeout");

      // A network error failure
      this.fireEvent("fail");
    },

    /**
     * Handle "error" event.
     */
    _onError: function() {
      this.fireEvent("error");

      // A network error failure
      this.fireEvent("fail");
    },

    /*
    ---------------------------------------------------------------------------
      INTERNAL / HELPERS
    ---------------------------------------------------------------------------
    */

    /**
     * Serialize data
     *
     * @param data {String|Map|qx.core.Object} Data to serialize.
     * @return {String} Serialized data.
     */
    _serializeData: function(data) {
      var isPost = typeof this.getMethod !== "undefined" && this.getMethod() == "POST";

      if (!data) {
        return;
      }

      if (qx.lang.Type.isString(data)) {
        return data;
      }

      if (qx.Class.isSubClassOf(data.constructor, qx.core.Object)) {
        return qx.util.Serializer.toUriParameter(data);
      }

      if (qx.lang.Type.isObject(data)) {
        return qx.lang.Object.toUriParameter(data, isPost);
      }
    },

    /**
     * Set request headers.
     */
    __setUserRequestHeaders: function() {
      var requestHeaders = this.getRequestHeaders();

      for (var key in requestHeaders) {
        if (requestHeaders.hasOwnProperty(key)) {
          this._transport.setRequestHeader(key, requestHeaders[key]);
        }
      }
    },

    /**
    * Read auth delegate and set headers accordingly.
    */
    __setAuthRequestHeaders: function() {
      var auth = this.getAuthentication(),
          transport = this._transport;

      if (auth) {
        auth.getAuthHeaders().forEach(function(header) {

          if (qx.core.Environment.get("qx.debug")) {
            qx.core.Assert.assertString(header.key);
            qx.core.Assert.assertString(header.value);
          }

          if (header.key && header.value) {
            if (qx.core.Environment.get("qx.debug.io")) {
              this.debug(
                "Set authentication header '" + header.key +
                "' to '" + header.value + "'");
            }
            transport.setRequestHeader(header.key, header.value);
          }
        }, this);
      }
    }
  },

  environment:
  {
    "qx.debug.io": false
  },

  destruct: function()
  {
    var transport = this._transport,
        noop = function() {};

    if (this._transport) {
      transport.onreadystatechange = transport.onload = transport.onloadend =
      transport.onabort = transport.ontimeout = transport.onerror = noop;

      transport.dispose();
    }
  }
});
