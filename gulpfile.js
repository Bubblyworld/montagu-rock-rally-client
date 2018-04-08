var gulp = require('gulp');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var Browserify = require('browserify');

var sourceFiles = ['./vendor/*', './src/css/**/*.css', './src/js/**/*.js'];

gulp.task('css', () => {
    gulp
        .src(['src/css/**/*.css', 'vendor/*.css'])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('js', () => {
    var browserify = Browserify({
        entries: './src/index.js',
        debug: true
    });

    browserify
        .transform('babelify', { presets: ['env', 'react'] })
        .bundle()
        .on('error', error => console.log(error))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build'));
});


gulp.task('default', ['js', 'css']);

gulp.task('watch', () => {
    gulp.watch(sourceFiles, ['default']);
});
