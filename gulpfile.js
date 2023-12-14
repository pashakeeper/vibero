const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function compileSass() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
}

function browserSyncInit() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        port: 3000,
    });
}

function watch() {
    gulp.watch('scss/*.scss', compileSass);
    gulp.watch('js/*.js').on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
}
gulp.task('default', gulp.parallel(browserSyncInit, watch));