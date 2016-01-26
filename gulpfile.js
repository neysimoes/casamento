var gulp          = require('gulp'),
    cssnano       = require('gulp-cssnano'),
    rupture       = require('rupture'),
    koutoSwiss    = require('kouto-swiss'),
    autoprefixer  = require('autoprefixer-stylus'),
    stylus        = require('gulp-stylus'),
    jeet          = require('jeet'),
    browserSync   = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('assets/styl/**/*.styl', ['stylus']).on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('stylus', function () {
  var config = {
    use: [jeet(), rupture(), koutoSwiss(), autoprefixer()]
  };
  return gulp.src('assets/styl/style.styl')
    .pipe(stylus(config))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('css.min', function () {
  return gulp.src([
      'assets/css/style.css'
    ])
    .pipe(cssnano().on('error', gutil.log))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('watch', ['stylus'], function () {
});


gulp.task('default', ['stylus', 'serve']);
