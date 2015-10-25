var cp = require('child_process');

var chokidar = require('chokidar');

watch('src/**/*.js', 'npm run build');

function watch (path, cmd, cb) {

  chokidar.watch(path)
    .on('change', execCurry(cmd, cb));
}

function execCurry (cmd, cb) {

  return function () {

    cp.exec(cmd, function (err, stdout, stderr) {

      err && console.error(err);
      stdout && console.log(stdout);
      stderr && console.error(stderr);

      cb && cb(err, stdout, stderr);
    })
  }
}