/* exported xml */

var xml,
  gadgets;

( function( window ) {
  "use strict";

  var parseXml;

  gadgets = {};
  gadgets.io = {};

  if ( window.DOMParser ) {
    parseXml = function( xmlStr ) {
      return ( new window.DOMParser() ).parseFromString( xmlStr, "text/xml" );
    };
  }

  gadgets.io.makeRequest = function( url, callback ) {
    var response = {
      data: parseXml( window.xml ),
      errors: [],
      rc: 200,
      text: window.xml
    };

    callback.call( null, response );
  }

} )( window );
