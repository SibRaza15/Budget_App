const mongoose = require("mongoose");

//The budget collection will a description, amount, and the date the user entered.
const budgetSchema = mongoose.Schema(
  {
    desc: {
      type: String,
    },
    amount: {
      type: Number,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = { Budget };
