(function (console) {
  "use strict";

  var gulp = require("gulp");
  var browserify = require('browserify');
  var bump = require("gulp-bump");
  var jshint = require("gulp-jshint");
  var rename = require("gulp-rename");
  var uglify = require('gulp-uglify');
  var colors = require("colors");
  var transform = require('vinyl-transform');
  var runSequence = require("run-sequence");
  var wct = require("web-component-tester").gulp.init(gulp);

  gulp.task("browserify", function () {
    var browserified = transform(function(filename) {
      var b = browserify(filename);
      return b.bundle();
    });

    return gulp.src(["browserify.js"])
      .pipe(browserified)
      .pipe(uglify())
      .pipe(rename("modules.js"))
      .pipe(gulp.dest(""));
  });

  gulp.task("lint", function() {
    return gulp.src("./*.html")
      .pipe(jshint.extract("always"))
      .pipe(jshint())
      .pipe(jshint.reporter("jshint-stylish"))
      .pipe(jshint.reporter("fail"));
  });

  // ***** Primary Tasks ***** //
  gulp.task("bump", function(){
    return gulp.src(["./package.json", "./bower.json"])
      .pipe(bump({type:"patch"}))
      .pipe(gulp.dest("./"));
  });

  gulp.task("test", function(cb) {
    runSequence("test:local", cb);
  });

  gulp.task("build", function (cb) {
    runSequence("lint", "browserify", cb);
  });

  gulp.task("default", [], function() {
    console.log("********************************************************************".yellow);
    console.log("  gulp bump: increment the version".yellow);
    console.log("  gulp test: run unit and integration tests".yellow);
    console.log("  gulp build: build component".yellow);
    console.log("********************************************************************".yellow);
    return true;
  });

})(console);
