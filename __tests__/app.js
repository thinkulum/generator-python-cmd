/* eslint capitalized-comments: ["off"],
          comma-dangle: ["off"] */

/**
 * @fileOverview Behavior-driven tests of the generator.
 *
 * @author Andy Culbertson
 *
 * @requires NPM:path
 * @requires NPM:yeoman-assert
 * @requires NPM:yeoman-test
 * @requires NPM:fs
 */

'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs');
const process = require('process');

/**
 * Return an absolute path converted from the given relative path.
 *
 * @param {String}   relPath An relative path.
 *
 * @returns {String} The absolute path based on the current working directory.
 */
var absPath = function (relPath) {
  return process.cwd() + '/' + relPath;
};

/**
 * Return an Array of absolute paths converted from the given relative paths.
 *
 * @param {Array}   relPaths An Array of relative paths.
 *
 * @returns {Array} The absolute paths based on the current working directory.
 */
var absPaths = function (relPaths) {
  return relPaths.map(function (relPath) {
    return absPath(relPath);
  });
};

// Adapted from https://gist.github.com/kethinov/6658166
/**
 * Return an array of files and directories found within dir, including the contents of its subdirectories.
 *
 * @param   {String}         dir      The relative path of the directory you're listing.
 * @param   {String}         dirBase  The absolute base for the relative path.
 * @param   {Array.<String>} itemList The list of paths to append to. This should usually be empty.
 * @param   {String}         itemType The type of filesystem item to return: 'all', 'dir', 'emptyDir', or 'file'.
 *
 * @returns {Array.<String>} The list of files and directories under dir.
 */
var walkSync = function (dir, dirBase, itemList, itemType) {
  const dirAbsPath = path.join(dirBase, dir);
  const theseItems = fs.readdirSync(dirAbsPath);
  itemList = itemList || [];
  if (theseItems.length === 0 && itemType === 'emptyDir') {
    itemList.push(dir);
  }

  theseItems.forEach(function (item) {
    const itemRelPath = path.join(dir, item);
    if (fs.statSync(path.join(dirAbsPath, item)).isDirectory()) {
      if (itemType === 'all' || itemType === 'dir') {
        itemList.push(itemRelPath);
      }

      itemList = walkSync(itemRelPath, dirBase, itemList, itemType);
    } else if (itemType === 'all' || itemType === 'file') {
      itemList.push(itemRelPath);
    }
  });
  return itemList;
};

/**
 * Replace '\' with '/' in the given list of paths.
 *
 * @param {Array} paths The paths with possible backslashes.
 *
 * @returns {Array} The paths with forward slashes.
 */
var normalizePathSeparators = function (paths) {
  return paths.map(function (path) {
    return path.replace(/\\/g, '/');
  });
};

// Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Implementing_basic_set_operations
/**
 * Return the set difference between setA and setB.
 *
 * @param {Set}   setA The set with potentially extra elements.
 * @param {Set}   setB The set to subtract.
 *
 * @returns {Set} The elements in setA that aren't in setB.
 */
var difference = function (setA, setB) {
  var difference = new Set(setA);
  for (const elem of setB) {
    difference.delete(elem);
  }

  return difference;
};

const packageName = 'cookiefactory';

describe('generator-python-cmd:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({projectName: 'Cookie Factory',
        packageName: packageName,
        projectDesc: 'A project for managing my coding projects',
        author: 'Andy Culbertson',
        authorEmail: 'thinkulum@gmail.com'});
  });

  const expectedFilePaths = [
    '.editorconfig',
    '.gitignore',
    'app.py',
    'LICENSE.md',
    'README.md',
    'setup.py',
    'requirements.txt',
    'requirements-dev.txt',
    packageName + '/cli.py',
    packageName + '/config.py',
    packageName + '/controller.py',
    packageName + '/__init__.py',
    'tests/context.py',
    'tests/test.py',
  ];

  const expectedEmptyDirPaths = [
    'config',
    'docs',
  ];

  it('creates expected files', () => {
    assert.file(absPaths(expectedFilePaths));
  });

  it('doesn\'t create unexpected files', () => {
    const actualFileSet = new Set(
      normalizePathSeparators(
        walkSync('', process.cwd(), [], 'file')));
    const expectedFileSet = new Set(expectedFilePaths);
    assert.equal(
      difference(actualFileSet, expectedFileSet).size,
      0);
  });

  it('creates expected empty directories', () => {
    assert.file(absPaths(expectedEmptyDirPaths));
  });

  it('doesn\'t create unexpected empty directories', () => {
    const actualEmptyDirSet = new Set(
      normalizePathSeparators(
        walkSync('', process.cwd(), [], 'emptyDir')));
    const expectedEmptyDirSet = new Set(expectedEmptyDirPaths);
    assert.equal(
      difference(actualEmptyDirSet, expectedEmptyDirSet).size,
      0);
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
        [absPath(expectedFilePath), expectedContent]);
    }

    assert.fileContent(fileContentItems);
  });
});
