import React from 'react';
import {
  NavLink
} from "react-router-dom";

class Header extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact={true} activeClassName='active' to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to='/users'>Users</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
