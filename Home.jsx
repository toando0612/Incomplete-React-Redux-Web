import React from 'react'
import {connect} from 'react-redux'
import PatientList from './Lists/PatientList.jsx';
import PatientForm from './Forms/PatientForm.jsx'
import Tabs from './Tabs.jsx'
import VisitForm from './Forms/VisitForm.jsx';
import VisitList from './Lists/VisitList.jsx';
import LabTestForm from './Forms/LabTestForm.jsx';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import LabtestList from './Lists/LabtestList.jsx';
import ServiceList from './Lists/ServiceList.jsx'


export default class Home extends React.Component{
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-sm-2">
                <Tabs match={this.props.match}/>
                </div>
                <div className="col-sm-10">
                        <Switch>
                            <Route path={`/Patient`}  render={()=>
                            <div className='row'>
                                        <PatientForm 
                                        access_token={this.props.authenticate.access_token}
                                        authenticate={this.props.authenticate} 
                                        editedPatient={this.props.editedPatient} 
                                        dispatch={this.props.dispatch}
                                        />
                                        <PatientList 
                                        access_token={this.props.authenticate.access_token}
                                        authenticate={this.props.authenticate} 
                                        dispatch={this.props.dispatch} 
                                        patients={this.props.patients}
                                        />
                            </div>
                            }/>
                            <Route path={`/Visit`} render={()=>
                                    <div className='row'>
                                        <VisitForm editedVisit={this.props.editedVisit} 
                                        dispatch={this.props.dispatch}/>
                                        <VisitList visits={this.props.visits} 
                                        dispatch={this.props.dispatch} />
                                    </div>
                            }/>
                            <Route path={`/Labtest`} render={()=>
                                    <div>
                                        <div className="col-sm-6">
                                            <LabTestForm editedLabTest={this.props.editedLabTest}
                                            dispatch={this.props.dispatch}/>
                                            <LabtestList labTests={this.props.labTests}
                                            dispatch={this.props.dispatch}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <ServiceList services={this.props.services} 
                                            dispatch={this.props.dispatch}/>
                                        </div>
                                    </div>
                            }/>
                            <Route path='/' render={()=>
                            <div>
                                <Link to={`/Patient`}>
                                    <button><i className="material-icons">Add Patient</i></button>
                                </Link>
                            </div>
                            }/>
                        </Switch>

                </div>
            </div>
            </div>
        )
    }
}