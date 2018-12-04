import React from "react";

const EditExpense = () => (
  <div>
    <div className="col-md-12 order-md-1">
      <h4 className="mb-3">Edit Expense</h4>
      <form className="needs-validation">
        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="expenseNameTxt">Expense Name</label>
            <input
              type="text"
              className="form-control"
              id="expenseNameTxt"
              placeholder=""
            />
          </div>

          <div className="col-md-2 mb-3">
            <label htmlFor="expenseAmountTxt">Amount</label>
            <input
              type="text"
              className="form-control"
              id="expenseAmountTxt"
              placeholder=""
            />
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="expenseDescriptionTxt">Description</label>
            <input
              type="text"
              className="form-control"
              id="expenseDescriptionTxt"
              placeholder=""
            />
          </div>

          <div className="col-md-2 mb-3">
            <label htmlFor="expenseDateTxt">Date</label>
            <input
              type="text"
              className="form-control"
              id="expenseDateTxt"
              placeholder=""
            />
          </div>

          <div className="col-md-2 mb-3">
            <br />
            <button type="submit" className="btn btn-success btn-lg">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default EditExpense;
