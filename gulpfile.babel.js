import gulp from 'gulp';
import gutil from 'gulp-util';
import watcher from './tasks/libs/watcher';

import clean from './tasks/clean'
import browserify from './tasks/browserify'
import copy from './tasks/copy'
import docs from './tasks/docs'
import less from './tasks/less'
import svgStore from './tasks/svg-store'
import server from './tasks/server'
import ghPages from './tasks/gh-pages'

import build from './tasks/build'

build.setOptions({
  taskQueue: [
    'clean',
    'copy',
    'svg-store',
    'less',
    'docs',
    'browserify'
  ]
});

if (gutil.env.prod) {
  process.env.NODE_ENV = 'production';
}

if (gutil.env.watch) {
  watcher.setWatcher();
}

gulp.task('dev', ()=> {
  watcher.setWatcher();
  gulp.start(['build', 'server']);
});

gulp.task('default', ['build']);