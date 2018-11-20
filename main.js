import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'



//write the first reducer:
//patients
function patients(state = [], action){
    if(action.type=='FETCH_PATIENT'){
        console.log(action.payload)
        return action.payload
    }
    else if(action.type=='ADD_PATIENT'){
        return [].concat(state, action.payload)
    }
    else if(action.type=='DELETE_PATIENT'){
        //how to delete? filter
        return state.filter(s=>s.id!==action.payload)
    }
   
    else if(action.type=='EDITED_PATIENT'){        
        return state.filter(s=>s.id!==action.payload)
    }
    else
        return state
}
function editedPatient(state={}, action){
    if(action.type=='EDIT_PATIENT')
        return action.payload
    else   
        return state
}
//visits
function visits(state = [], action){
    if(action.type=='FETCH_VISIT'){
        console.log(action.payload)
        return action.payload
    }
    else if(action.type=='ADD_VISIT'){
        return [].concat(state, action.payload)
    }
    else if(action.type=='DELETE_VISIT'){
        //how to delete? filter
        return state.filter(s=>s.id!==action.payload)
    }
   
    else if(action.type=='EDITED_VISIT'){        
        return state.filter(s=>s.id!==action.payload)
    }
    else
        return state
}

function editedVisit(state={}, action){
    if(action.type=='EDIT_VISIT')
        return action.payload
    else    
        return state
}
//labtest
function labTests(state = [], action){
    if(action.type=='FETCH_LABTEST'){
        console.log(action.payload)
        return action.payload
    }
    else if(action.type=='ADD_LABTEST'){
        return [].concat(state, action.payload)
    }
    else if(action.type=='DELETE_LABTEST'){
        //how to delete? filter
        return state.filter(s=>s.id!==action.payload)
    }
   
    else if(action.type=='EDITED_LABTEST'){        
        return state.filter(s=>s.id!==action.payload)
    }
    else
        return state
}

function editedLabTest(state={}, action){
    if(action.type=='EDIT_LABTEST')
        return action.payload
    else    
        return state
}


//login
function authenticate(state = {loggedin: false}, action){
    if(action.type=='AUTHENTICATED')
        return {loggedin: true, access_token: action.payload}
    if(action.type==='LOGOUT')
        return{loggedin:false}
    else
        return state
}
//services
function services(state = [], action){
    if(action.type=='FETCH_SERVICE'){
        console.log(action.payload)
        return action.payload
    }
    else
        return state
}

var centralState = combineReducers({
    authenticate,
    patients, editedPatient,
    visits, editedVisit,
    labTests, editedLabTest,
    services
})

var store = createStore(centralState, applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store}>    
    <App />
</Provider>    
    , document.getElementById('app')

)