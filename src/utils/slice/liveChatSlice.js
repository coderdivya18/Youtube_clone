import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT_COUNT } from "../constants.js";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
