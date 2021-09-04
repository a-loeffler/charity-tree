import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import EditPage from "./components/EditPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm"
import ProjectPage from "./components/ProjectPage";
import ProfilePage from "./components/Profile/ProfilePage";
import MediaUpload from "./components/MediaUpload";
import LandingPage from "./components/LandingPage";
import ProjectCreator from "./components/ProjectCreator";
import Discover from "./components/Discover/Discover";
import UpdateUser from "./components/Profile/UpdateUser";
import About from "./components/About";

import './index.css'
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

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
        <Route path="/profile/:id/update">
          <UpdateUser />
        </Route>
        <Route path="/profile/:id" exact={true}>
          <ProfilePage />
        </Route>
        <Route path="/profile/projects/create" exact={true}>
          <ProjectCreator />
        </Route>
        <Route path="/projects/create/:id/upload" exact={true}>
          <MediaUpload />
        </Route>
        <Route path="/projects/:id/edit" exact={true}>
          <EditPage />
        </Route>
        <Route path="/projects/:id" exact={true}>
          <ProjectPage />
        </Route>
        <Route path="/signup" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search/:query">
          <Search />
        </Route>
        <Route>
          <Discover />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


