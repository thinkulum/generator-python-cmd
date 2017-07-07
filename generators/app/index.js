'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the groovy ' + chalk.red('generator-python-cmd') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }


  // Adapted from 
  // https://github.com/yeoman/generator-webapp/blob/master/app/index.js
  writing() {
    this._writingGit();
    this._writingScript();
    this._writingConfig();
    this._writingLib();
    this._writingDocs();
    this._writingTests();
    this._writingSetup();
  }


  _writingGit() {
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore'));
  }


  _writingScript() {
    const templatePaths = ['app.py'];
    const options = {};
    this._copyTpls(templatePaths, options);
  }


  _writingConfig() {
    const dirPaths = ['config'];
    this._makeDirs(dirPaths);
  }


  _writingLib() {
    const templatePaths = [
      'package/cli.py',
      'package/config.py',
      'package/controller.py',
      'package/__init__.py'
    ];
    const options = {};
    this._copyTpls(templatePaths, options);
  }


  _writingDocs() {
    const dirPaths = [
      'docs/source/_static',
      'docs/source/_templates'
    ];
    this._makeDirs(dirPaths);

    const templatePaths = [
      'LICENSE.md',
      'README.md',
      'docs/make.bat',
      'docs/Makefile',
      'docs/source/conf.py',
      'docs/source/index.rst'
    ];
    const options = {};
    this._copyTpls(templatePaths, options);
  }


  _writingTests() {
    const templatePaths = [
      'tests/context.py',
      'tests/test.py'
    ];
    const options = {};
    this._copyTpls(templatePaths, options);
  }


  _writingSetup() {
    const templatePaths = ['setup.py'];
    const options = {};
    this._copyTpls(templatePaths, options);
  }


  _copyTpls(templatePaths = [], options = {}) {
    var i;
    var templatePath;
    for (i = 0; i < templatePaths.length; i++) {
      templatePath = templatePaths[i];
      this.fs.copyTpl(
        this.templatePath(templatePath),
        this.destinationPath(templatePath),
        options
      );
    }
  }


  _makeDirs(dirPaths = []) {
    var i;
    var dirPath;
    for (i = 0; i < dirPaths.length; i++) {
      dirPath = dirPaths[i];
      mkdirp(dirPath);
    }
  }


  install() {
    this.installDependencies();
  }
};
