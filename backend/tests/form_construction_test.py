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
        pages, num_copies = form_constructor(self.data)
        self.assertEqual(len(pages), 10)
        self.assertEqual(num_copies, 3 * 3)

    def test_child_supplement_even(self):
        data = self.data
        data['childInfo'] = data['childInfo'] * 10
        pages, num_copies = form_constructor(data)
        self.assertEqual(len(pages), 13)
        self.assertEqual(num_copies, 12 * 3)

    def test_child_supplement_odd(self):
        data = self.data
        data['childInfo'] = data['childInfo'] * 9
        pages, num_copies = form_constructor(data)
        self.assertEqual(len(pages), 13)
        self.assertEqual(num_copies, 11 * 3)

if __name__ == '__main__':
    unittest.main()
