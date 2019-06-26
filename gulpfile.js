const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
var reload=browserSync.reload;

gulp.task('server',function(){

    browserSync.init({
        server:'./'
    });
});

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

    
    // browserSync.init({
    //     server: "./"
    // });
    gulp.task('default',['server'],function(){
    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change',reload);
});

    

