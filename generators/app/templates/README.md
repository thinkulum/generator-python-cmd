# Code Console

## Table of contents

* [Synopsis](#synopsis)
* [Prerequisites](#prerequisites)
* [Downloading](#downloading)
* [Installing](#installation)
* [Documentation](#documentation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)
* [Changelog](#changelog)
* [License](#license)
* [Authors](#authors)

<a id="synopsis"></a>
## Synopsis

This app manages my coding projects.

<a id="prerequisites"></a>
## Prerequisites

You'll need to have Python 3 installed. I'm using Python 3.5.2 to develop the app. The rest of the requirements should be handled by the installation script.

<a id="downloading"></a>
## Downloading

This is a local app, so there's nowhere to download it at this time.

<a id="installation"></a>
## Installing

You can run the app straight from the project's root directory without installing anything by running `app.py`. You'll need the dependencies, however, so before you run the app, run this command from that directory:

```
python setup.py -v -n
```

If that doesn't work and the app crashes because it can't find a module it needs, you should install the app as a library.

To use the app as a library, you can install it by running this command from the project's root directory:

```
python setup.py install
```

For variations on this command to fit your circumstances, see https://docs.python.org/3/install/.

<a id="documentation"></a>
## Documentation

The user documentation is in this `README` file under the [Usage](#usage) heading.

The developer documentation is in `docs/source/index.rst`. To create a more readable version, from a command prompt in the `docs` directory run the command `make html`. The start page for that documentation will be `docs/build/html/index.html`.

<a id="usage"></a>
## Usage

To run the app, start a command prompt, change the current working directory to the project directory, and run this command:

```
python app.py
```

The app will give you the command prompt

```
(Cmd)
```

To see a list of the app's commands, type `help`.

To see the details of a command, type `help <command>`. For example, for more information on the `help` command, type `help help`.

To quit the app, use the command `q`.

<a id="contributing"></a>
## Contributing

Since I'm the only author and this project isn't public, there's no way to contribute at this time.

<a id="testing"></a>
## Testing

Run `run_tests.py` to automatically run all the tests. This is just the `node2` script renamed to avoid import conflicts.

<a id="changelog"></a>
## Changelog

<a id="license"></a>
## License

This project uses the MIT license. See the file `LICENSE.md` for details.

<a id="authors"></a>
## Authors

* Andy Culbertson (thinkulum@gmail.com) - original author
