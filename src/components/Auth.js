import SignUp from "./SignUp";
import Login from "./Login"
import { selectUser } from "../store/user";
import { useSelector } from "react-redux";

const Auth = () => {
  const user = useSelector(selectUser)

  return (
    <>
      {user.registered ? <Login /> : <SignUp />}
    </>
  )
}

export default Auth