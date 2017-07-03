var gulp = require('gulp');

gulp.task('default', function()
{
  console.log("Hello Gulp!");
});


gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
