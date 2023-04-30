// frappe.ui.form.on("Payment Entry",{ before_load:function(frm) {
//     var df=frappe.meta.get_docfield("Payment Entry", "naming_series",frm.doc.name);
//     df.read_only=1;
//   frm.refresh_fields();
//   }
//   });
  
  // frappe.ui.form.on("Payment Entry","payment_type", function(frm) {
  // if (frm.doc.payment_type == "Pay") {
  //   frappe.msgprint("hi")
  //   frm.set_value('naming_series', 'PAY.YYYY.MM.')
  //   frm.refresh_fields();
  // }
  // else if  (frm.doc.payment_type == "Receive") {
  //   frm.set_value('naming_series', 'REC.YYYY.MM.')
  //   frm.refresh_fields();
  // }
  // });



  
frappe.ui.form.on("Payment Entry","payment_type", function(frm) {
  if (frm.doc.payment_type == "Pay") {
      frm.set_value('naming_series', 'PAY.YYYY.MM.');
  } else if (frm.doc.payment_type == "Receive") {
      frm.set_value('naming_series', 'REC.YYYY.MM.');
  }
});

frappe.ui.form.on("Payment Entry",{ before_load:function(frm) {
  var df=frappe.meta.get_docfield("Payment Entry", "naming_series",frm.doc.name);
  df.default="PAY.YYYY.MM.";
  var df=frappe.meta.get_docfield("Payment Entry", "naming_series",frm.doc.name);
  df.read_only=1;
  var df=frappe.meta.get_docfield("Payment Entry", "payment_type",frm.doc.name);
  df.default="Pay";
frm.refresh_fields();
}
});