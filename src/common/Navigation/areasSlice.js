import { createSlice } from "@reduxjs/toolkit";

const areasSlice = createSlice({
  name: "areas",
  initialState: {
    status: "initial",
    hideMenuList: true,
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
      state.areas = areas;
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

export const selectAreas = (state) => state.areas;
export const selectHideMenuList = (state) => selectAreas(state).hideMenuList;
export const selectAreasStatus = (state) => selectAreas(state).status;

export default areasSlice.reducer;
