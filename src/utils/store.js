import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice.js";
import searchSlice from "./slice/searchSlice.js";
import liveChatSlice from "./slice/liveChatSlice.js";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    livechat: liveChatSlice,
  },
});
export default store;
