import React from 'react'


export default class VisitList extends React.Component{

    loadVisits(){
        var access_token = localStorage.getItem('access_token')  
        fetch(`http://localhost:8080/visits?access_token=${access_token}`)
        .then(res=> res.json())
        .then(visits=>this.props.dispatch({type: 'FETCH_VISIT', payload: visits}))
    }

   onDelete(id){
    var access_token = localStorage.getItem('access_token')  
    console.log('delete '+id)
    if(!confirm('Do you want to delete?')) return

     fetch(`http://localhost:8080/visits/${id}?access_token=${access_token}`,
     { 
     headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldA=='
     },
     method: 'delete'
    })
    .then((result)=>this.props.dispatch({type: 'DELETE_VISIT', payload: id}))
   }

   onEdit(id, patient, problem1, problem2, problem3, problem4){
     this.props.dispatch({type: 'EDIT_VISIT', payload: {id:id, 
                                                        patient: patient,
                                                        problem1: problem1,
                                                        problem2: problem2,
                                                        problem3: problem3,
                                                        problem4: problem4
                                                    }})
   }

    render(){
        return(
            <div>
                <h1>List of Visits</h1>
               
               <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>

                        <th>Patient</th>

                        <th>Problems</th>

                        <th>Date</th>
                        <th>Time</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                
                {this.props.visits.map((s)=>{
                    return(
                    <tbody >
                    <tr>
                        <td >{s.id}</td>
                        <td>
                            <table>
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>name</th>
                                    <th>birthday</th>
                                    <th>gender</th>
                                    <th>address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{s.patient.id}</td>
                                        <td>{s.patient.name}</td>
                                        <td>{s.patient.dateOfBirth}</td>
                                        <td>{s.patient.gender}</td>
                                        <td>{s.patient.address}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </td>
                        <td>+{s.problems[0]}<br/>
                            +{s.problems[1]}<br/>
                            +{s.problems[2]}<br/>
                            +{s.problems[3]}<br/>
                        </td>
                        <td >{s.date}</td>
                        <td >{s.time}</td>
                        <td><button className="glyphicon glyphicon-edit" onClick={this.onEdit.bind(this, s.id, s.patient.id, s.problems[0], s.problems[1],s.problems[2], s.problems[3])}/></td>
                        <td><button className="glyphicon glyphicon-remove" onClick={this.onDelete.bind(this, s.id)}/></td>
                    </tr>
                    </tbody>
                    )
                }
                )}
               </table>
                  <button  onClick={this.loadVisits.bind(this)}>Load visits</button>
            </div>
        )
    }
}