// import React, { useState } from "react";
// import { IoSend } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import Profile from "./Profile";
// import { message, setSelectedUser } from "../Redux/Features/userSlice";

// function ChatApp() {
//   const [inputmsg, setInputMsg] = useState("");
//   const [search, setSearch] = useState("");
//   // console.log("Input Message", inputmsg)
//   const { users, selectedUser, messages } = useSelector((state) => state.users);
//   const dispatch = useDispatch();
//   // console.log("User",users);

//   // const profileSelect = () => {
//   //   console.log("OnClick", selectedUser);
//   // };

//   const sendMsg = () => {
//     dispatch(message(inputmsg));
//     setInputMsg("");
//   };

//   console.log("selectedUser",selectedUser, selectedUser.username);
//   return (
//     <>
//       <div className="container rounded-2xl p-2 border-4 border-black  w-3/4 mx-auto h-10/12 flex mt-10">
//         <div className="sidebar flex-[1]  rounded-tl-2xl rounded-bl-2xl  ">
//           <div className="flex items-center my-4 w-full px-4"></div>
//           <div className="input  my-3  mx-1  rounded-2xl ">
//             <input
//               className="w-full border-1 p-1  rounded-lg"
//               type="text"
//               placeholder="Search in chat"
//               // onChange={handleFilter }
//             />
//           </div>

//           <div>
//             <Profile />
//           </div>
//         </div>
//         <div className="chat-container flex-[2] bg-gray-100 rounded-2xl border-1  flex flex-col justify-end h-[80vh] p-2">
//          {
//           selectedUser.username ?
//           <>
//           <div className="flex items-center p-2 bg-white shadow rounded-t-2xl">
//             <div className="w-9 h-9 rounded-full flex items-center justify-center bg-amber-400 text-white font-bold text-xl mr-4 border-2 border-amber-400">
//               {selectedUser.username}
//             </div>
//             <div>
//               <div className="font-bold text-lg text-gray-800">
//                 {selectedUser.username}
//               </div>
//               <div className="text-sm text-green-500">Online</div>
//             </div>
//           </div>
//           <div className="flex-1 flex flex-col justify-end">
//             {messages.map((msg, i) => {
//               return (
//                 <div key={i} className="text-msg flex flex-col items-end">
//                   <p className="bg-white text-black px-4 py-2 rounded-2xl shadow-md m-2 max-w-xs">
//                     {msg}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="input flex items-center justify-end mt-2 gap-2">
//             <input
//               onChange={(e) => setInputMsg(e.target.value)}
//               value={inputmsg}
//               type="text"
//               placeholder="Lets Chats"
//               className="w-full border-2 px-4 py-2 rounded-lg shadow focus:outline-none focus:border-amber-500 transition-all duration-200 bg-white text-black"
//             />
//             <button
//               onClick={sendMsg}
//               className="bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full flex items-center justify-center transition-colors duration-200"
//             >
//               <IoSend size={20} />
//             </button>
//           </div>
//         </> : <div className="flex justify-center items-center absolute top-[300px] right-[300px] ">
//         <h1 className="text-gray-400 font-bold text-xl">Select This Chat</h1>
//         </div>
//          }
//         </div>
//       </div>
//     </>
//   );
// }

// export default ChatApp;

import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import ChatingBox from "./ChatingBox";
import { useDispatch, useSelector } from "react-redux";


function ChatApp() {
  const { users ,currentUser} = useSelector((state) => state.users);
  // console.log("currentUser" , currentUser)

  return (
    <>
    {/* <Navbar />
      <h1 className="text-5xl font-bold text-center p-5 ">Please Login Chat App</h1> */}
    {
    //  currentUser && 
    <div>
    <Navbar />
    <div className="container rounded-2xl p-2 border-2 border-black  w-3/4 mx-auto flex mt-5">
      <div className="sidebar  w-[40%] h-[600px] border-1 ">
        <SideBar />
      </div>
      <div className=" w-[100%] ">
        <ChatingBox />
      </div>
    </div>
  </div>
    }
     
    </>
  );
}

export default ChatApp;
