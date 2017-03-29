/* exported DemoContent */
/* eslint-disable no-console */

var DemoContent = function() {
  "use strict";

  // provide the playback functions that control this content which rise-playlist will call
  function _play() {
    console.log( "DemoContent play!" );
    // ...
  }
  function _pause() {
    console.log( "DemoContent pause!" );
    // ...
  }
  function _stop() {
    console.log( "DemoContent stop!" );
    // ...
  }

  function _ready() {
    // construct the "rise-component-ready" event
    var readyEvent = new CustomEvent( "rise-component-ready", {
      "detail": {
        "play": _play,
        "pause": _pause,
        "stop": _stop,
        "done": false
      },
      "bubbles": true
    } );

    // dispatch the event for rise-playlist to receive
    document.querySelector( "#rss" ).dispatchEvent( readyEvent );
  }

  function _build( data ) {
    var itemsContainer = document.querySelector( "#rss .items" ),
      fragment = document.createDocumentFragment(),
      stories = [],
      story = null;

    // loop through entries in data and construct markup
    data.items.forEach( function( entry ) {
      var title,
        date,
        description;

      story = document.createElement( "div" );

      title = document.createElement( "h3" );
      title.innerHTML = entry.title;

      date = document.createElement( "h5" );
      date.innerHTML = entry.pubdate;

      description = document.createElement( "p" );
      description.innerHTML = entry.description;

      story.appendChild( title );
      story.appendChild( date );
      story.appendChild( description );

      stories.push( story );
    } );

    stories.forEach( function( story ) {
      fragment.appendChild( story );
    } );

    // add the constructed node to the DOM
    itemsContainer.appendChild( fragment );

    // content is Ready
    _ready();
  }

  function init() {
    // reference to rise-rss element
    var rss = document.querySelector( "#rss" );

    // register for the "rise-rss-response" event that rise-rss fires
    rss.addEventListener( "rise-rss-response", function( e ) {

      // build the RSS content with the feed data
      _build( e.detail.feed );

    } );

    // execute making a request for the RSS feed data
    rss.go();
  }

  return {
    "init": init
  };
};

/* eslint-enable no-console */
