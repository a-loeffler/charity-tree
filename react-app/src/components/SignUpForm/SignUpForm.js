import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [mismatchedPassword, setMismatchedPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    console.log("Front ned: SignupForm.js")
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data.errors) {
        setErrors(data.errors);
      }
    } else {
      setMismatchedPassword("Passwords do not match")
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp} className="signup--form">

      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>

        {/* <label>User Name</label> */}
        <h1>Sign Up</h1>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
          placeholder="User Name"
          className="signup-form-input"
        ></input>

        {/* <label>Email</label> */}
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
          placeholder="Email"
          className="signup-form-input"
        ></input>

        {/* <label>Password</label> */}
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          placeholder="Password"
          className="signup-form-input"
        ></input>

        {/* <label>Repeat Password</label> */}
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          placeholder="Repeat Password"
          className="signup-form-input"
        ></input>

      <button type="submit" className="signUpSubmitButton">Create Account</button>
    </form>
  );
};

export default SignUpForm;
