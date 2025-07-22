import React, { useState } from "react";
import { message, setSelectedUser } from "../Redux/Features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoSend } from "react-icons/io5";
import { useParams } from "react-router";
function ChatingBox() {
  const [inputmsg, setInputMsg] = useState("");
  const { users, selectedUser, messages } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const sendMsg = () => {
    dispatch(message(inputmsg));
    setInputMsg("");
  };

  return (
    <div>
     

      {/* Chat Box */}
      <div className="chat bg-gray-100 rounded-2xl border-1  flex flex-col justify-end h-[600px] p-2">
        {selectedUser.username ? (
          <>
            <div className="flex items-center p-2 bg-white shadow rounded-t-2xl">
              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-amber-400 text-white font-bold text-xl mr-4 border-2 border-amber-400">
                {/* {selectedUser.username} */} 0
              </div>
              <div>
                <div className="font-bold text-lg text-gray-800">
                  {selectedUser.username}
                </div>
                <div className="text-sm text-green-500">Online</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              {messages.map((msg, i) => {
                return (
                  <div key={i} className="text-msg flex flex-col items-end">
                    <p className="bg-white text-black px-4 py-2 rounded-2xl shadow-md m-2 max-w-xs">
                      {msg}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="input flex items-center justify-end mt-2 gap-2">
              <input
                onChange={(e) => setInputMsg(e.target.value)}
                value={inputmsg}
                type="text"
                placeholder="Lets Chats"
                className="w-full border-2 px-4 py-2 rounded-lg shadow focus:outline-none focus:border-amber-500 transition-all duration-200 bg-white text-black"
              />
              <button
                onClick={sendMsg}
                className="bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <IoSend size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center absolute top-[400px] right-[400px] ">
            <h1 className="text-gray-400 font-bold text-xl">
              Select This Chat
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatingBox;
