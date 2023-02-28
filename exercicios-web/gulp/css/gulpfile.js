const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarArquivoHTML() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoCSS, copiarArquivoHTML)