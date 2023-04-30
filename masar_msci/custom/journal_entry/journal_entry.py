# from frappe.model.naming import getseries
# from frappe.utils import now_datetime
#
# class JournalEntry(Document):
#     def autoname(self):
#         # get current year and month
#         posting_date = now_datetime().strftime('%Y%m')
#
#         # select a project name based on year and month
#         prefix = f'P-{posting_date}-'
#         self.name = getseries(prefix, 3)
