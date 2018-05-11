require('./gulp/tasks/styles');
require('./gulp/tasks/watch');

var gulp = require('gulp-help')(require('gulp'));

gulp.task('lint', 'Lints all server side js', function () {
    gulp.src('./lib/**/*.js')
      .pipe(jshint());
});
