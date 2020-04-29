import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveryNew = () => <h2>SurveyNew</h2>


class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    };
    render(){
      return(
        // required this class for a root element with materialise-css
        <div className="container">
            <BrowserRouter>
              <div>
                  <Header/>
                  <Route path='/' exact component={Landing}/>
                  <Route path='/surveys' exact component={Dashboard}/>
                  <Route path = '/survey/new' exact component={SurveryNew}/>
              </div>
            </BrowserRouter>
        </div>
      )
    }
};

export default connect(null, actions)(App);