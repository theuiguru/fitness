var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    port: 8889
  });
});

gulp.task('default', ['connect']);

var surge = require('gulp-surge');

gulp.task('deploy', [], function () {
  return surge({
    project: './',         // Path to your static build directory
    domain: 'fitnessbyfat.surge.sh'  // Your domain or Surge subdomain
  })
});
gulp.task('default', ['deploy']);