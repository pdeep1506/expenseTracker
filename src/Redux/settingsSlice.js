import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
  totalExpense: [],
  expenseCount: 0,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
   
    setExpense: (state, action) => {
      state.totalExpense = action.payload;
      state.expenseCount = action.payload.length;
    },
    addExpense: (state, action) => {
      state.totalExpense.push(action.payload);
      state.expenseCount += 1;
    },
    updateExpense: (state, action) => {
      const { uid, updatedData } = action.payload;

      const updatedExpenseIndex = state.totalExpense.findIndex(
        (expense) => expense.uid === uid
      );

      if (updatedExpenseIndex !== -1) {
        state.totalExpense[updatedExpenseIndex] = {
          ...state.totalExpense[updatedExpenseIndex],
          ...updatedData,
        };
      }
    },
    removeExpense: (state, action) => {
      const newExpense = state.totalExpense.filter(
        (expense) => expense.uid !== action.payload.uid
      );
      state.totalExpense = newExpense;
      state.expenseCount -= 1;
    },
  },
});

export const {
  onDeleteSettingChange,
  setExpense,
  addExpense,
  updateExpense,
  removeExpense,
} = settingsSlice.actions;

export default settingsSlice.reducer;
