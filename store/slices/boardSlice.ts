import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoardType {
  isLeaderBoardOpen: boolean;
}

const initialState: BoardType = {
  isLeaderBoardOpen: false,
};

export const boardSlice = createSlice({
  name: "Board",
  initialState,
  reducers: {
    setLeaderBoardOpen: (state) => {
      state.isLeaderBoardOpen = !state.isLeaderBoardOpen; 
    },
  },
});

export const { setLeaderBoardOpen } = boardSlice.actions;
export default boardSlice.reducer;
