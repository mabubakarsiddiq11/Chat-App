import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ChatApp from "./Components/ChatApp";
import LoginPage from "./Components/LoginPage";
import useTabSync from './hooks/useTabSync'

function App() {
  useTabSync();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/chat",
      element: <ChatApp />,
    },
    {
      path: "/chat/:id",
      element: <ChatApp />,
    },
   
  ]);
 
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
