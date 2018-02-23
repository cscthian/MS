var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var browserSync = require('browser-sync').create();

gulp.task('ms', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe($.sass({
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('default', function() {
  browserSync.init({
        server: "./"
    });

    gulp.watch(['./scss/**/*.scss'], ['ms']);
    gulp.watch("./templates/**/*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
});
