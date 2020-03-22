from i_589_page_11 import Page_11

def construct_child_supplements(child_info, name, a_number, date):
    if len(child_info) <= 4:
        return []
    else:
        return child_supplements_helper(child_info[4:], name, a_number, date)

def child_supplements_helper(child_info, name, a_number, date):
    if len(child_info) == 0:
        return []
    else:
        child_1 = child_info[0]
        child_2 = child_info[1] if len(child_info) > 1 else None
        supplement = Page_11(a_number, name, date, child_1, child_2)
        return [supplement] + child_supplements_helper(child_info[2:], name, a_number, date)
