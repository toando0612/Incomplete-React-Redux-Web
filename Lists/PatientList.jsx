import React from 'react'


export default class List extends React.Component{

    loadPatients(){
        var access_token = localStorage.getItem('access_token')  
        fetch(`http://localhost:8080/patients?access_token=${access_token}`)
        .catch(err=>{
            console.log(err)
        })
        .then(res=> res.json())
        .then(patients=>this.props.dispatch({type: 'FETCH_PATIENT', payload: patients}))
    }

   onDelete(id){
    var access_token = localStorage.getItem('access_token')  
    console.log('delete '+id)
    if(!confirm('Do you want to delete?')) return

     fetch(`http://localhost:8080/patients/${id}?access_token=${access_token}`, 
        {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldA=='
        },  
        method: 'delete',
        })
     .then(()=>this.props.dispatch({type: 'DELETE_PATIENT', payload: id}))
   }

   onEdit(id, name, birthday, gender, address){
     this.props.dispatch({type: 'EDIT_PATIENT', payload: {id:id ,name: name, dateOfBirth: birthday, gender:gender, address:address}})
   }

    render(){
        return(
            <div>
                <h1>List of patients</h1>
               
               <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>
                            Name
                        </th>
                        <th>
                            Birthday
                        </th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {this.props.patients.map((s,index)=>
                    <tbody>
                    <tr key={index}>
                        <td>{s.id}</td>
                        <td>{s.name} </td>
                        <td>{s.dateOfBirth}</td>
                        <td>{s.gender}</td>
                        <td>{s.address}</td>
                        <td><button className="glyphicon glyphicon-edit" onClick={this.onEdit.bind(this, s.id, s.name, s.dateOfBirth, s.gender,s.address)}/></td>
                        <td><button className="glyphicon glyphicon-remove" onClick={this.onDelete.bind(this, s.id)}/></td>
                    </tr>
                    </tbody>
                )}
               </table>
                  <button  onClick={this.loadPatients.bind(this)}>Load patients</button>

            </div>
        )
    }
}