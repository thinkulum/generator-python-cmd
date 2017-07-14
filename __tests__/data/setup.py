try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup
from cookiefactory import __version__

config = {
    'name': 'Cookie Factory',
    'description': 'A project for managing my coding projects',
    'author': 'Andy Culbertson',
    'author_email': 'thinkulum@gmail.com',
    'url': '',
    'download_url': '',
    'version': __version__,
    'packages': ['cookiefactory'],
    'install_requires': ['docutils', 'nose2'],
}

setup(**config)