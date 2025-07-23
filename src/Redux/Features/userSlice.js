import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  messages: [],
  selectedUser: {},
  currentUser: {},
  // room : {roomId : nanoid() , roomMsg : []}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      const existingUser = state.users.find(
        (u) => u.username === payload.username
      );

      if (existingUser) {
        state.currentUser = existingUser;
      } else {
        const newUser = { ...payload, userId: nanoid() };
        state.users.push(newUser);
        state.currentUser = newUser;
      }
      // console.log("payload",state.currentUser)
    },
    logOut: (state) => {
      state.currentUser = {};
    },
    setSelectedUser: (state, { payload }) => {
      state.selectedUser = payload;
    },
    message: (state, { payload }) => {
      state.messages.push(payload);
    },
  },
});

export default userSlice.reducer;
export const { addUser, setSelectedUser, message , logOut} = userSlice.actions;
