var xml, gadgets;

(function (window) {
  "use strict";

  gadgets = {};
  gadgets.io = {};

  gadgets.io.makeRequest = function (url, callback) {
    var response = {
      data: window.xml,
      errors: [],
      rc: 200,
      text: window.xml
    };

    callback.call(null, response);
  }

})(window);
