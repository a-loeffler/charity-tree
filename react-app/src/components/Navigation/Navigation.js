import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { logout } from "../../store/session";
import { getAllProjects } from "../../store/allProjects";
import { getAllCategories } from "../../store/allCategories";
import { mediaGetter } from "../../store/media";
import { getAllDonors } from "../../store/allDonors";
import { getAllTiers } from "../../store/allTiers";
import { getAllUsers } from "../../store/allusers";
import logo from "./charity-tree-logo.svg"
import menuImage from "./menuImage.png"
import justMagnifyingGlass from './justMagnifyingGlass.svg'
import './loginform.css'
import './main.css'


function Navigation() {
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  //========== Log in stuffs ==============
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => state.session.user)
  const allProjects = useSelector((state) => state.allProjects.projects)
  const allCategories = useSelector((state) => state.allCategories.categories)
  const project_medias = useSelector((state) => state.MediaList.project_medias)
  const allDonors = useSelector((state) => state.allDonors.donors);
  const allTiers = useSelector((state) => state.allTiers.tiers);
  const allUsers = useSelector((state) => state.allUsers.users)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchText, setSearchText] = useState("")


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

  //========== Dispatch Get All ==============
  useEffect(() => {
    if (allProjects.length === 0) {
      dispatch(getAllProjects())
    }
    if (allCategories.length === 0) {
      dispatch(getAllCategories())
    }
    if (project_medias.length === 0) {
      dispatch(mediaGetter())
    }
    if (allDonors.length === 0) {
      dispatch(getAllDonors())
    }
    if (allTiers.length === 0) {
      dispatch(getAllTiers())
    }
    if (allUsers.length === 0) {
      dispatch(getAllUsers())
    }
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




  //========== Search
  async function handleSearch(e) {
    e.preventDefault()
    let splitSearch = searchText.split(" ")
    let processedSearch = splitSearch.join("+")
    if (processedSearch === "") return
    setSearchText("")
    history.push(`/search/${processedSearch}`)
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
          <Link to="/profile/projects/create" className="nav--link">
            Start a Project
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
            <input onChange={(e) => setSearchText(e.target.value)} type="text" className="homeSearch" placeholder="Search" value={searchText}></input>
            <button className="search--icon"><img src={justMagnifyingGlass} className="search--icon"></img></button>
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

          <Link to="/discover" className="nav--link large-hide"><div className="submenu--link">Discover</div></Link>
          <Link to="/profile/projects/create" className="nav--link large-hide"><div className="submenu--link">Start a Campaign</div></Link>


          {
            user ?
              <>
                <div className="submenu--link" onClick={(e) => onLogout()}>Log Out!!!</div>
                <Link to={`/profile/${user.id}`} className="nav--link"><div className="submenu--link">My Profile</div></Link>
                <Link to="/about" className="nav--link"><div className="submenu--link">About</div></Link>
              </>

            :

              <>
                <div id="loginButton"><div className="submenu--link" >Log In</div></div>
                <Link to="/signup" className="nav--link"><div className="submenu--link">Sign Up</div></Link>
                <div className="nav--link" onClick={(e) => logInDemo(e)}><div className="submenu--link"> Demo User</div></div>
                <Link to="/about" className="nav--link"><div className="submenu--link">About</div></Link>
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
