const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const pug = require('gulp-pug');
const webserver = require('gulp-webserver');

gulp.task('default', ['html', 'webserver', 'watch']);

gulp.task('build', ['html']);

gulp.task('html', () => {
  return gulp.src('pages/*.pug')
    .pipe(pug({}))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('webserver', () => {
  const port = parseInt(process.env.port || '3000', 10);
  return gulp.src('.').pipe(webserver({
    livereload: true,
    open: true,
    directoryListing: true,
    port,
    host: 'localhost',
  }));
});

gulp.task('watch', () => {
  return gulp.watch('pages/*.pug', ['html']);
});
