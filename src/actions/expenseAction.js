import uuid from "uuid";

const addExpense = ({
  name = "",
  amount = 0,
  date = 0,
  description = ""
} = {}) => ({
  type: "ADD",
  expense: {
    id: uuid(),
    name,
    amount,
    date,
    description
  }
});

const updateExpense = ({
  id,
  name = "",
  amount = 0,
  date = 0,
  description = ""
} = {}) => ({
  type: "UPDATE",
  expense: {
    id,
    name,
    amount,
    date,
    description
  }
});

const removeExpense = id => ({
  type: "REMOVE",
  id
});

export { addExpense, updateExpense, removeExpense };
