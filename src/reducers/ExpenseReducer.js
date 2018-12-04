const expensesDefaultState = [];
const expenseReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.expense];
    case "UPDATE":
      return state.map(expense => {
        if (state.id === expense.id) {
          return { ...expense, ...action.expense };
        }
        return expense;
      });
    case "REMOVE":
      return state.filter(expense => {
        expense.id !== action.id;
      });
    default:
      return state;
  }
};

export default expenseReducer;
