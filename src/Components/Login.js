import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectUser, login} from "../features/userSlice";
import Homepage from "./Homepage";
import SignUp from "./SignUp";
import "../styles/form.scss"
const Login = () => {

    const user = useSelector(selectUser);
    const [login_email, setEmail] = useState('');
    const [login_password, setPassword] = useState('');

     const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            email: login_email,
            password: login_password,

        }));
    }

    return(
        <div className="login">
        <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <input type="email"
               placeholder='Email'
               value={login_email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
               placeholder='Password'
               value={login_password}
               onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit" className="submit_button">Submit</button>
        </form>

            {user.email==login_email && user.password==login_password ? <Homepage/> : <SignUp/> }
            </div>
    );

}
export default Login;