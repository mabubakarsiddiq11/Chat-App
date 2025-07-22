import { configureStore } from "@reduxjs/toolkit";
import users from './Features/userSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["users", "messages"] 
  };
  const persistedReducer = persistReducer(persistConfig, users);

export const store = configureStore({
    reducer : {
        users : persistedReducer
    }
})

export const persistor = persistStore(store);