import sys
sys.path.append('form-filling')
from form_constructor import form_constructor
import unittest
import json

class TestFormConstruction(unittest.TestCase):

    def setUp(self):
        with open('tests/resources/dummy_example.json', 'r') as f:
            data = ''
            for line in f:
                data += line
            self.data = json.loads(data)

    def test_basic_example(self):
        output = form_constructor(self.data)
        self.assertEqual(len(output), 10)

if __name__ == '__main__':
    unittest.main()
