import React, { useState } from "react";
import Profile from "./Profile";
import { useSelector } from "react-redux";

function SideBar() {
  const [search, setSearch] = useState("");
  const { users ,currentUser} = useSelector((state) => state.users);

  const filterOut = users.filter((user) => {
    return  user.username.toLowerCase().includes(search.toLowerCase());
   });

   const filterUsers = users.filter((element) => {
    return element.userId !== currentUser.userId
    })

    // console.log("currentUser",currentUser)

  return (
    <div>
      <div className="sidebar   rounded-tl-2xl rounded-bl-2xl  ">
        <div className="input  my-3  mx-1  rounded-2xl ">
          <input
            className="w-full border-1 p-1  rounded-lg"
            type="text"
            placeholder="Search in chat"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <Profile filterOut={filterUsers } />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
