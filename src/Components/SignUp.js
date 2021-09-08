import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {register} from "../features/userSlice";
import { selectUser } from "../features/userSlice";
import Login from './Login'
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name,setFirst_name ] = useState('');
    const [last_name,setLast_name] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(register({
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            loggedIn: true,
        }));
    }
    const user = useSelector(selectUser);
  return (
    <div className="signup">
        <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Sign up</h1>
        <input type="email"
               placeholder='Email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
               placeholder='Password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}/>
        <input type="password_check" placeholder='Repeat password'
        />
        <input type="first_name"
               placeholder='First name'
               value={first_name}
               onChange={(e) => setFirst_name(e.target.value)}
        />
        <input type="last_name"
               placeholder='Last name'
               value={last_name}
               onChange={(e) => setLast_name(e.target.value)}
        />
            <button type="submit" className="submit_button">Submit</button>
        </form>
    </div>
  );
}

export default SignUp;
