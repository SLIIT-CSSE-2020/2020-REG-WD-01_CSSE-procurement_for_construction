import React, { Component } from 'react'
import axios from 'axios';

export default class AddItems extends Component {



    constructor(props) {
        super(props)
    
        this.state = {
             itemName:''
        }
    }

    submitHandler = e=>{
        e.preventDefault();

        if(this.state.itemName == ""){
            alert("Enter a item Name")
        }
        else{

        

            const data = {
                name:this.state.itemName
            }
            axios.post('http://localhost:5000/item',data).then(res=>{
                console.log(res)
                this.setState({itemName:""})
                
            })
            .catch(err=>{
                console.log(err)
            })  
        } 
    }
    
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})      
    }

    render() {
        const {itemName} = this.state;
        return (
            <div className="col-sm-4">
                <form onSubmit={this.submitHandler}>
                        
                        <label for="qty">Item Name</label>
                        <div className='p-5'>
                        <input type="text"  name="itemName" value={itemName} className="form-control"  onChange={this.handleChange} ></input>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary">Add Stocks</button>
                    </form>
            </div>
        )
    }
}
