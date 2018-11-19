import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestQueryPage from './Components/testQuery';
import LoginPage from './Components/loginPage';
import WelcomePage from './Components/welcome';

function Routes() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/testQuery">About</Link>
          </li>
          <li>
            <Link to="/login">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/testquery" component={TestQuery} />
        <Route path="/login" component={Login} /> 
        <Route path="/welcome" component={Welcome} /> 
        
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function TestQuery() {
  return (
    <div>
      <h1>This is a test query to the GraphQL Server</h1>
      <TestQueryPage/>
    </div>
  );
}

function Welcome() {
  return (
    <WelcomePage/>
  );
}

function Login() {
  return (
    <LoginPage/>
  );
}

export default Routes;
