import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    changeTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode.toString());
    },

    setTheme: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { changeTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
