import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedData: null,
  loading: false,
  pageTitle: "",
  openCustomModal: false,
  deleteModal:false
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setLoaderOn(state) {
      state.loading = true;
    },
    setLoaderOff(state) {
      state.loading = false;
    },
    setPageTitle(state, action) {
      state.pageTitle = action.payload;
    },
    setOpenCustomModal(state, action) {
      return {
        ...state,
        openCustomModal: action.payload
      }
    },
    setSelectedData(state, action) {
      state.selectedData = action.payload;
    },
    clearSelectedData(state) {
      state.selectedData = null;
    },
    setDeleteModal: (state, action) => {
      state.deleteModal = action.payload;
    },
  },
});

export const { 
  setLoaderOn, 
  setLoaderOff, 
  setPageTitle, 
  setOpenCustomModal, 
  setSelectedData,
  setDeleteModal, 
  clearSelectedData 
} = sharedSlice.actions;

export default sharedSlice.reducer;
