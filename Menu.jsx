import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

export default class Menu extends React.Component{
    logout(){
        this.props.dispatch({type: 'LOGOUT'})
    }
    render(){
        return(
            
                // <div className="container">
                //     <ul className="nav justify-content-end">
                //         <li className="nav-item">
                //             <a className="nav-link" href="#">Home</a>
                //         </li>
                //         <li className="nav-item"><a className="nav-link" href="patients">Patient</a></li>
                //         <li className="nav-item"><a className="nav-link" href="about">About</a></li>
                //     </ul>
                // </div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link className="navbar-brand" to={'/home'} style={{paddingTop:'17px'}}>Home</Link>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/home/patient'}>Management</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/Link'}>Link</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/About'}>About</Link> 
                        </li>
                        <li>
                            <a className="nav-link" href='#' onClick={this.logout.bind(this)}>Logout</a>
                        </li>
    
                        </ul>
                </nav>

        )
    }
}