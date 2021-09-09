import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {register} from "../store/user";
// import {validPassword} from "./Regex";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [first_name,setFirst_name ] = useState('');
    const [last_name,setLast_name] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password === confirmPassword) {
            dispatch(register({
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name,
                registered: true
            }))
        } else {
            alert('The passwords should match!')
        }
    }

    return (
        <div className="signup" style={{background: 'lightgray'}}>
            <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign up</h1>
            <input
                type="email"
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
            />
            <input type="password"
                placeholder='Password'
                minLength={8}
                maxLength={12}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
            />
            <input
                type="password"
                placeholder='Repeat password'
                minLength={8}
                maxLength={12}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
            />
            <input
                type="first_name"
                placeholder='First name'
                required
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                className="form-input"
            />
            <input type="last_name"
                placeholder='Last name'
                value={last_name}
                required
                onChange={(e) => setLast_name(e.target.value)}
                className="form-input"
            />
            <button type="submit" className="submit_button">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;
