var xml;

(function (window, gadgets) {
  "use strict";

  gadgets.io.makeRequest = function (url, callback) {
    var response = {
      data: window.xml,
      errors: [],
      rc: 200,
      text: window.xml
    };

    callback.call(null, response);
  }

})(window, gadgets);
