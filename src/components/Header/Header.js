import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
// import bandeira from '../img/bandeira-brasil.jpg';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <h1 className='welcome'><em>Welcome, {this.context.user.name}!</em></h1>
        <nav className='log'>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav className='log'>
        <Link to="/login">Login |</Link> <Link to="/register">Sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <header>
        <h1 className='title'>
          <Link to="/"><em>Senna</em></Link>
        </h1>
        <div>
          {/* <img className='img' src={bandeira} alt='Brazilian Flag' /> */}
        </div>
        <p className='sub-title'><em>
          Practice learning a language with the spaced repetition revision
          technique.</em>  
        </p>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
