'use strict';

var psd2png = require('psd2png');
var through = require('through2');
var Vinyl = require('vinyl');
var regexp = /\.psd$/i;

module.exports = function(file) {


  var buffer = function(file, encoding, callback) {
      

    if (file.isNull()) {
      callback();
      return;
    }

    if (file.isStream()) {
      this.emit('error', new Error('gulp-psd2png: Streaming not supported'));
      callback();
      return;
    }


    if (typeof file.path === 'string') {

      if(regexp.test(file.path))  {
        this.push(new Vinyl({
          cwd: file.cwd,
          base: file.base,
          path: file.path.replace(regexp,".png"),
          contents: psd2png(file.contents)
        }));
      }

    } else {
      throw new Error('gulp-psd2png: Missing path in file options');
    }


    callback();
  };

  let endStream = function(callback){
    callback();
  }
  return through.obj(buffer, endStream);
};
