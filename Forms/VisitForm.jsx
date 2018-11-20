
import React from 'react'
import { isNumber } from 'util';
export default class VisitForm extends React.Component{

    constructor(){
        super()
        this.state = {id:0,problems:[],problem1: '',problem2:'', problem3:'',problem4:'', patient: 0, date:'', time:''}
    }

    componentWillReceiveProps(newProps){
        this.setState({id: newProps.editedVisit.id,
            problem1 : newProps.editedVisit.problem1,
            problem2 : newProps.editedVisit.problem2,
            problem3 : newProps.editedVisit.problem3,
            problem4 : newProps.editedVisit.problem4,
            patient: newProps.editedVisit.patient
        })
    }

    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    addVisit(){
        //POST to webapi
        var access_token = localStorage.getItem('access_token')  //get access_token
        if(this.state.id===0){
            fetch(`http://localhost:8080/visits?access_token=${access_token}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldA=='
                },  
                method: 'post', 
                body: JSON.stringify({problems: [this.state.problem1,this.state.problem2,this.state.problem3, this.state.problem4],patient: {id:this.state.patient} })
            })
            .then((res)=>res.json())
            .then((visit)=>this.props.dispatch({type:'ADD_VISIT', payload: visit}))

        }
        else{
            fetch(`http://localhost:8080/visits?access_token=${access_token}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldA=='
                },  
                method: 'put', 
                body: JSON.stringify({id:this.state.id,
                                    problems: [this.state.problem1,this.state.problem2,this.state.problem3, this.state.problem4],
                                    patient: {id:this.state.patient} })
            })
            .then((res)=>res.json())
            .then((visits)=>this.props.dispatch({type: 'EDITED_VISIT', payload: visits.id}))
        }
    }

    clear(){
        this.setState({id:0 ,problem1: '',problem2: '',problem3: '',problem4: '', patient: 0})
    }

    render(){
        return(
            <div className='container'>
            <h1>Visit Form</h1>
                <form action="">
                <div className='form-group'>
                Id<input type="text" name="id" className='form-control' value={this.state.id} onChange={this.handleChange.bind(this)}/>
                Problems<br/>
                I  <input type="text" name="problem1" className='form-control' value={this.state.problem1} onChange={this.handleChange.bind(this)} placeholder="Input your problem"/>
                II <input type="text" name="problem2" className='form-control' value={this.state.problem2} onChange={this.handleChange.bind(this)} placeholder="Input your problem"/>
                III<input type="text" name="problem3" className='form-control' value={this.state.problem3} onChange={this.handleChange.bind(this)} placeholder="Input your problem"/>
                IV <input type="text" name="problem4" className='form-control' value={this.state.problem4} onChange={this.handleChange.bind(this)} placeholder="Input your problem"/>
                Patient<input type="text" name="patient" className='form-control' value = {this.state.patient} onChange={this.handleChange.bind(this)}/>
                </div>
                <label>
                <button className='btn btn-outline-dark' style={{marginRight:'10px'}} onClick={this.addVisit.bind(this)}>Save</button>
                <button className='btn btn-outline-dark'  onClick={this.clear.bind(this)}>Clear</button> <br/>
                <a href="labtest">Next</a>
                <button type='button' className="fa fa-arrow-right" style={{fontsize:'48px'}}/>
                </label>
                </form>


            </div>  
            
        )
    }
}