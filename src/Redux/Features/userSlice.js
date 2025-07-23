import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router";

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
    
    setCurrentUser: (state, { payload }) => {
      const user = state.users.find((u) => u.userId === payload);
      if (user) {
        state.currentUser = user;
      }
    },
   
    logOut: (state) => {
      state.currentUser = {};
    },
    setSelectedUser: (state, { payload }) => {
      state.selectedUser = payload;
    },
    message: (state, { payload }) => {
      const { senderId, receiverId, text } = payload;
      // const chatId = [senderId,receiverId].join("_");
      // state.messages.push({
      //   text:payload,
      // });
      state.messages.push({
        id: nanoid(),
        text,
        senderId,
        receiverId,
      });
    },
  },
});

export default userSlice.reducer;
export const { addUser, setSelectedUser, message, logOut,setCurrentUser } = userSlice.actions;
