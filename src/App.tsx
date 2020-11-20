import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfile from "./features/user/UserProfile";

const App = () => (

  <Router>
    <Route path="/" component={UserProfile} />
  </Router>
);

export default App;
