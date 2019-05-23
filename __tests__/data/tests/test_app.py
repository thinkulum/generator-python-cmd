import pytest
from context import cookiefactory

class TestCLI(object):
    """
    Class for testing the command interface.
    """

    def test_quit(self):
        cli = cookiefactory.cli.CLI()
        assert cli.onecmd('q') == 1



class TestMetadata(object):
    """
    Class for testing the app's metadata.
    """

    def test_version_number(self):
        assert cookiefactory.__version__ == '0.0.1'



if __name__ == '__main__':
    pytest.main([__file__])

