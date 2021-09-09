import React from "react";
import Auth from './components/Auth'
import { useSelector } from "react-redux";
import { selectUser } from "./store/user";
import Homepage from "./components/Homepage";
import "./styles/global.scss"
import Header from './components/Header'

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header/>
        {user.loggedIn ? <Homepage /> : <Auth />}
    </div>
  );
};

export default App;
