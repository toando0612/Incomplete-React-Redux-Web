import React from 'react'

export default class Form extends React.Component{
    constructor(){
        super()
        this.state = {id: 0, name: '', dateOfBirth: '', gender:'', address:''}
    }

    componentWillReceiveProps(newProps){
        this.setState({
            id: newProps.editedPatient.id,
            name: newProps.editedPatient.name,
            dateOfBirth: newProps.editedPatient.dateOfBirth,
            gender: newProps.editedPatient.gender,
            address:newProps.editedPatient.address
        })
    }

    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    addPatient(){
        //POST to webapi
        var access_token = localStorage.getItem('access_token')  //get access_token
        if(this.state.id===0){
            fetch(`http://localhost:8080/patients?access_token=${access_token}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldA=='
                },  
                method: 'post', 
                body: JSON.stringify(this.state)
            })
            .catch(err=>{
                console.log(err)
            })
            .then((res)=>res.json())
            .then((patients)=>this.props.dispatch({type:'ADD_PATIENT', payload: patients}))
        }
        else{
            fetch(`http://localhost:8080/patients?access_token=${access_token}`, {
                headers: {
                    'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldA==',
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: 'put', 
                body: JSON.stringify({id:this.state.id,
                                    name: this.state.name,
                                    dateOfBirth: this.state.dateOfBirth,
                                    gender: this.state.gender,
                                    address:this.state.address})
            })
            .then(()=>this.props.dispatch({type: 'EDITED_PATIENT', payload: this.state.id}))
        }
    }

    clear(){
        this.setState({id:0 ,name: '', dateOfBirth: '',gender:'',address:''})
    }

    render(){
        return(
            <div className='container'>
            <h1>Patient Form</h1>
                <form action="">
                    <div className='form-group'>
                            Id<input type="text" name="id" className='form-control' value={this.state.id} onChange={this.handleChange.bind(this)}/>
                            Name<input type="text" name="name" className='form-control' value={this.state.name} onChange={this.handleChange.bind(this)}/>
                            Birthday<input type="text" name="dateOfBirth" className='form-control' value = {this.state.dateOfBirth} onChange={this.handleChange.bind(this)}/>
                            Gender
                            <div className="radio">
                                <label>
                                    <input type="radio" name="gender" value="MALE" checked={this.state.gender==="MALE"} onChange={this.handleChange.bind(this)}/>
                                    Male
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="gender" value="FEMALE" checked={this.state.gender==="FEMALE"} onChange={this.handleChange.bind(this)} />
                                    Female
                                </label>
                            </div>
                            Address<input type="text" name="address" className='form-control' value = {this.state.address} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <label>
                    <button className='btn btn-outline-dark' style={{marginRight:'20px'}} onClick={this.addPatient.bind(this)}>Save</button>
                    <button className='btn btn-outline-dark' style={{marginRight:'20px'}} onClick={this.clear.bind(this)}>Clear</button> <br/><br/><br/><br/>
                    {/* <a href="visit">Next</a>
                    <button type='button' className="fa fa-arrow-right" style={{fontsize:'48px'}}/> */}
                    </label>
                </form>


            </div>  
            
        )
    }
}