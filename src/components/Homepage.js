import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser} from "../store/user";
import Chart from './Chart'
import '../styles/animation.scss'
const Homepage = () =>{
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout =(e) =>{
        e.preventDefault();

        dispatch(logout());
    }
    return(
        <div id="#logout">
            <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
                Welcome {user.first_name + ` ` + user.last_name}
            </div>
            <img src="qoobus_logo.png" id="animation" alt="animation-logo"/>
            <Chart/>
                <div style={{display: "flex", flexDirection: "end"}}>
            <button className="logout_button" onClick={(e)=> handleLogout(e)}>Logout</button>
                </div>
        </div>
    )
}
export default Homepage