# Python cmd App Generator

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][codecov-image]][codecov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Dev Dependency Status][daviddm-dev-image]][daviddm-url]

> Yeoman generator for a Python app with a command-line interface using cmd

* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Generators](#generators)
* [Options](#options)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Author](#author)
* [License](#license)

<a id="installation"></a>
## Installation

1. Install [Node.js](https://nodejs.org/).
2. Run `npm install -g yo` to install [Yeoman](http://yeoman.io) using [npm](https://www.npmjs.com/).
3. Run `npm install -g generator-python-cmd` to install generator-python-cmd.

<a id="usage"></a>
## Usage

This readme covers the generator. See the README.md in your generated project for information on using the project's code.

### Generating a Project

1. Create a new directory for your project, and enter it.
2. From the new project directory, run `yo python-cmd` to generate your new project.
3. Answer the questions at the prompts to customize your project.
4. Run `pip install -r requirements-dev.txt` to install the project's initial development tools, such as Sphinx (see the next section).

### Setting up Documentation

Your new project will be set up to use the automatic documentation generator [Sphinx](http://www.sphinx-doc.org/). If you stick with this option, you'll do the initial setup with Sphinx's own script.

1. If you haven't already, install Sphinx using the `pip` command from the previous section.
2. Follow the Sphinx [tutorial](http://www.sphinx-doc.org/en/stable/tutorial.html), except for the installation.
3. If you run the `sphinx-quickstart` script from your project's root directory, set the "Root path for the documentation" to `docs`.
4. I recommend saying `y` to at least the following extensions (these and other extensions described [here](http://www.sphinx-doc.org/en/stable/ext/builtins.html)):
    * autodoc - Lets you avoid maintaining duplicate documentation between your code and the Sphinx documents. Also lets you format your docstrings nicely.
    * doctest - Tests all the code examples in your documentation, if you put them in doctest blocks.
    * coverage - Checks whether your documentation covers your project's whole public API.
    * viewcode - Links the documentation of each object to a highlighted version of the object's source code so users can easily examine its implementation.

<a id="features"></a>
## Features

The generator creates

* an app.py script for running your application
* an in-app command-line prompt using the cmd library
* a setup.py script for optionally installing your application's package as a library
* a <package> directory (renamed to your package name) to contain your application's package files
* a config directory to house the app's configuration files
* a tests directory for unit tests using nose2
* a docs directory to contain your documentation, ready to be set up by Sphinx
* a readme file to hold basic information on installing, using, and contributing to the project
* an MIT license file
* a Git ignore file

The generator puts all of that into the following folder structure:

```
.
|____config
|____docs
|____<package>
| |______init__.py
| |____cli.py
| |____config.py
| |____controller.py
|____tests
| |____context.py
| |____test.py
|____app.py
|____.gitignore
|____LICENSE.md
|____README.md
|____setup.py
```

<a id="generators"></a>
## Generators

Available generators:

* [python-cmd](#app) (aka [python-cmd:app](#app))

### App

Sets up a new Python cmd app, generating all the boilerplate you need to get started.

```bash
yo python-cmd
```

<a id="options"></a>
## Options

There are currently no command-line options for the generator.

The prompts ask for the following information:

### projectName
**Default:** _[Name of project folder in title case and with non-word characters replaced by spaces]_

The project name. Used in the documentation files and setup.py.

### packageName
**Default:** _[Name of project folder with non-word characters removed]_

The package name. Used in app.py, test files, and setup.py.

### projectDesc
**Default:** _UNDEFINED_

The project description. Used in the documentation files and setup.py.

### author
**Default:** _UNDEFINED_

The author's name. Used in the documentation files and setup.py.

### authorEmail
**Default:** _UNDEFINED_

The author's email address. Used in the documentation files and setup.py.

<a id="roadmap"></a>
## Roadmap

To the generator:

* Add command-line options.
* Add EditorConfig configuration for synchronizing coding style.

To the app templates:

* Enable app commands from the command line.
* Add user configuration.
* Add EditorConfig configuration for synchronizing coding style.
* Add pylama configuration for code linting.
* Switch to pytest for testing.
* Add Wheel configuration for packaging.
* Add conda configuration for package and environment management.
* Add pyup configuration for dependency management.
* Add Codecov configuration for code coverage reporting.
* Add Tox configuration for managing test environments.
* Add Travis CI configuration for automatic testing and deployment.

<a id="contributing"></a>
## Contributing

See [contributing.md](contributing.md) to learn how to contribute to this project. Contributions include bug reports, feature requests, code, and documentation.

<a id="changelog"></a>
## Changelog

See the [Releases](https://github.com/yeoman/generator-python-cmd/releases) page for this project on GitHub.

<a id="author"></a>
## Author

* [Andy Culbertson](https://github.com/thinkulum)

<a id="license"></a>
## License

MIT © [Andy Culbertson](https://www.thinkulum.net/)

For details see the [LICENSE](LICENSE) file.

[travis-image]: https://img.shields.io/travis/thinkulum/generator-python-cmd.svg
[travis-url]: https://travis-ci.org/thinkulum/generator-python-cmd

[codecov-image]: https://img.shields.io/codecov/c/github/thinkulum/generator-python-cmd.svg
[codecov-url]: https://codecov.io/github/thinkulum/generator-python-cmd

[npm-image]: http://img.shields.io/npm/v/generator-python-cmd.svg
[npm-url]: https://npmjs.org/package/generator-python-cmd

[daviddm-image]: https://img.shields.io/david/thinkulum/generator-python-cmd.svg
[daviddm-dev-image]: https://img.shields.io/david/dev/thinkulum/generator-python-cmd.svg
[daviddm-url]: https://david-dm.org/thinkulum/generator-python-cmd
