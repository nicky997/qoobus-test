import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login, selectUser} from "../store/user";
import "../styles/form.scss"

const Login = () => {
    const [login_email, setEmail] = useState('');
    const [login_password, setPassword] = useState('');
    const {email, password} = useSelector(selectUser)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === login_email && password === login_password) {
            dispatch(login({
                email: login_email,
                password: login_password,
                loggedIn: true,
                registered: true
            }));
        } else {
            alert('The email or the password you entered is incorrect!')
        }
    }

    return(
        <div className="login" style={{ backgroundColor: 'pink' }}>
        <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <input
            type="email"
            placeholder='Email'
            required
            value={login_email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder='Password'
            required
            value={login_password}
            onChange={(e) => setPassword(e.target.value)}
        />

            <button type="submit" className="submit_button">Submit</button>
        </form>
        </div>
    );

}
export default Login;