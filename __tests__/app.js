/* eslint capitalized-comments: ["off"],
          comma-dangle: ["off"] */

'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var fs = require('fs');

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

  it('creates expected file content', () => {
    var fileContentItems = [];
    var i;
    for (i = 0; i < expectedFilePaths.length; i++) {
      const expectedFilePath = expectedFilePaths[i];
      const contentFilePath = path.join(
        __dirname,
        'data',
        expectedFilePath.replace(
          /^\./, ''));
      const expectedContent = fs.readFileSync(
        contentFilePath, 'utf8', (err, data) => {
          if (err) {
            throw err;
          }
          return data;
        });

      fileContentItems.push(
        [expectedFilePath, expectedContent]);
    }

    assert.fileContent(fileContentItems);
  });
});

