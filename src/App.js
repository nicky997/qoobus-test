import React from "react";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Homepage from "./Components/Homepage";
import "./styles/global.scss"

const App = () => {
    const user = useSelector(selectUser);

  return (
    <div className="App">
        {user ? <Login/> : <SignUp/>}
    </div>
  );
};

export default App;
