'Use Strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
//Concat - Junta todos os arquivos do mesmo tipo em um só
    concat = require('gulp-concat'),
//Uglify
    uglify = require('gulp-uglify'),
//Compressor de imagens
    tinypng = require('gulp-tinypng-compress'),
    //Minificador de HTML
    htmlmin = require('gulp-htmlmin')

//Tarefas executadas por padrão
gulp.task('default',['sass','js','htmlmin']);

//Compilador Sass
gulp.task('sass', function () {
    return gulp
        .src('dev/sass/*.scss')
        .pipe(concat('style.min.css'))
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest('prod/assets/css'))
});

//Watch Sass
gulp.task('sass:watch',function () {
    gulp.watch('dev/sass/*.scss',['sass']);
});

//Uglify
gulp.task('js', function () {
    return gulp
        .src('dev/js/**/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('prod/assets/js'))
});

gulp.task('htmlmin', function() {
    return gulp.src('dev/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('prod'));
});


// gulp.task('tinypng', function () {
//     return gulp
//         .src('dev/images/**/*.{jpg,jpeg}')
//         .pipe(tinypng({
//             key: 'K-zNMusSJFQZn9VesiILWV-Nxreyq4py',
//             sigFile: 'images/.tinypng-sigs',
//             log: true
//         }))
//         .pipe(gulp.dest('prod/assets/images'));
// });

