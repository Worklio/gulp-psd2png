#gulp-psd2png
Image convertor, PSD to PNG, for Gulp. It is using [psd2png](https://github.com/qdsang/psd2png).


## Installation
Install package with NPM and add it to your development dependencies:

`npm i gulp-psd2png --save-dev`


## Usage
While coping all files from folder `src/img` to folder `dist/img` convert PSD filed to PNG files.

```js
var psd2png = require('gulp-psd2png');

gulp.task('img', function() {
  return gulp.src('./src/img/**/*')
    .pipe(psd2png())
    .pipe(gulp.dest('./dist/img'));
});
```
