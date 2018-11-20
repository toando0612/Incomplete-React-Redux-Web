
import React from 'react'
import {Checkbox, CheckboxGroup} from 'react-checkbox';
export default class LabTestForm extends React.Component{

    constructor(){
        super()
        this.state = {id:0,visit:0,
            sv1:false, sv2:false,sv3:false, sv4:false,sv5:false, sv6:false,sv7:false, sv8:false,sv9:false, sv10:false,
            sv11:false, sv12:false,sv13:false, sv14:false,sv15:false, sv16:false,sv17:false, sv18:false,sv19:false, sv20:false,
            sv21:false, sv22:false,sv23:false, sv24:false,
            sv1json:0, sv2json:0,sv3json:0, sv4json:0,sv5json:0, sv6json:0,sv7json:0, sv8json:0,sv9json:0, sv10json:0,
            sv11json:0, sv12json:0,sv13json:0, sv14json:0,sv15json:0, sv16json:0,sv17json:0, sv18json:0,sv19json:0, sv20json:0,
            sv21json:0, sv22json:0,sv23json:0, sv24json:0}
    }

    // componentWillReceiveProps(newProps){
    //     this.setState({id: newProps.editedVisit.id,
    //         problems: newProps.editedVisit.problems,
    //         patient: newProps.editedVisit.patient
    //     })
    // }
    handleChangeCheck(){
        this.setState({name: !this.state.checked})
        for(var i=1; i<25;i++){
            dyV = eval(`sv${i}`);
            dyVjson = eval(`sv${i}json`);
            if(this.state.dyV == true && this.state.dyVjson == 0) this.setState({dyVjson:i})
            if(this.state.dyV == false && this.state.dyVjson !== 0) this.setState({dyVjson:0})
        }
        // if(this.state.sv1 == true && this.state.sv1json == 0) this.setState({sv1json:1})
        // if(this.state.sv2 == true && this.state.sv2json == 0) this.setState({sv2json:2})
        // if(this.state.sv3 == true && this.state.sv3json == 0) this.setState({sv3json:3})
        // if(this.state.sv4 == true && this.state.sv4json == 0) this.setState({sv4json:4})
        // if(this.state.sv5 == true && this.state.sv5json == 0) this.setState({sv5json:5})
        // if(this.state.sv6 == true && this.state.sv6json == 0) this.setState({sv6json:6})
        // if(this.state.sv7 == true && this.state.sv7json == 0) this.setState({sv7json:7})
        // if(this.state.sv8 == true && this.state.sv8json == 0) this.setState({sv8json:8})
        // if(this.state.sv9 == true && this.state.sv9json == 0) this.setState({sv9json:9})
        // if(this.state.sv10 == true && this.state.sv10json == 0) this.setState({sv10json:10})
        // if(this.state.sv11 == true && this.state.sv11json == 0) this.setState({sv11json:11})
        // if(this.state.sv12 == true && this.state.sv12json == 0) this.setState({sv12json:12})
        // if(this.state.sv13 == true && this.state.sv13json == 0) this.setState({sv13json:13})
        // if(this.state.sv14 == true && this.state.sv14json == 0) this.setState({sv14json:14})
        // if(this.state.sv15 == true && this.state.sv15json == 0) this.setState({sv15json:15})
        // if(this.state.sv16 == true && this.state.sv16json == 0) this.setState({sv16json:16})
        // if(this.state.sv17 == true && this.state.sv17json == 0) this.setState({sv17json:17})
        // if(this.state.sv18 == true && this.state.sv18json == 0) this.setState({sv18json:18})
        // if(this.state.sv19 == true && this.state.sv19json == 0) this.setState({sv19json:19})
        // if(this.state.sv20 == true && this.state.sv20json == 0) this.setState({sv20json:20})
        // if(this.state.sv21 == true && this.state.sv21json == 0) this.setState({sv21json:21})
        // if(this.state.sv22 == true && this.state.sv22json == 0) this.setState({sv22json:22})
        // if(this.state.sv23 == true && this.state.sv23json == 0) this.setState({sv23json:23})
        // if(this.state.sv24 == true && this.state.sv24json == 0) this.setState({sv24json:24})

        // if(this.state.sv1 == false && this.state.sv1json !== 0) this.setState({sv1json:0})
        // if(this.state.sv2== false && this.state.sv2json !== 0) this.setState({sv2json:0})
        // if(this.state.sv3== false && this.state.sv3json !== 0) this.setState({sv3json:0})
        // if(this.state.sv4== false && this.state.sv4json !== 0) this.setState({sv4json:0})
        // if(this.state.sv5== false && this.state.sv5json !== 0) this.setState({sv5json:0})
        // if(this.state.sv6== false && this.state.sv6json !== 0) this.setState({sv6json:0})
        // if(this.state.sv7== false && this.state.sv7json !== 0) this.setState({sv7json:0})
        // if(this.state.sv8== false && this.state.sv8json !== 0) this.setState({sv8json:0})
        // if(this.state.sv9== false && this.state.sv9json !== 0) this.setState({sv9json:0})
        // if(this.state.sv10== false && this.state.sv10json !== 0) this.setState({sv10json:0})
        // if(this.state.sv11== false && this.state.sv11json !== 0) this.setState({sv11json:0})
        // if(this.state.sv12== false && this.state.sv12json !== 0) this.setState({sv12json:0})
        // if(this.state.sv13== false && this.state.sv13json !== 0) this.setState({sv13json:0})
        // if(this.state.sv14== false && this.state.sv14json !== 0) this.setState({sv14json:0})
        // if(this.state.sv15== false && this.state.sv15json !== 0) this.setState({sv15json:0})
        // if(this.state.sv16== false && this.state.sv16json !== 0) this.setState({sv16json:0})
        // if(this.state.sv17== false && this.state.sv17json !== 0) this.setState({sv17json:0})
        // if(this.state.sv18== false && this.state.sv18json !== 0) this.setState({sv18json:0})
        // if(this.state.sv19== false && this.state.sv19json !== 0) this.setState({sv19json:0})
        // if(this.state.sv20== false && this.state.sv20json !== 0) this.setState({sv20json:0})
        // if(this.state.sv21== false && this.state.sv21json !== 0) this.setState({sv21json:0})
        // if(this.state.sv22== false && this.state.sv22json !== 0) this.setState({sv22json:0})
        // if(this.state.sv23== false && this.state.sv23json !== 0) this.setState({sv23json:0})
        // if(this.state.sv24== false && this.state.sv24json !== 0) this.setState({sv24json:0})


    }
    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    addLabtest(){
        //POST to webapi
        var access_token = localStorage.getItem('access_token')  //get access_token
        if(this.state.id===0){
            fetch(`http://localhost:8080/labTests?access_token=${access_token}`, {
                headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldA=='
                },
                method: 'post', 
                body: JSON.stringify({visit:{id:this.state.visit}, medicalServices: [{id:this.state.sv1json},{id:this.state.sv2json},{id:this.state.sv3json},
                    {id:this.state.sv4json},{id:this.state.sv5json},{id:this.state.sv6json},{id:this.state.sv7json},{id:this.state.sv8json},{id:this.state.sv9json},
                    {id:this.state.sv10json},{id:this.state.sv11json},{id:this.state.sv12json},{id:this.state.sv13json},{id:this.state.sv14json},{id:this.state.sv15json},
                    {id:this.state.sv16json},{id:this.state.sv17json},{id:this.state.sv18json},{id:this.state.sv19json},{id:this.state.sv20json},{id:this.state.sv21json},
                    {id:this.state.sv22json},{id:this.state.sv23json},{id:this.state.sv24json}] })
            })
            .then((res)=>{
                return res.json()
            })
            .then((labtest)=>{
                this.props.dispatch({type:'ADD_LABTEST', payload: labtest})
            })

        }
        else{
            fetch(`http://localhost:8080/labTests?access_token=${access_token}`, {
                headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic Y2xpZW50LWlkOnNlY3JldA=='
                },
                method: 'put', 
                body: JSON.stringify({id:this.state.id, visit:{id:this.state.visit}, medicalServices: [{id:this.state.sv1},{id:this.state.sv2}]})
            })
            .then((res)=>{
                return res.json()
            })
            .then(()=>this.props.dispatch({type: 'EDITED_PATIENT', payload: this.state.id}))
        }
    }

    clear(){
        this.setState({id:0,visit:0, sv1:0,sv2:0})
    }

    render(){
        return(
            <div className='container'>
            <h1>Order Labtest</h1>
                <form action="">
                    <div className='form-group'>
                        Id<input type="text" name="id" className='form-control' value={this.state.id} onChange={this.handleChange.bind(this)}/>
                        Visit<input type="text" name="visit" className='form-control' value={this.state.visit} onChange={this.handleChange.bind(this)}/>
                        Please choose Services:<br/>
                            <label htmlFor="showMap">
                            <div className="col-sm-6">
                            Blood Tests
                                <input type="checkbox" className='form-control' name="sv1" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv1}  /> 
                            Urine Tests
                                <input type="checkbox" className='form-control' name="sv2" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv2}/>
                            -Synovial Fluid
                                <input type="checkbox" className='form-control' name="sv3" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv3}/>
                            Cerebrospinal Fluid
                                <input type="checkbox" className='form-control'  name="sv4" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv4}  /> 
                            X-ray
                                <input type="checkbox" className='form-control' name="sv5" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv5}/>
                            Magnetic Resonance Imaging (MRI)
                                <input type="checkbox" className='form-control' name="sv6" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv6}/>
                            Computed Tomography (CT)
                                <input type="checkbox" className='form-control' name="sv7" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv7}  /> 
                            Ultrasound
                                <input type="checkbox" className='form-control' name="sv8" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv8}/>
                            Positron Emissio Tomography (PET)
                                <input type="checkbox" className='form-control' name="sv9" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv9}/>
                            Laryngoscopy
                                <input type="checkbox" className='form-control' name="sv10" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv10}  /> 
                                Bronchoscopy
                                <input type="checkbox" className='form-control' name="sv11" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv11}/>
                                Esophagoscopy
                                <input type="checkbox" className='form-control' name="sv12" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv12}/>
                            </div>
                            <div className="col-sm-6">
                                Gastroscopy
                                <input type="checkbox" className='form-control' name="sv13" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv13}  /> 
                                Upper Gastrointestinal Endoscopy
                                <input type="checkbox" className='form-control' name="sv14" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv14}/>
                                Coloscopy
                                <input type="checkbox" className='form-control' name="sv15" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv15}/>
                                Cystoscopy
                                <input type="checkbox" className='form-control' name="sv16" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv16}/>
                                Hysteroscopy
                                <input type="checkbox" className='form-control' name="sv17" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv17}/>
                                Arthroscopy
                                <input type="checkbox" className='form-control' name="sv18" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv18}/>
                                Laparoscopy
                                <input type="checkbox" className='form-control' name="sv19" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv19}/>
                                Mediastinoscopy
                                <input type="checkbox" className='form-control' name="sv20" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv20}/>
                                Thoracoscopy
                                <input type="checkbox" className='form-control' name="sv21" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv21}/>
                                Electrocardiography (ECG)
                                <input type="checkbox" className='form-control' name="sv22" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv22}/>
                                Electroencephalography (EEG)
                                <input type="checkbox" className='form-control' name="sv23" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv23}/>
                                Pulmonary Function Tests
                                <input type="checkbox" className='form-control' name="sv24" onChange={this.handleChangeCheck.bind(this)} defaultChecked={this.state.sv24}/>
                            </div>
                            </label>                            
                    <br/>
                        <label>
                            <button className='btn btn-outline-dark' style={{marginRight:'10px'}} onClick={this.addLabtest.bind(this)}>Save</button>
                            <button className='btn btn-outline-dark'  onClick={this.clear.bind(this)}>Clear</button> <br/>
                            <a href="labtest">Next</a>
                            <button type='button' className="fa fa-arrow-right" style={{fontsize:'48px'}}/>
                        </label>
                    </div>

                </form>


            </div>  
            
        )
    }
}