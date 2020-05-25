import React, { useState, useEffect } from "react";
import axios from "axios";
import Balances from "./Balances";
import BudgetForm from "./ExpensesForm";
import SideNavBar from "./SideNavBar";
import "react-datepicker/dist/react-datepicker.css";
import LineChart from "./LineChart";

export default function Expenses() {
  // These three states will be used for a future enhancement
  const [balance, setBalance] = useState([0]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  /*
    The user enters these three states in the UI 
    Input is an array of numbers- they are referred to as amount in the database
    Description is a string that describes the expense
    Entered Date is a date object that describe the date of the expense item
  */
  const [input, setInput] = useState([]);
  const [description, setDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date());

  // Budget contains the three states: Input, Description, enteredDate
  const [budget, setBudget] = useState([]);

  /*
  This state is used to ensure that the API call successfully completes
  before the chart component can render
  */
  const [loadingBudget, setloadingBudget] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/budget/getBudget")
      .then((response) => {
        if (response.data.success) {
          // console.log(JSON.stringify(response.data, null, 2));
          setBudget([...budget, ...response.data.budget]);
        } else {
          alert("Failed to retrieve budget");
        }
      });
    setloadingBudget(false);
  }, []);

  //dates will sort the expense item dates by ASC then format them correctly
  const dates = budget
    .sort(function (a, b) {
      var dateA = new Date(a.date),
        dateB = new Date(b.date);
      return dateA - dateB;
    })
    .map((i) => {
      return (
        i.date.toString().substring(5, 10) +
        "-" +
        i.date.toString().substring(0, 4)
      );
    });

  const charges = budget.map((i) => {
    return i.amount;
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDate = (date) => {
    setEnteredDate(date);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    //Logic used for future enhancement
    if (input > 0) {
      setIncome(input);
    } else {
      setExpense(input);
    }

    let val = parseInt(input, 10);
    setBalance([...balance, val]);

    setBudget([
      ...budget,
      {
        desc: description,
        amount: val,
        date: enteredDate,
      },
    ]);
    const variable = {
      desc: description,
      amount: val,
      date: enteredDate,
    };
    axios
      .post("http://localhost:5000/api/v1/budget/saveBudget", variable)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
          setInput("");
          setDescription("");
          setEnteredDate("");
        } else {
          alert("Failed to save budget");
        }
      });
    // The page is refreshed to prevent inconsistent date format issues on the UI
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <SideNavBar />
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div>
          <br />
          <BudgetForm
            description={description}
            handleDescription={handleDescription}
            input={input}
            handleChange={handleChange}
            enteredDate={enteredDate}
            handleDate={handleDate}
            handleClick={handleClick}
          />
        </div>
        {!loadingBudget && <LineChart dates={dates} charges={charges} />}

        <table
          style={{ width: "40%", marginTop: "-380px", marginLeft: "720px" }}
          className="highlight"
        >
          <thead className="thead-light">
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {!loadingBudget &&
              budget.map((i) => {
                return (
                  <tr>
                    <td>{i.desc}</td>
                    <td>{i.amount}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
