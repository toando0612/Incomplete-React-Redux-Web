import React from 'react'
import {connect} from 'react-redux'
import Menu from './Menu.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Login from './Login.jsx'
import Tabs from './Tabs.jsx'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'



class App extends React.Component{
    
    render(){
        return (
            <Router>                
                {/* {this.props.authenticate.loggedin==true? */}
                    <div>
                        <Header/>
                        <Menu dispatch={this.props.dispatch}/>
                        <Switch>
                            <Route path={'/About'} component={About}  />                    
                            <Route path={'/'} render={()=>{return(
                            <div>
                            <Home
                            access_token={this.props.authenticate.access_token}
                            authenticate={this.props.authenticate}
                            dispatch={this.props.dispatch} 
                            
                            editedPatient={this.props.editedPatient}
                            patients={this.props.patients} 

                            visits={this.props.visits}
                            editedVisit={this.props.editedVisit}

                            labTests={this.props.labTests}
                            editedLabTest={this.props.editedLabTest}

                            services={this.props.services}
                            />
                            </div>)}
                            }/>
                        </Switch>
                        <Footer />
                    </div>
                    {/* : */}
                    {/* <div>
                        <Login authenticate={this.props.authenticate} 
                        dispatch={this.props.dispatch}/>
                    </div> */}
                {/* } */}
            </Router>

        )
    }
    
}

function mapStateToProps(centralState){
    return {
       patients: centralState.patients,
       editedPatient: centralState.editedPatient,
       visits: centralState.visits,
       editedVisit: centralState.editedVisit,
       authenticate :centralState.authenticate,
       labTests: centralState.labTests,
       editedLabTest: centralState.editedLabTest,
       services : centralState.services
    }
}


export default connect(mapStateToProps)(App)