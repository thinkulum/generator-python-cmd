try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup
from <%= packageName %> import __version__

config = {
    'name': '<%= projectName %>',
    'description': '<%= projectDesc %>',
    'author': '<%= author %>',
    'author_email': '<%= authorEmail %>',
    'url': '',
    'download_url': '',
    'version': __version__,
    'packages': ['<%= packageName %>'],
    'install_requires': ['docutils', 'pytest'],
    'tests_require': ['Sphinx>=1.4.1,<2.0.0'],
}

setup(**config)
