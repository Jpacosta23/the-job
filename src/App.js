import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Sign/Login";
import Register from "./pages/Sign/Register";
import Candidates from "./pages/Candidates";
import AddJob from "./pages/Jobs/Create";
import ApplyJob from "./pages/Jobs/Apply";
import DetailJob from "./pages/Jobs/Detail";
import BrowseJobs from "./pages/Jobs/";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/jobs" exact component={BrowseJobs} />
      <Route path="/jobs/create" exact component={AddJob} />
      <Route path="/jobs/detail/:id" exact component={DetailJob} />
      <Route path="/jobs/apply/:id" exact component={ApplyJob} />
      <Route path="/candidates" exact component={Candidates} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
