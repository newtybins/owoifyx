const gulp = require("gulp");
const typescript = require("gulp-typescript");
const uglify = require("gulp-uglify");

const compile = () =>
  gulp
    .src("src/**/*.ts")
    .pipe(typescript())
    .pipe(uglify({ mangle: { toplevel: true } }))
    .pipe(gulp.dest("dist"));

gulp.task("default", compile);
