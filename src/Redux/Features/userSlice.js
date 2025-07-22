import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users : [{username: "Admin", userId : nanoid() }],
    messages : [],
    selectedUser : {},
    // receiver : null
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        addUser : (state,{payload}) => {
            state.users.push({
                ...payload,
                userId : nanoid()
            })

        },
        setSelectedUser: (state,{payload})=>{
            state.selectedUser = payload
        },
        message : (state,{payload}) => {
            state.messages.push(payload)

        }

    }
})

// export

export default userSlice.reducer
export const {addUser,setSelectedUser,message  } = userSlice.actions