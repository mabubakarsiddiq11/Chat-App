import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ChatApp from "./Components/ChatApp";
import LoginPage from "./Components/LoginPage";
import ChatingBox from "./Components/ChatingBox";

function App() {
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
