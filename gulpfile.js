var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-clean-css');

var paths = {
  sass: {
    src: './scss/css-fadeshow.scss',
    dest: './css',
    watch: './scss/**/*.scss',
  }
};

gulp.task('sass', function() {
  return gulp
    .src(paths.sass.src)
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('watch:sass', function() {
  gulp.watch(paths.sass.watch, gulp.series('sass'));
});

gulp.task('watch', gulp.series('sass',
  gulp.parallel('watch:sass')
));

gulp.task('default', gulp.parallel('sass'));
