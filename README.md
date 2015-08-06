# RSS Web Component [![Circle CI](https://circleci.com/gh/Rise-Vision/rise-rss/tree/master.svg?style=svg)](https://circleci.com/gh/Rise-Vision/rise-rss/tree/master)

## Introduction

`rise-rss` is a Polymer Web Component that works with [Rise Vision](https://www.risevision.com/), the digital signage management application for [Web Designers](http://risevision.com/web-designers). It fetches any RSS/Atom feed and returns the data as a Javascript object.

The specified feed is periodically retrieved if the `refresh` attribute is set, although a minimum refresh time of 1 minute is enforced.

At this time the RSS Web Component is only compatible with the Rise Vision [Offline Player](https://github.com/Rise-Vision/offline-player) and Chrome is the only browser that this project and Rise Vision supports.

### Entries
Entries from an RSS feed can optionally be limited to a specific amount.

To limit the number of entries, an `entries` attribute should be added to the `<rise-rss>` element.

#### Examples
```
<rise-rss url="http://example.com/rss.xml" entries="5"></rise-rss>
```

## Usage
To use the RSS Web Component, you should first install it using Bower:
```
bower install https://github.com/Rise-Vision/rise-rss.git
```

Next, construct your HTML page. You should include `webcomponents-lite.min.js` before any code that touches the DOM, and load the web component using an HTML Import. For example:

```
<!DOCTYPE html>
<html>
  <head>
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    <link rel="import" href="bower_components/rise-rss/rise-rss.html">
  </head>
  <body>
    <rise-rss
      url="http://example.com/rss.xml"
      entries="10"
      refresh="5"></rise-rss>
      
    // NOTE: This dependency is only required when using component within Rise Vision Chrome App Player
    <script src="//rvashow2.appspot.com/gadgets/gadgets.min.js"></script>  

    <script>
      // Wait for 'WebComponentsReady'.
      window.addEventListener('WebComponentsReady', function(e) {
        var rss = document.querySelector('rise-rss');

        // Respond to events it fires.
        rss.addEventListener('rise-rss-response', function(e) {
          if (e.detail && e.detail.feed) {
            console.log(e.detail.feed); // Javascript object representation of feed
          }
        });

        rss.go(); // Executes a request.
      });
    </script>
  </body>
</html>
```

The web component returns a Javascript object with the following format (example is RSS 2.0):

```
{
  type: 'rss 2.0',
  title: 'Example RSS 2.0',
  link: 'http://www.example.org',
  description: 'Example RSS 2.0 -  Test description',
  language: 'en-us',
  pubdate: 'Tue, 10 Jun 2003 04:00:00 GMT',
  lastbuilddate: 'Tue, 10 Jun 2003 09:41:01 GMT',
  docs: 'http://example.com/rss',
  generator: 'Weblog Editor 2.0',
  managingeditor: 'editor@example.com',
  webmaster: 'webmaster@example.com',
  items:  [
    {
      title: 'RSS 2.0 - Entry 1 title',
      link: 'http://example.com/test.php',
      description: 'Item 1 - Sample description',
      pubdate: 'Tue, 03 Jun 2003 09:39:21 GMT',
      guid: 'http://example.com/rss2.html#example1'
    },
    {
      title: 'RSS 2.0 - Entry 2 title',
      link: 'http://example.com/test.php',
      description: 'Item 2 - Sample description',
      pubdate: 'Fri, 30 May 2003 11:06:42 GMT',
      guid: 'http://example.com/rss2.html#example2'
    },
    {
      title: 'RSS 2.0 - Entry 3 title',
      link: 'http://example.com/test.php',
      description: 'Item 3 - Sample description',
      pubdate: 'Tue, 27 May 2003 08:37:32 GMT',
      guid: 'http://example.com/rss2.html#example3'
    },
    {
      title: 'RSS 2.0 - Entry 4 title',
      link: 'http://example.com/test.php',
      description: 'Item 4 - Sample description',
      pubdate: 'Tue, 20 May 2003 08:56:02 GMT',
      guid: 'http://example.com/rss2.html#example4'
    }
  ]
}
```

## Documentation
For further documentation on `rise-rss` attributes, methods, usage, and a comprehensive demo, please see [here](http://rise-vision.github.io/rise-rss).

## Built With
- [Polymer](https://www.polymer-project.org/)
- [npm](https://www.npmjs.org)
- [Bower](http://bower.io/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)
- [Polyserve](https://www.npmjs.com/package/polyserve)
- [web-component-tester](https://github.com/Polymer/web-component-tester) for testing
- [feedme.js](https://github.com/fent/feedme.js) for RSS/Atom parsing 

## Development

### Dependencies
* [Git](http://git-scm.com/) - Git is a free and open source distributed version control system that is used to manage our source code on Github.
* [npm](https://www.npmjs.org/) & [Node.js](http://nodejs.org/) - npm is the default package manager for Node.js. npm runs through the command line and manages dependencies for an application. These dependencies are listed in the _package.json_ file.
* [Bower](http://bower.io/) - Bower is a package manager for Javascript libraries and frameworks. All third-party Javascript dependencies are listed in the _bower.json_ file.
* [Gulp](http://gulpjs.com/) - Gulp is a Javascript task runner. It lints, runs unit and E2E (end-to-end) tests, minimizes files, etc. Gulp tasks are defined in _gulpfile.js_.
* [Polyserve](https://www.npmjs.com/package/polyserve) - A simple web server for using bower components locally.

### Local Development Environment Setup and Installation
To make changes to the web component, you'll first need to install the dependencies:

- [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js and npm](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm)
- [Bower](http://bower.io/#install-bower) - To install Bower, run the following command in Terminal: `npm install -g bower`. Should you encounter any errors, try running the following command instead: `sudo npm install -g bower`.
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) - To install Gulp, run the following command in Terminal: `npm install -g gulp`. Should you encounter any errors, try running the following command instead: `sudo npm install -g gulp`.
- [Polyserve](https://www.npmjs.com/package/polyserve) - To install Polyserve, run the following command in Terminal: `npm install -g polyserve`. Should you encounter any errors, try running the following command instead: `sudo npm install -g polyserve`.

The web components can now be installed by executing the following commands in Terminal:
```
git clone https://github.com/Rise-Vision/rise-rss.git
cd rise-rss
npm install
bower install
```

### Run Locally
To access the demo locally, run the following command in Terminal: `polyserve`

Now in your browser, navigate to: 

```
localhost:8080/components/rise-rss/demo/index.html
``` 

Please note that the demo is purely for demonstrative purposes on how to set up the component. At this time, the standalone demo page will not work as the `rise-rss` component can only be used within Rise Vision [Offline Player](https://github.com/Rise-Vision/offline-player). 

### Testing
You can run the suite of tests either by command terminal or via a local web server using Polyserve. 

#### Command Terminal
Execute the following command in Terminal to run tests:

```
gulp test
```

#### Local Server
Run the following command in Terminal: `polyserve`.

Now in your browser, navigate to: 

```
localhost:8080/components/rise-rss/test/index.html
```

### Deployment
Once you are satisifed with your changes, deploy the `bower_components` to your server and also create a `rise-rss` folder within `bower_components` on your server and upload `rise-rss.html` and `modules.js` to it. You can then use the web component by following the *Usage* instructions.

## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues, please use the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas, please post your thoughts to our [community](http://community.risevision.com), otherwise submit a pull request and we will do our best to incorporate it. Please be sure to submit test cases with your code changes where appropriate.

## Resources
If you have any questions or problems, please don't hesitate to join our lively and responsive community at http://community.risevision.com.

If you are looking for user documentation on Rise Vision, please see http://www.risevision.com/help/users/

If you would like more information on developing applications for Rise Vision, please visit http://www.risevision.com/help/developers/.

**Facilitator**

[Stuart Lees](https://github.com/stulees "Stuart Lees")