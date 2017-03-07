var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('default', function() {
  gulp.src("./client").pipe(webserver({
      host:"0.0.0.0",
      livereload: true,
      port: 9090
    }));
});

var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./client/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./client/**/*.scss', ['sass']);
});