const gulp      = require('gulp');
const concat    = require('gulp-concat');
const cleancss  = require('gulp-minify-css');
const child     = require('child_process');
const sass      = require('gulp-sass');
const gutil     = require('gulp-util');

var paths = require('./_app/gulp/paths');

gulp.task('css', () => {
  gulp.src(paths.appSassFilesGlob)
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(cleancss())
    .pipe(gulp.dest(paths.jekyllStyleFiles))
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build',
    '--config',
    '_config.yml,_app/localhost_config.yml'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
});

const browserSync = require('browser-sync').create();

const siteRoot = '_site';

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  // Watch for app style files
  gulp.watch(paths.appSassFilesGlob, ['css']);

  // Watch for config files
  gulp.watch(['_config.yml', '_app/localhost_config.yml'], ['jekyll']);
  // Watch for .html files
  gulp.watch(['**/*.html', '!_site/**/*.*'], ['jekyll']);
  // Watch for md files
  gulp.watch(['**/'+paths.markdownPattern, '!_site/**/*.*'], ['jekyll']);
  // Watch for data files
  gulp.watch(['_data/*.yml'], ['jekyll']);
  // Watch for  assets
  gulp.watch(['assets/img/'+paths.imagePattern, 'assets/main.css'], ['jekyll']);

});

gulp.task('default', ['css', 'jekyll', 'serve']);
