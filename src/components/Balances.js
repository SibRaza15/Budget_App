import React from "react";

export default function Balances(props) {
  let d = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const todaysMonth = monthNames[d.getMonth()];
  const currYear = d.getFullYear();

  const balances_container = {
    color: "#fff",
    width: "40%",
    height: "170px",
    position: "absolute",
    marginTop: "-50%",
    marginLeft: "330px",
  };

  const curr_date = {
    position: "absolute",
    fontSize: "34px",
    height: "100%",
    paddingRight: "5px",
    color: "#fff",
    marginLeft: "20px",
    background: "linear-gradient(-155deg, #5883d3 0%, #3953a8 100%)",
    zIndex: "1",
  };

  const balances = {
    position: "absolute",
    marginTop: "0px",
    background: "#fff",
    marginLeft: "90px",
    paddingLeft: "10px",
    width: "77%",
    height: "100%",
    textTransform: "uppercase",
    fontFamily: "'Oxygen', sans-serif",
    fontSize: "16px",
  };

  return (
    <React.Fragment>
      <div id="balances_container" style={balances_container}>
        <div style={curr_date}>
          <p>{todaysMonth}</p>
          <p>{d.getDate()}</p>
          <p>{currYear}</p>
        </div>

        <div className="balances" style={balances}>
          <p style={{ color: "black" }}>{props.Income}</p>
          <p style={{ color: "black" }}>{props.Expense}</p>
          <p style={{ color: "black" }}>
            {props.Balance.reduce((acc, total) => {
              return acc + total;
            })}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
