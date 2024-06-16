import { createSlice } from "@reduxjs/toolkit";

/* 用于初始化状态管理*/
const initialState = {
  postData: [],
};

export const postDataSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    savePostData: (state, action) => {
      state.postData = action.payload;
    },
  },
});

export const { savePostData } = postDataSlice.actions;
export default postDataSlice.reducer;
