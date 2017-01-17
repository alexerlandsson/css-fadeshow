var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    rename    = require('gulp-rename'),
    minifycss = require('gulp-minify-css')
;

// Watch
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

// Sass
gulp.task('sass', function () {
  gulp.src('./scss/css-fadeshow.scss')
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
 });

 // Default
 gulp.task('default', ['sass']);
