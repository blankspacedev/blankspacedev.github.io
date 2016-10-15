const gulp    = require('gulp');
const concat  = require('gulp-concat');
const sass    = require('gulp-sass');

var paths = require('./_app/gulp/paths');

gulp.task('css', () => {
  gulp.src(paths.appSassFilesGlob)
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(paths.jekyllStyleFiles))
});

gulp.task('watch', () => {
  gulp.watch(paths.appSassFilesGlob, ['css']);
});

gulp.task('default', ['css', 'watch']);
