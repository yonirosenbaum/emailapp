import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component{
  renderContent = () => {
    switch(this.props.auth){
      case null:
        return '';
      case false:
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        )
      default:  return([
          <li key="payments"><Payments/></li>,
      <li key="credits" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <li key="logout"><a href="/api/logout">Logout</a></li>
      ])
    }
  }
  // default will return if it is an ibject.
    render(){
        return(
            <nav>
            <div className="nav-wrapper">
              <Link 
                to={this.props.auth ? '/surveys' : '/'}  
                className="left brand-logo"
              >
                Emaily
              </Link>
              <ul id="nav-mobile" className="right">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        )
    }
};

//since keys and values are the same {auth:auth} = {auth}
const mapStateToProps = ({auth}) => {
  return {auth}
}
export default connect(mapStateToProps, null)(Header);


