import sys
sys.path.append('form-filling')
import unittest
import json
from child_supplement import construct_child_supplements
from data_conversion import child_data_to_fields
from i_589_page_11 import Page_11

class TestFormConstruction(unittest.TestCase):

    def setUp(self):
        with open('tests/resources/dummy_example.json', 'r') as f:
            data = ''
            for line in f:
                data += line
            self.data = json.loads(data)
            self.child_info = [child_data_to_fields(x) for x in self.data['childInfo']]

    def test_no_children(self):
        self.assertEqual(construct_child_supplements([], '', '', ''), [])

    def test_no_supplement(self):
        for i in range(1, 5):
            supplements = construct_child_supplements(self.child_info * i, '', '', '')
            self.assertEqual(supplements, [])

    def test_one_extra_child(self):
        supplements = construct_child_supplements(self.child_info * 5, '', '', '')
        self.assertEqual(supplements, [Page_11('', '', '', self.child_info[0], None)])

    def test_two_extra_children(self):
        supplements = construct_child_supplements(self.child_info * 6, '', '', '')
        self.assertEqual(supplements, [Page_11('', '', '', self.child_info[0], self.child_info[0])])

    def test_three_extra_children(self):
        supplements = construct_child_supplements(self.child_info * 7, '', '', '')
        self.assertEqual(supplements, [Page_11('', '', '', self.child_info[0], self.child_info[0]), Page_11('', '', '', self.child_info[0], None)])

if __name__ == '__main__':
    unittest.main()
