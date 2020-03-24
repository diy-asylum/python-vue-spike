import sys
sys.path.append(sys.path[0] + '/backend/form-filling')
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

    def test_child_supplement_even(self):
        data = self.data
        data['childInfo'] = data['childInfo'] * 10
        output = form_constructor(data)
        self.assertEqual(len(output), 13)

    def test_child_supplement_odd(self):
        data = self.data
        data['childInfo'] = data['childInfo'] * 9
        output = form_constructor(data)
        self.assertEqual(len(output), 13)

if __name__ == '__main__':
    unittest.main()
