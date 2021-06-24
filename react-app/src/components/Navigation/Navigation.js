import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { logout } from "../../store/session";
import { getAllProjects } from "../../store/allProjects";
import './main.css'
import logo from "./charity-tree-logo.svg"
import menuImage from "./menuImage.png"
import justMagnifyingGlass from './justMagnifyingGlass.svg'
import './loginform.css'




function Navigation() {
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  //========== Log in stuffs ==============
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const allProjects = useSelector((state) => state.allProjects.projects)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const logInDemo = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'));
    if (data.errors) {
      setErrors(data.errors);
    }
  }

  //========== Get All Projects ==============
  useEffect(() => {
    console.log(allProjects)
    if (allProjects.length === 0) {
      dispatch(getAllProjects())
    }
    console.log(allProjects)
  }, [])

  //================  Submenu =============
  useEffect(() => {
    const subMenuIcon = document.querySelector('.subMenuIcon');
    const submenu = document.querySelector('.submenu');
    const loginButton = document.getElementById('loginButton');
    const loginBackground = document.querySelector('.login--background');
    const closeWrapper = document.querySelector('.close-wrapper');
    const loginFormBackground = document.querySelector('.login-form--background');
    const closeLoginForm = document.querySelector('.close-login-form');

    function hideLoginForm() {
      loginBackground.classList.remove('login--background-fadeIn')
      loginFormBackground.classList.remove('login-form--background--slideIn')
      closeWrapper.classList.remove('close-wrapper--slidein')
    }

    user && hideLoginForm()

    subMenuIcon &&  subMenuIcon.addEventListener("click", (e) => { submenu.classList.add('submenu--slide_in')})

    submenu && submenu.addEventListener("mouseleave", (e) => { submenu.classList.remove('submenu--slide_in')})

    closeLoginForm && closeLoginForm.addEventListener("click", (e) => { hideLoginForm() })

    loginButton &&  loginButton.addEventListener("click", (e) => {
        loginBackground.classList.add('login--background-fadeIn')
        loginFormBackground.classList.add('login-form--background--slideIn')
        closeWrapper.classList.add('close-wrapper--slidein')
      })

  }, [onLogout, onLogin, logInDemo])




  //========== ToDo: Search
  function handleSearch(e) {
    e.preventDefault()
    console.log('woot')
  }


  return (
    <div className="nav--background">
      <div className="login--background">
        <div className="close-wrapper">
          <div className="close-login-form">X</div>
        </div>

        <form onSubmit={onLogin} className="login-form--background">
          <div className="login-errors">
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>

          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            className="loginForm--input"
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className="loginForm--input"
          />
          <button type="submit" className="loginFormButton">Login</button>

        </form>
      </div>



      <div className="nav--element med-hide small-hide">
        <div className="nav--link--container">
          <Link to="/discover" className="nav--link">
            Discover
          </Link>
        </div>

        <div className="nav--link--container">
          <Link to="/start-a-campaign" className="nav--link">
            Start a Campaign
          </Link>
        </div>
      </div>
      {user && <div className="username small-hide">Logged in as: {user.username}</div>}
      <div className="nav--element">
        <Link to="/" className="nav--link">
          <img src={logo} className="logo"></img>
        </Link>
      </div>

      <div className="nav--element large-hide med-hide">
         {user && <div className="username">Logged in as: {user.username}</div>}
      </div>

      <div className="nav--element">
        <div className="nav--link--container small-hide">
          <form onSubmit={(e) => handleSearch(e)} className='nav--link--container'>
            <input type="text" className="homeSearch" placeholder="Search"></input>
            <button style={{ backgroundImage: 'url(images/justMagnifyingGlass.svg)' }} className="search--icon"></button>
          </form>
        </div>

        <div className="nav--link--container small-hide">
          <img src={menuImage} className="subMenuIcon" id="profileMenu" draggable="false"></img>
        </div>

        <div className="submenu">

          <form onSubmit={(e) => handleSearch(e)} className='nav--link--container large-hide med-hide'>
            <input type="text" className="homeSearch large-hide med-hide" placeholder="Search"></input>
            <button style={{ backgroundImage: `url(${justMagnifyingGlass})` }} className="search--icon large-hide med-hide"></button>
          </form>

          <Link to="/dicover" className="nav--link nav--link large-hide"><div className="submenu--link">Discover</div></Link>
          <Link to="/start-a-campaign" className="nav--link large-hide"><div className="submenu--link">Start a Campaign</div></Link>


          {
            user ? <div className="submenu--link" onClick={(e) => onLogout()}>Log Out</div> :

              <>
                <div id="loginButton"><div className="submenu--link" >Log In</div></div>
                <Link to="/signup" className="nav--link"><div className="submenu--link">Sign Up</div></Link>
                <div className="nav--link" onClick={(e) => logInDemo(e)}><div className="submenu--link"> Demo User</div></div>
              </>
          }

        </div>
      </div>

    </div>
  )
}

export default Navigation;



{/* <nav>
<ul>
  <li>
    <NavLink to="/" exact={true} activeClassName="active">
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/login" exact={true} activeClassName="active">
      Login
    </NavLink>
  </li>
  <li>
    <NavLink to="/sign-up" exact={true} activeClassName="active">
      Sign Up
    </NavLink>
  </li>
  <li>
    <NavLink to="/users" exact={true} activeClassName="active">
      Users
    </NavLink>
  </li>
  <li>
    <LogoutButton />
  </li>
</ul>
</nav> */}
