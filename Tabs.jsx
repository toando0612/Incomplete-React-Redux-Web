import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

export default class Tabs extends React.Component{
    render(){
        const {match} = this.props
        return(
            <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to={`/Patient`}>Patiens</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Visit'}>Visists</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Labtest'}>+Order Labtest</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Prescription'}>Prescription</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Druginfo'}>DrugInfo</Link> 
                    </li>
                </ul>
        )
    }
}