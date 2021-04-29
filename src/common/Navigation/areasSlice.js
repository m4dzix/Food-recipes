import { createSlice } from "@reduxjs/toolkit";

const areasSlice = createSlice({
  name: "areas",
  initialState: {
    status: "initial",
    hideMenuList: false,
  },
  reducers: {
    toggleHideMenuList: (state) => {
      state.hideMenuList = !state.hideMenuList;
    },
    fetchAreas: () => ({
      status: "loading",
    }),
    fetchAreasSuccess: (state, { payload: areas }) => {
      state.status = "success";
      state.meals = areas;
    },
    fetchAreasError: () => ({
      status: "error",
    }),
  },
});

export const {
  toggleHideMenuList,
  fetchAreas,
  fetchAreasSuccess,
  fetchAreasError,
} = areasSlice.actions;

export const selectAreasState = (state) => state.areas;
export const selectAreas = (state) => selectAreasState(state).meals;
export const selectHideMenuList = (state) =>
  selectAreasState(state).hideMenuList;
export const selectAreasStatus = (state) => selectAreasState(state).status;

export default areasSlice.reducer;
