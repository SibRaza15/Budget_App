import React from "react";
import DatePicker from "react-datepicker";

export default function ExpensesForm({
  description,
  handleDescription,
  input,
  handleChange,
  enteredDate,
  handleDate,
  handleClick,
}) {
  const container = {
    marginLeft: "22%",
    height: "450px",
    width: "308px",
    boxSizing: "border-box",
    border: "solid 0px",
    boxShadow: "10px 21px 31px -5px rgba(0,0,0,0.75)",
    background: "#FFFDFD",
    marginTop: "-47%",
    position: "relative",
    borderTopRightRadius: "60px",
    borderBottomRightRadius: "60px",
    borderBottomLeftRadius: "60px",
    borderTopLeftRadius: "60px",
  };

  return (
    <div style={container}>
      <form style={{ height: "200px", position: "absolute" }}>
        <h4 style={{ marginTop: "10px", marginLeft: "45px" }}> Expense Item</h4>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="input">Description</label>
            <input
              name="description"
              type="text"
              value={description}
              onChange={handleDescription}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="input">Amount</label>
            <input
              name="input"
              type="number"
              value={input}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="input"></label>
            <i style={{ marginTop: "25px" }} className="left material-icons">
              date_range
            </i>
            <DatePicker
              selected={enteredDate}
              onChange={handleDate}
              format={"DD/MM/YYYY"}
            />
            <br />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={handleClick}
          style={{ marginLeft: "70px" }}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
      <br />
    </div>
  );
}
