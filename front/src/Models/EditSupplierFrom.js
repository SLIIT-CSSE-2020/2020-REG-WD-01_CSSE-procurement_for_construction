import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router'
import SupplierTable from './SupplierTable';
import props from 'prop-types';

class SupplierForm extends Component {
    constructor(props) {
        
        super(props)
       
    
        this.state = {
             name:'',
             tel:'',
             email:'',
             address:'',
             _id:this.props.match.params.id
        }

        this.err = {
            mess:''
        }
        
    }
    

    componentDidMount(){
        const { id } = this.props.match.params;

        axios.get('http://localhost:5000/supplier/'+id).then(
            response => {
                console.log(response.data)
                this.setState(response.data.data)
                
            }
        )
        .catch(error => {
            console.log(error)
        })
        
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }

    submitHandler = e=>{
        e.preventDefault();
        console.log(this.state)

        const { id } = this.props.match.params;

        axios.put('http://localhost:5000/supplier/'+id,this.state).then(res=>{
            console.log(res)
           alert("Done saving");

            
        })
        .catch(err=>{
            console.log(err)
        })   
    }

    

    render() {

        

        const {name,tel,email,address} = this.state;
        const {mess} = this.err;
        return (
            <div>

                <br></br>

            <div className="row justify-content-center">
                    <div className="col-3">

                        <div class="form-group border border-primary rounded p-0">

                <div className="p-3 m-0 mb-2 bg-primary text-white"><h3>Edit Supplier</h3></div>
                
                
                <div  class="form-group">
                    <form onSubmit={this.submitHandler}>
                            <label className="py-2">
                            Name:
                            <input  className="form-control px-5" type="text" name="name" value={name} onChange={this.handleChange} />
                            </label>
                            <br></br>

                            <label className="py-2">
                            Telephone Number:
                            <input  className="form-control px-5" type="text" name="tel" value={tel} onChange={this.handleChange} />
                            </label>
                            <br></br>

                            <label className="py-2">
                            Email:
                            <input  className="form-control px-5" type="text" name="email" value={email} onChange={this.handleChange} />
                            </label>
                            <br></br>

                            <label className="py-2">
                            Address:
                            <input  className="form-control px-5" type="text" name="address" value={address} onChange={this.handleChange} />
                            </label>
                            <br></br>

                            <div className="text-danger">{mess}</div>
                            
                            <div className="mx-4 my-3">
                            <input type="submit" className="btn btn-primary btn-block" value="Save" />
                            </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default SupplierForm;
