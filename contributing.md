# Contributing

* [What to Contribute](#what-to-contribute)
* [Issues](#issues)
* [Pull Requests](#pull-requests)

<a id="what-to-contribute"></a>
## What to Contribute

Feel free to submit bug reports and feature requests via the issues for this project on GitHub. I also welcome pull requests for changes to the code or documentation.

<a id="issues"></a>
## Issues

If you're submitting a bug report, please follow these guidelines:

* Make sure you're using the latest version of the generator (`npm update -g generator-python-cmd`).
* Use the search feature on the [issues page](https://github.com/thinkulum/generator-python-cmd/issues) to make sure the bug hasn't already been reported. If an issue for the bug exists but you have helpful information to include, add it in a comment on the issue.
* Information to include in a bug report ([examples](https://github.com/yeoman/generator-generator/issues)):
    * Setup information:
        * Your OS and its version
        * `node --version`
        * `npm --version`
        * `npm list --global yo`
        * `npm list --global generator-python-cmd`
    * Steps to reproduce the problem.
    * A description of the problem. Include any output you received, such as error messages.

You can [use this link](https://github.com/thinkulum/generator-python-cmd/issues/new) to submit an issue.

<a id="pull-requests"></a>
## Pull Requests

You can suggest changes to the generator's code or documentation by making the changes to your own copy and then creating a [pull request](https://help.github.com/articles/about-pull-requests/).

#### Getting Started

1. Set up the [requirements](README.md#getting_started) (Node.js and Yeoman).
2. Fork the generator-python-cmd repository into your own GitHub account. (See the fork [help page](https://help.github.com/articles/fork-a-repo/).)
3. Clone the fork to your local machine (explained in the help link above).
4. To install the project's dependencies, from the project's root directory run `npm install`.
5. Write your code.
6. Include tests for any features or bugfixes you code. See the Testing section below. You may want to use [test-driven development](http://agiledata.org/essays/tdd.html).
7. In your commits, try to follow the conventions and advice in sections (1) and (2) of Git's [Submitting Patches](https://git.kernel.org/pub/scm/git/git.git/tree/Documentation/SubmittingPatches?id=HEAD) document. One exception is that I capitalize the commit summaries and usually don't prefix them with the file or area.
8. While you were making changes to your code, other people may have made changes to the original project repository. To incorporate these changes, from your local project's root directory run `git pull --rebase` ([remarks on this command](https://stackoverflow.com/questions/15602037/git-rebase-upstream-master-vs-git-pull-rebase-upstream-master)).
9. You can [use this link](https://github.com/thinkulum/generator-python-cmd/compare) to submit a pull request.

#### Testing

The tests are in [\_\_tests\_\_/app.js](__tests__/app.js). Run `npm test` from the generator's root directory to run them. For details on writing them, see Yeoman's [unit testing](http://yeoman.io/authoring/testing.html) tutorial. Note that that document assumes you're using the Mocha testing framework, but the generator's tests actually use [Jest](https://facebook.github.io/jest/), which has a very similar API.

This project uses [Travis CI](http://travis-ci.org/) to run its tests automatically whenever its commits are pushed to GitHub. Travis tests the code against Node.js versions 4, 6, and 7. When running your own tests, you may want to switch between these versions using [nvm](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/).

#### Style Guide

In your code, try to match the style I'm using in this project.

##### JavaScript

* For the JavaScript of the generator, I'm following [ESLint rules](https://eslint.org/docs/rules/). I have two exceptions:
    * I allow comments to begin with a lowercase letter in case I'm commenting out lines for testing.
    * I allow a comma after the last element of an array. It makes it easier to add or rearrange elements.
* In the file and function documentation, I follow [JSDoc](http://usejsdoc.org/) formatting.

##### Python

* For the Python of the templates, I follow [PEP 8](https://www.python.org/dev/peps/pep-0008/) style.
* I use 4 spaces instead of tabs.
