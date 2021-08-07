import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import NotFound from './NotFound'
import Alert from './Alert'
import About from './About'
import axios from 'axios'
import UserDetails from './UserDetails'
import GithubState from '../context/githubState'

const App = () => {

    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)
    const [repos, setRepos] = useState([])


    const getUserRepos = (username) => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(res => {
                    setRepos(res.data)
                    setLoading(false)
                });
        }, 1000);   
    }



   const showAlert = (msg, type) => {
        setAlert({msg,type})

        setTimeout(() => {
            setAlert({ alert: null })
        }, 3000);
    }

    
    return (
        <GithubState>
            <BrowserRouter>
            <Navbar />
            <Alert alert= {alert}/>
            <Switch>
                    <Route exact path="/"component={Home}/>
                    <Route path="/about" component={About} />
                    <Route path="/user/:login" render= {props => (
                        <UserDetails 
                            {...props}                             
                            getUserRepos = {getUserRepos}                            
                            repos= {repos}/>
                    )} />
                    <Route component = {NotFound} />
            </Switch>
        </BrowserRouter>
        </GithubState>                
    )
  
}

export default App
