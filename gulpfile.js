var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');

function gulpSass() {
  return gulp
    .src('./scss/css-fadeshow.scss')
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
}

function gulpWatch() {
  gulp.watch('./scss/**/*.scss', gulpSass);
}

gulp.task('sass', gulpSass);
gulp.task('watch', gulpWatch);
gulp.task('default', gulp.parallel('sass'));
