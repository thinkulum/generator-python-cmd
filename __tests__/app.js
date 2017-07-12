/* eslint capitalized-comments: ["off"],
          comma-dangle: ["off"] */

'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-python-cmd:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  const expectedFilePaths = [
    '.gitignore',
    'app.py',
    'LICENSE.md',
    'README.md',
    'setup.py',
    'package/cli.py',
    'package/config.py',
    'package/controller.py',
    'package/__init__.py',
    'docs/make.bat',
    'docs/Makefile',
    'docs/source/conf.py',
    'docs/source/index.rst',
    'tests/context.py',
    'tests/test.py',
  ];

  const expectedEmptyDirPaths = [
    'config',
    'docs/source/_static',
    'docs/source/_templates',
  ];

  it('creates expected files', () => {
    assert.file(expectedFilePaths);
  });

  it('creates expected empty directories', () => {
    assert.file(expectedEmptyDirPaths);
  });
});

