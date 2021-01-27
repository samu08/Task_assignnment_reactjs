import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Createemployee from './components/Createemployee'
import EmployeList from './components/EmployeList'
import Editemployee from './components/Editemployee'
import Page1 from './components/Page1'

import EditPost from './components/EditPost'
import DeletePost from './components/DeletePost'
import PostDetails from './components/PostDetails'

import Admin2 from './components/Admin2'
import Details from './components/Details'
import Users from './components/Users'


import Emp1 from './components/Emp1'

import './App.css';

function App() {
  return (
    <Router>
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">React Assignment</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="/">Posts</a></li>
      <li><a href="/admin">Admin</a></li>
     
    </ul>
  </div>
</nav>
<div className="container">
                <br />
                <Route path="/" exact component={Admin2}></Route>
              
                <Route path="/details/:id" exact component={PostDetails}></Route>
                <Route path="/delete/:id" exact component={DeletePost}></Route>
                <Route path="/edit/:id" exact component={EditPost}></Route>
                <Route path="/admin" exact component={Admin2}></Route>
                <Route path="/details" exact component={Details}></Route>
                <Route path="/users" exact component={Users}></Route>
                <Route path="/adminuser" exact component={Emp1}></Route>
            </div>
</Router>
  );
}

export default App;
//<div className="App">
     
//<Emp1 />
    
 
//</div>