import React, { Component } from 'react'
import axios from 'axios';
export class CreateDumiOrder extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    submitHandler = e=>{
        e.preventDefault();
            const data = {
                cName:"Testing Customer name",
                cEmail:"testemail@gmail.com",
                orderedDate:"2020-10-10"
            }
            axios.post('http://localhost:5000/order-customer/',data).then(res=>{
                console.log(res)
                alert("Done creating order");
                
                
            })
            .catch(err=>{
                console.log(err)
            })  
        
    }
    
    render() {
        return (
            <div className="col-sm-4">
                <br></br>
                <br></br>
                <form  onSubmit={this.submitHandler}>
                    <button type="submit" className="btn btn-primary">Create Sample Order</button>
                </form>
            </div>
        )
    }
}

export default CreateDumiOrder
