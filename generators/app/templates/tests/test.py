import unittest
from context import cookiefactory

class TestCLI(unittest.TestCase):
    """
    Class for testing the command interface.
    """

    def test_quit(self):
        cli = cookiefactory.cli.CLI()
        cli.onecmd('q')



class TestMetadata(unittest.TestCase):
    """
    Class for testing the app's metadata.
    """

    def test_version_number(self):
        cookiefactory.__version__ == '0.0.1'



if __name__ == '__main__':
    unittest.main()

