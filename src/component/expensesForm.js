import React from "react";

function expensesForm() {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            type="text"
            required="required"
            className="form-control"
            name="name"
          />
              </div>

              <div className="col-sm"> </div>
              <label for="cose"></label>
      </div>
    </form>
  );
}

export default expensesForm;
