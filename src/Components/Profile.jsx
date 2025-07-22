import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../Redux/Features/userSlice";
import { useNavigate } from "react-router";
function Profile({ filterOut }) {
  const filterData = filterOut;
  const { users, selectedUser, messages,currentUser } = useSelector((state) => state.users);
  // console.log(filterData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("currentUser",currentUser);
  return (
    <>
      {filterData.map((user, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              dispatch(setSelectedUser(user));
              // navigate(`/chat/${currentUser.username}`);
            }}
            className="flex items-center p-2 bg-white shadow rounded-t-2xl"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-amber-400 text-white font-bold text-xl mr-4 border-2 border-amber-400">
              {user.username.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-lg text-gray-800">
                {user.username}
              </div>
              <div className="text-sm text-green-500">Online</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Profile;
