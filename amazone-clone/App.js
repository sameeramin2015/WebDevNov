import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/orders">
         
        </Route>
        <Route path="/login">
        <h1>Login</h1>
        </Route>
        <Route path="/checkout">
        
        </Route>
        <Route path="/payment">
        
        </Route>
        <Route path="/">
       <img src='./public/src/amazon_PNG11.png'/>
          <h1>Home page!!</h1>
          
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
// this command will fix the error - npm install react-router-dom@4.2.2
export default App;
