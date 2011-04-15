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

/* ************************************************************************
#ignore(Klass)
************************************************************************ */

/* ************************************************************************
#asset(qx/test/xmlhttp/*)
************************************************************************ */

/**
 * @lint ignoreUndefined(Klass)
 */
qx.Class.define("qx.test.io.request.Xhr",
{
  extend : qx.dev.unit.TestCase,

  include : [qx.test.io.MRemoteTest,
             qx.dev.unit.MMock,
             qx.dev.unit.MRequirements],

  members :
  {
    setUp: function() {
      this.setUpRequest();
    },

    setUpRequest: function() {
      this.req = new qx.io.request.Xhr;
      this.req.setUrl("url");
    },

    setUpFakeTransport: function() {
      this.transport = this.stub(new qx.bom.request.Xhr());
      this.spy(this.transport, "open");
      this.spy(this.transport, "setRequestHeader");
      this.spy(this.transport, "send");
      this.spy(this.transport, "abort");
      this.stub(qx.io.request.Xhr.prototype, "_createTransport").
          returns(this.transport);

      this.setUpRequest();
    },

    setUpFakeServer: function() {
      this.useFakeServer();
      this.setUpRequest();

      this.server = this.getServer();
      this.server.respondWith("GET", "/found", [200, {"Content-Type": "text/html"}, "FOUND"]);
    },

    setUpKlass: function() {
      qx.Class.define("Klass", {
        extend : qx.core.Object,

        properties :
        {
          affe: {
            init: true
          }
        }
      });
    },

    tearDown: function() {
      this.getSandbox().restore();
      this.req.dispose();

      // May fail in IE
      try { qx.Class.undefine("Klass"); } catch(e) {}
    },

    //
    // Full stack tests
    //

    "test: fetch resource": function() {
      // TODO: Adjust URL when file://
      this.require(["http"]);

      var req = new qx.io.request.Xhr(),
          url = this.noCache(this.getUrl("qx/test/xmlhttp/sample.txt"));

      req.addListener("success", function(e) {
        this.resume(function() {
          this.assertEquals("SAMPLE", e.getTarget().getResponseText());
        }, this);
      }, this);

      req.setUrl(url);
      req.send();

      this.wait();
    },

    // "test: fetch resources simultaneously": function() {
    //   this.require(["php"]);
    //
    //   var count = 1,
    //       upTo = 20,
    //       startedAt = new Date(),
    //       duration = 0;
    //
    //   for (var i=0; i<upTo; i++) {
    //     var req = new qx.io.request.Xhr(),
    //         url = this.noCache(this.getUrl("qx/test/xmlhttp/loading.php")) + "&duration=6";
    //
    //     req.addListener("success", function() {
    //       this.resume(function() {
    //         // In seconds
    //         duration = (new Date() - startedAt) / 1000;
    //         this.debug("Request #" + count + " completed (" +  duration + ")");
    //         if (count == upTo) {
    //           return;
    //         }
    //
    //         ++count;
    //         this.wait(6000 + 1000);
    //       }, this);
    //     }, this);
    //
    //     req.setUrl(url);
    //     req.send();
    //   }
    //
    //   // Provided two concurrent requests are made (each 6s), 20 requests
    //   // (i.e. 10 packs of requests) should complete after 60s
    //   this.wait(60000 + 1000);
    // },

    //
    // General
    //

    "test: dispose transport on destruct": function() {
      this.setUpFakeTransport();
      this.spy(this.transport, "dispose");
      this.req.dispose();

      this.assertCalled(this.transport.dispose);
    },

    //
    // Helper
    //

    "test: append params string to URL": function() {
      var url = "http://example.com/path",
          params = "affe=true&maus=false",
          expected = "http://example.com/path?affe=true&maus=false",
          result = qx.io.request.Xhr.appendParamsToUrl(url, params);

      this.assertEquals(expected, result);
    },

    "test: append params string to URL with query string": function() {
      var url = "http://example.com/path?giraffe=true",
          params = "affe=true&maus=false",
          expected = "http://example.com/path?giraffe=true&affe=true&maus=false",
          result = qx.io.request.Xhr.appendParamsToUrl(url, params);

      this.assertEquals(expected, result);
    },

    "test: append params hash to URL": function() {
      var url = "http://example.com/path",
          params = {affe: true, maus: false},
          result = qx.io.request.Xhr.appendParamsToUrl(url, params);

      this.assertTrue(/^http.*example.com\/path/.test(result));
      this.assertTrue(/affe=true/.test(result));
      this.assertTrue(/maus=false/.test(result));
    },

    "test: indicate success": function() {
      this.setUpFakeTransport();
      this.transport.readyState = 4;
      var isSuccessful = qx.lang.Function.bind(this.req.isSuccessful, this.req);

      this.transport.status = 200;
      this.assertTrue(isSuccessful());

      this.transport.status = 304;
      this.assertTrue(isSuccessful());

      this.transport.status = 404;
      this.assertFalse(isSuccessful());

      this.transport.status = 500;
      this.assertFalse(isSuccessful());
    },

    //
    // Send
    //

    "test: send GET request": function() {
      this.setUpFakeTransport();
      this.req.send();

      this.assertCalledWith(this.transport.open, "GET", "url", true);
      this.assertCalled(this.transport.send);
    },

    "test: send POST request": function() {
      this.setUpFakeTransport();
      this.req.setMethod("POST");
      this.req.send();

      this.assertCalledWith(this.transport.open, "POST");
    },

    "test: send sync request": function() {
      // TODO: Firefox: "Access to restricted URI denied"
      this.require(["http"]);

      this.setUpFakeTransport();
      this.req.setAsync(false);
      this.req.send();

      this.assertCalledWith(this.transport.open, "GET", "url", false);
      this.assertCalled(this.transport.send);
    },

    "test: send authorized request": function() {
      this.setUpFakeTransport();
      this.req.setUsername("affe");
      this.req.setPassword("geheim");
      this.req.send();

      this.assertCalledWith(this.transport.open, "GET", "url", true, "affe", "geheim");
    },

    "test: drop fragment from URL": function() {
      this.setUpFakeTransport();
      this.req.setUrl("example.com#fragment");
      this.req.send();

      this.assertCalledWith(this.transport.open, "GET", "example.com");
    },

    //
    // Data with GET
    //

    "test: not send data with GET request": function() {
      this.setUpFakeTransport();
      this.req.setData("str");
      this.req.send();

      this.assertCalledWith(this.transport.send, null);
    },

    "test: append string data to URL with GET request": function() {
      this.setUpFakeTransport();
      this.req.setData("str");
      this.req.send();

      this.assertCalledWith(this.transport.open, "GET", "url?str");
    },

    "test: append obj data to URL with GET request": function() {
      this.setUpFakeTransport();
      this.req.setData({affe: true});
      this.req.send();

      this.assertCalledWith(this.transport.open, "GET", "url?affe=true");
    },

    "test: append qooxdoo obj data to URL with GET request": function() {
      this.setUpFakeTransport();
      this.setUpKlass();
      var obj = new Klass();
      this.req.setData(obj);
      this.req.send();

      this.assertCalledWith(this.transport.open, "GET", "url?affe=true");
    },

    //
    // Data with POST
    //

    "test: set content type urlencoded for POST request": function() {
      this.setUpFakeTransport();
      this.req.setMethod("POST");
      this.req.send();

      this.assertCalledWith(this.transport.setRequestHeader,
           "Content-type", "application/x-www-form-urlencoded");
    },

    "test: send string data with POST request": function() {
      this.setUpFakeTransport();
      this.req.setMethod("POST");
      this.req.setData("str");
      this.req.send();

      this.assertCalledWith(this.transport.send, "str");
    },

    "test: send obj data with POST request": function() {
      this.setUpFakeTransport();
      this.req.setMethod("POST");
      this.req.setData({"af fe": true});
      this.req.send();

      this.assertCalledWith(this.transport.send, "af+fe=true");
    },

    "test: send qooxdoo obj data with POST request": function() {
      this.setUpFakeTransport();
      this.setUpKlass();
      var obj = new Klass();
      this.req.setMethod("POST");
      this.req.setData(obj);
      this.req.send();

      this.assertCalledWith(this.transport.send, "affe=true");
    },

    //
    // Header and Params
    //

    "test: set request headers": function() {
      this.setUpFakeTransport();
      this.req.setRequestHeaders({key1: "value", key2: "value"});
      this.req.send();

      this.assertCalledWith(this.transport.setRequestHeader, "key1", "value");
      this.assertCalledWith(this.transport.setRequestHeader, "key2", "value");
    },

    "test: not append cache parameter to URL": function() {
      this.setUpFakeTransport();
      this.req.send();

      var msg = "nocache parameter must not be set";
      this.assertFalse(/\?nocache/.test(this.transport.open.args[0][1]), msg);
    },

    "test: append nocache parameter to URL": function() {
      this.setUpFakeTransport();
      this.req.setCache(false);
      this.req.send();

      var msg = "nocache parameter must be set to number";
      this.assertTrue(/\?nocache=\d{13,}/.test(this.transport.open.args[0][1]), msg);
    },

    "test: set nocache request header": function() {
      this.setUpFakeTransport();
      this.req.setCache("force-validate");
      this.req.send();

      this.assertCalledWith(this.transport.setRequestHeader, "Cache-Control", "no-cache");
    },

    //
    // Events
    //

    "test: fire multiple readystatechange": function() {
      this.setUpFakeServer();
      var req = this.req,
          server = this.server,
          spy = this.spy();

      req.setUrl("/found");
      req.setMethod("GET");

      req.addListener("readystatechange", spy);
      req.send();
      server.respond();

      this.assertCallCount(spy, 4);
    },

    "test: fire success": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport,
          that = this;

      this.assertEventFired(req, "success", function() {
        transport.readyState = 4;
        transport.status = 200;
        transport.onreadystatechange();
      });
    },

    "test: not fire success": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport;

      this.assertEventNotFired(req, "success", function() {
        transport.status = 200;
        transport.onreadystatechange();
      });
    },

    "test: fire load": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport;

      this.assertEventFired(req, "load", function() {
        transport.onload();
      });
    },

    "test: fire loadend": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport;

      this.assertEventFired(req, "loadend", function() {
        transport.onloadend();
      });
    },

    "test: fire abort": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport;

      this.assertEventFired(req, "abort", function() {
        transport.onabort();
      });
    },

    "test: fire timeout": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport;

      req.setTimeout(100);
      req.send();

      this.assertEventFired(req, "timeout", function() {
        transport.ontimeout();
      });

      this.assertEquals(100, transport.timeout);
    },

    "test: fire error": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport;

      this.assertEventFired(req, "error", function() {
        transport.onerror();
      });
    },

    //
    // Handler
    //

    // Documentation only
    "test: event handler receives request": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport,
          that = this;

      transport.readyState = 4;
      transport.status = 200;
      transport.responseText = "Affe";

      req.addListener("success", function(e) {
        that.assertEquals(e.getTarget(), req);
        that.assertEquals("Affe", e.getTarget().getResponseText());
      });

      transport.onreadystatechange();
    },

    // Documentation only
    "test: event handler's this is request": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport,
          that = this;

      transport.readyState = 4;
      transport.status = 200;
      transport.responseText = "Affe";

      req.addListener("success", function() {
        that.assertEquals(this, req);
        that.assertEquals("Affe", this.getResponseText());
      });

      transport.onreadystatechange();
    },

    //
    // Properties
    //

    "test: sync XHR properties for every readyState": function() {
      // TODO: Status is [0, 200, 200, 200] when from file://
      this.require(["http"]);

      this.setUpFakeServer();
      var req = this.req,
          server = this.server,
          readyStates = [],
          statuses = [];

      req.setUrl("/found");
      req.setMethod("GET");

      readyStates.push(req.getReadyState());
      req.addListener("readystatechange", function() {
        readyStates.push(req.getReadyState());
        statuses.push(req.getStatus());
      }, this);

      req.send();
      server.respond();

      this.assertArrayEquals([0, 1, 2, 3, 4], readyStates);
      this.assertArrayEquals([0, 0, 200, 200], statuses);
      this.assertEquals("text/html", req.getAllResponseHeaders()["content-type"]);
      this.assertEquals("text/html", req.getResponseHeader("Content-Type"));
      this.assertEquals("OK", req.getStatusText());
      this.assertEquals("FOUND", req.getResponseText());
    },

    "test: get response": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport;

      transport.readyState = 4;
      transport.status = 200;
      transport.responseText = "Affe";
      transport.onreadystatechange();

      this.assertEquals("Affe", req.getResponse());
    },

    "test: get response by change event": function() {
      this.setUpFakeTransport();
      var req = this.req,
          transport = this.transport,
          that = this;

      transport.readyState = 4;
      transport.status = 200;
      transport.responseText = "Affe";

      this.assertEventFired(req, "changeResponse", function() {
        transport.onreadystatechange();
      }, function(e) {
        that.assertEquals("Affe", e.getData());
      });

    },

    //
    // Abort
    //

    "test: abort request": function() {
      this.setUpFakeTransport();
      this.req.abort();

      this.assertCalled(this.transport.abort);
    },

    noCache: function(url) {
      return url + "?nocache=" + Math.random();
    }
  }
});
