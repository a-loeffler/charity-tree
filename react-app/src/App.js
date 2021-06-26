import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import EditorComponent from "./components/Editor";
import EditName from "./components/EditName";
import EditDescription from "./components/EditDescription";
import EditGoal from "./components/EditGoal";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import SignUpForm from "./components/SignUpForm"
import ProjectPage from "./components/ProjectPage";
import MediaUpload from "./components/MediaUpload";
import LandingPage from "./components/LandingPage";
import ProjectCreator from "./components/ProjectCreator";
import Discover from "./components/Discover/Discover";

import './index.css'

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact={true}>
          <LandingPage />
          {/* <Homepage /> */}
        </Route>
        <Route path="/profile/projects/create" exact={true}>
          <ProjectCreator />
        </Route>
        <Route path="/projects/create/:id/upload" exact={true}>
          <MediaUpload />
        </Route>
        <Route path="/projects/:id/edit" exact={true}>
          <EditName />
          <EditDescription />
          <EditGoal />
          <EditorComponent />
        </Route>
        <Route path="/projects/:id" exact={true}>
          <ProjectPage />
        </Route>
        <Route path="/signup" exact={true}>
          <SignUpForm />
        </Route>
        <Route>
          <Discover />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


// return (
//   <BrowserRouter>
//     <NavBar />
//     <Switch>

//       <Route path="/login" exact={true}>
//         <LoginForm />
//       </Route>

//       <Route path="/sign-up" exact={true}>
//         <SignUpForm />
//       </Route>

//       <ProtectedRoute path="/users" exact={true}>
//         <UsersList/>
//       </ProtectedRoute>

//       <ProtectedRoute path="/users/:userId" exact={true}>
//         <User />
//       </ProtectedRoute>

//       <ProtectedRoute path="/" exact={true} >
//         <h1>My Home Page</h1>
//       </ProtectedRoute>

//     </Switch>
//   </BrowserRouter>
// );
// }
