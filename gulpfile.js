(function (console) {
  "use strict";

  var gulp = require("gulp");
  var bump = require("gulp-bump");
  var jshint = require("gulp-jshint");
  var colors = require("colors");
  var runSequence = require("run-sequence");
  var wct = require("web-component-tester").gulp.init(gulp);

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
    runSequence("lint", cb);
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
