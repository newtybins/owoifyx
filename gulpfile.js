const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task("default", () => {
  return gulp
    .src("src/*.js")
    .pipe(uglify({ mangle: { toplevel: true } }))
    .pipe(gulp.dest("dist"));
});
