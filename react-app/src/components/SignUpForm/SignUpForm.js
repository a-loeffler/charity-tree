import React, { useEffect, useState } from "react";
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
  const [backendErrors, setBackendErrors] = useState([]);

  const onSignUp = async (e) => {
    e.preventDefault();
    const errorDiv = document.querySelector('.errors')
    if (errorDiv) {errorDiv.classList.remove("hidden")}
    if (errors.length > 0) {
      return
    } else {
      const data = await dispatch(signUp(username, email, password));
      if (data.errors) {
        setBackendErrors(data.errors);
      }
    }
  };

  useEffect(()=> {
    setBackendErrors([])
    let err = []
    const errorDiv = document.querySelector('.errors')
    if (errorDiv) {errorDiv.classList.add("hidden")}
    if(!email.includes('@') || !email.includes(".")) err.push("email: Email must be valid")
    if(username.length < 3) err.push("username: Username must be greater than 3 characters")
    if(password.length < 6) err.push("password: Password must be greater than 6 characters")
    if(password !== repeatPassword) err.push("password: Password fields must match")
     setErrors(err)
  }, [username, email, password, repeatPassword])


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
        <div className="errors">
          {errors.length > 0 && <h3>Errors:</h3> || backendErrors.length > 0 && <h3>Errors:</h3>}
          {backendErrors.map((error) => ( <div key={error}>{error}</div> ))}
          {errors.map((error) => ( <div key={error}>{error}</div> ))}
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
          required={true}
          className="signup-form-input"
        ></input>

        {/* <label>Password</label> */}
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          required={true}
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
