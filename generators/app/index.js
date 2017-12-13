/* eslint capitalized-comments: ["off"],
          comma-dangle: ["off"] */

/**
 * @fileOverview The main code for this generator.
 *
 * @author Andy Culbertson
 *
 * @requires NPM:yeoman-generator
 * @requires NPM:chalk
 * @requires NPM:yosay
 * @requires NPM:mkdirp
 */

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
      type: 'input',
      name: 'projectName',
      message: 'What is the project name?',
    },
    {
      type: 'input',
      name: 'projectSlug',
      message: 'What is the project slug?',
      default: this.appname,
    },
    {
      type: 'input',
      name: 'packageName',
      message: 'What is the package name?',
    },
    {
      type: 'input',
      name: 'projectDesc',
      message: 'What is the project description?',
    },
    {
      type: 'input',
      name: 'author',
      message: 'What is the author\'s name?',
    },
    {
      type: 'input',
      name: 'authorEmail',
      message: 'What is the author\'s email address?',
    },
    ];

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
    const options = {packageName: this.props.packageName};
    this._copyTpls(templatePaths, options);
  }

  _writingConfig() {
    const dirPaths = ['config'];
    this._makeDirs(dirPaths);
  }

  _writingLib() {
    const templatePaths = [
      'cli.py',
      'config.py',
      'controller.py',
      '__init__.py',
    ];
    const options = {};
    this._copyPackageTpls(templatePaths, options);
  }

  _writingDocs() {
    const dirPaths = [
      'docs',
    ];
    this._makeDirs(dirPaths);

    const templatePaths = [
      'LICENSE.md',
      'README.md',
    ];
    const options = {projectName: this.props.projectName,
      author: this.props.author,
      authorEmail: this.props.authorEmail};
    this._copyTpls(templatePaths, options);
  }

  _writingTests() {
    const templatePaths = [
      'tests/context.py',
      'tests/test.py',
    ];
    const options = {packageName: this.props.packageName};
    this._copyTpls(templatePaths, options);
  }

  _writingSetup() {
    const templatePaths = [
      'setup.py',
      'requirements.txt',
      'requirements-dev.txt',
    ];
    const options = {packageName: this.props.packageName,
      projectName: this.props.projectName,
      projectDesc: this.props.projectDesc,
      author: this.props.author,
      authorEmail: this.props.authorEmail};
    this._copyTpls(templatePaths, options);
  }

  _copyTpls(templatePaths, options) {
    var i;
    for (i = 0; i < templatePaths.length; i++) {
      var templatePath = templatePaths[i];
      this.fs.copyTpl(
        this.templatePath(templatePath),
        this.destinationPath(templatePath),
        options
      );
    }
  }

  _copyPackageTpls(templatePaths, options) {
    var i;
    for (i = 0; i < templatePaths.length; i++) {
      var templatePath = 'package/' + templatePaths[i];
      var destinationPath = this.props.packageName + '/' + templatePaths[i];
      this.fs.copyTpl(
        this.templatePath(templatePath),
        this.destinationPath(destinationPath),
        options
      );
    }
  }

  _makeDirs(dirPaths) {
    var i;
    for (i = 0; i < dirPaths.length; i++) {
      var dirPath = this.destinationPath(dirPaths[i]);
      mkdirp.sync(dirPath, function (err) {
        if (err) {
          console.error(err);
        }
      });
    }
  }

  install() {
    this.installDependencies();
  }
};
