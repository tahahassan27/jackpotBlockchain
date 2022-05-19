import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import RegisterUser from '../compositComponents/registerUser/registerUser';
// import Login from '../compositComponents/login/login';
import AdminLogin from '../compositComponents/adminLogin/adminLogin';
export default function Navbar() {
  
  return <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">Taha's JackPot</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav" >
                            <li className="nav-item">
                              <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/adminLogin">Log In</Link>
                            </li>
                      </ul>
                 </div>
            </div>
      </nav>
       <Switch>
            <Route exact path="/">
                <RegisterUser/>
            </Route>
            <Route exact path="/adminLogin">
                <AdminLogin/>
            </Route>
            
      </Switch>
</div>;
}
