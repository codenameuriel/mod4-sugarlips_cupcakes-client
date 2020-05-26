import React, { Component } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import Signup from './components/Signup'
import EditProfile from './components/EditProfile'
import CupcakeContainer from './components/CupcakeContainer'
import Login from './components/Login'
import CssCupcake from './components/CssCupcake'
import CupcakeProfile from './components/CupcakeProfile'
import Search from './components/Search'
import Sort from './components/Sort'
import Cart from './components/Cart'




class App extends Component {

  state = {
    form: {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      zip_code: "",
      phone_number: "",
      credit_card: ""
    },
    username: '',
    loggedInUser: {}
  }

  handleFormChange = event => {
    this.setState({
      form: {
        ...this.state.form, [event.target.name]: event.target.value
      }
    })
  }

  loginUser = username => {
    fetch(`http://localhost:4000/users/${username}`)
    .then(resp => resp.json())
    .then(user => this.setState({
      loggedInUser: user
      })
    )
  }

  logoutUser = () => {
    this.setState({
      loggedInUser: {}
    })
  }

  createNewUser = user => {
    fetch(`http://localhost:4000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user => this.setState({
      loggedInUser: user
      }))
  }
  
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleLoginSubmit = (event, username) => {
    event.preventDefault()
    this.loginUser(username)
  }

  handleSignupSubmit = (event, user) => {
    event.preventDefault()
    this.createNewUser(user)
  }

  addToCart = (cupcakeID, userID) => {
    fetch(`http://localhost:4000/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: userID,
        cupcake_id: cupcakeID
      })
    })
    .then(resp => resp.json())
    .then(console.log)
  }


  

  render() {
console.log(this.props)
    return (
     
      <div className="App">
        <Route 
          exact path="/profile" 
          render={(routerProps) => <Profile
            loggedInUser={this.state.loggedInUser}
            logoutUser={this.logoutUser}
            {...routerProps} 
            editInfo={this.editInfo}
            handleUpdate={this.handleUpdate}
           loggedInUser= {this.state.loggedInUser}/>
          } 
        />
        <Route 
          exact path="/signup" 
          render={(routerProps) => <Signup 
            form={this.state.form}
            handleFormChange={this.handleFormChange}
            handleSignupSubmit={this.handleSignupSubmit} 
            {...routerProps} />} 
        />
        <Route 
          exact path="/edit-profile" 
          render={(routerProps) => <EditProfile 
            form={this.state.form}
            updateProfile={this.updateProfile}
            loggedInUser= {this.state.loggedInUser}
            {...routerProps}
             />} 
        />
        <Route 
          exact path="/cupcakes" 
          render={(routerProps) => <CupcakeContainer
            loggedInUser={this.state.loggedInUser}
            logoutUser={this.logoutUser} 
            {...routerProps}
            sort={<Sort />}
            search={<Search />} />}
        />
        <Route 
          exact path="/login" 
          render={(routerProps) => <Login 
            username={this.state.username}
            handleChange={this.handleChange}
            handleLoginSubmit={this.handleLoginSubmit}
            {...routerProps} />} 
        />
        <Route 
          exact path="/" 
          render={(routerProps) => 
          <HomePage {...routerProps} />}
        />
        <Route 
          exact path="/animation" 
          render={() => <CssCupcake />}
        />
        <Route 
          exact path="/cupcakes/:id" 
          render={(routerProps) => <CupcakeProfile
            loggedInUser={this.state.loggedInUser}
            addToCart={this.addToCart}
            {...routerProps} />}
        />
        <Route 
          exact path='/cart'
          render={routerProps => <Cart 
            loggedInUser={this.state.loggedInUser}
            logoutUser={this.logoutUser}
            {...routerProps} />}
        />

      </div>
    )
  }
}

export default App;
