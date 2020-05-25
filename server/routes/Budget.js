const express = require("express");
const router = express.Router();
const { Budget } = require("../models/Budget");

//=================================
//             Budget
//=================================

router.post("/saveBudget", (req, res) => {
  const budget = new Budget(req.body);

  budget.save((err, budget) => {
    console.log(err);
    if (err) return res.json({ success: false, err });

    return res.status(200).json({ success: true });
  });
});

router.get("/getBudget", (req, res) => {
  Budget.find({}).exec((err, budget) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, budget });
  });
});
module.exports = router;
