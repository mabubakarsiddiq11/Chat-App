// src/hooks/useTabSync.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listenToTabs } from "../Components/broadcast";
import { setCurrentUser, message, addUser, } from "../Redux/Features/userSlice"; 

const useTabSync = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        listenToTabs(({ type, payload }) => {
            if (type === "ADD_USER") {
                // dispatch(setCurrentUser(payload)); // sync user
            }

            if (type === "SEND_MESSAGE") {
                dispatch(message(payload)); // sync message
            }
        });
    }, []);
};

export default useTabSync;