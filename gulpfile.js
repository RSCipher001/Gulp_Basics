var gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  minifycss = require('gulp-clean-css'),
  minifyhtml = require('gulp-minify-html'),
  minifyjs = require('gulp-uglify'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass');

gulp.task('default', function() {
  console.log("Hello");
});

gulp.task('build',['minify-html','minify-css','minify-js','fonts','img'],function(){
  console.log("Building...");
});

gulp.task('watch',['browser-sync','pug','sass'],function(){
  gulp.watch('./src/sass/**/*.+(sass|scss)', ['sass']);
  gulp.watch('./src/pug/**/*.+(jade|pug)', ['pug']);
  gulp.watch('./src/js/**/*.js', browsersync.reload);
  gulp.watch('./src/img/*', browsersync.reload);
  gulp.watch('./src/fonts/*', browsersync.reload);
});

gulp.task('live', function(){
  browsersync.init({
    server: {
      baseDir: './dist/'
    },
  });
  gulp.watch('./dist/**/*', browsersync.reload);
});

gulp.task('browser-sync', function() {
  browsersync.init({
    server: {
      baseDir: './src/'
    },
  });
});

gulp.task('pug', function(){
  gulp.src('./src/pug/**/*.+(jade|pug)')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./src/'))
    .pipe(browsersync.reload({
      stream: true
    }));
});

gulp.task('sass', function(){
  gulp.src('./src/sass/**/*.+(sass|scss)')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
    .pipe(browsersync.reload({
      stream: true
    }));
});

gulp.task('minify-css', function() {
  gulp.src('./src/css/**/*.css')
    .pipe(minifycss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-html', function() {
  gulp.src('./src/**/*.html')
    .pipe(minifyhtml())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-js', function () {
  gulp.src('./src/js/**/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('img', function() {
  return gulp.src('./src/img/**/*')
  .pipe(gulp.dest('./dist/img'));
});
