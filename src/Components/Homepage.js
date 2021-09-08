import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser} from "../features/userSlice";

const Homepage = () =>{
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout =(e) =>{
        e.preventDefault();

        dispatch(logout());
    }
    return(
        <div id="#logout">
            {user.first_name}
            <button className="logout_button" onClick={(e)=> handleLogout(e)}>Logout</button>
        </div>
    )
}
export default Homepage