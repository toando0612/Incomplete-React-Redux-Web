import React from 'react'

export default class ServiceList extends React.Component{
    loadServices(){
        var access_token = localStorage.getItem('access_token')  
        fetch(`http://localhost:8080/medicalServices?access_token=${access_token}`)
        .catch(err=>{
            console.log(err)
        })
        .then(res=> res.json())
        .then(services=>this.props.dispatch({type: 'FETCH_SERVICE', payload: services}))
    }
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    {this.props.services.map((s)=>
                        <tbody>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                        </tbody>
                        )}
                </table>
                <button  onClick={this.loadServices.bind(this)}>Show Services</button>
            </div>
        )
    }
}