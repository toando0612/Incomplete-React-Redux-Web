import React from 'react'


export default class LabtestList extends React.Component{

    loadVisits(){
        fetch('http://localhost:8080/labTests')
        .then(res=> res.json())
        .then(labtest=>this.props.dispatch({type: 'FETCH_LABTEST', payload: labtest}))
    }

   onDelete(id){
    console.log('delete '+id)

    if(!confirm('Do you want to delete?')) return

     fetch('http://localhost:8080/labTests/'+id, 
     {
         method: 'delete'
     })
     .then((result)=>this.props.dispatch({type: 'DELETE_LABTEST', payload: id}))
     .then((res)=>{
        return res.json()})
    .then(labtest=>this.props.dispatch({type: 'FETCH_LABTEST', payload: labtest}))
   }

   onEdit(id, visit, patient){
     this.props.dispatch({type: 'EDIT_VISIT', payload: {id:id ,problems: problems, patient:{id:patient}}})
   }

    render(){
        return(
            <div>
                <h2>Services</h2>
               
                  <button  onClick={this.loadVisits.bind(this)}>Load Services</button>
            </div>
        )
    }
}