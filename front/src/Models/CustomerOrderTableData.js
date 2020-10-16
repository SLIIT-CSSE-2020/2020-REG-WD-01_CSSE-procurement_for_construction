import React, { Component } from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom';
export class CustomerOrderTableData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            orderCustomer:[]
        }
    }


    //starting of delete stock func
    deleteCorder(id){
        if(window.confirm("Are you sure?")){
            console.log("Delete id "+id);
            fetch('http://localhost:5000/order-customer/'+id,{method:"delete"}).then(response => {
                        console.log(response.json())
                    })
            .catch(err=>{
                console.log(err)
            });
        }else{
            
        }
    }
    //Ending of delete stock func

    componentDidMount(){
        axios.get('http://localhost:5000/order-customer').then(
            response => {
                console.log(response.data.data)
                this.setState({orderCustomer:response.data.data})
            }
        )
        .catch(error => {
            console.log(error)
        })
        
    }

    componentDidUpdate(){
        this.componentDidMount();
    }
    
    render() {
        const {orderCustomer} = this.state;
        return (

                orderCustomer.map(oc=>(
                    <tr>
                        <td>{oc.cName}</td>
                        <td>{oc.cEmail}</td>
                        <td>{oc.orderedDate}</td>
                        <td></td>
                        <td>
                                <Link to={`/view-order/${oc._id}`}><button  className="btn btn-primary btn-sm   ">View Order</button></Link>
                                 <button className="btn btn-danger btn-sm" onClick={()=>this.deleteCorder(oc._id)}>Delete</button>
                           
                        </td>
                    </tr>
                ))
                
        )
    }
}

export default CustomerOrderTableData
