import React, { Component } from 'react'
import axios from 'axios';
import ItemNameFind from './ItemNameFind';
import {Link } from 'react-router-dom';
import SupplierNameFind from './SupplierNameFind';

export class OrderDataItemsTableRow extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             orderItems:[]
        }
    }
    componentDidMount(){

        
        
        axios.get('http://localhost:5000/order-item/').then(
            response => {
                this.setState({orderItems:response.data.data})
            }
        )
        .catch(error => {
            console.log(error)
        })
        
    }

    componentDidUpdate(){
        this.componentDidMount();
    }


    //starting of delete stock func
    delete(id){
        if(window.confirm("Are you sure?")){
            console.log("Delete id "+id);
            fetch('http://localhost:5000/order-item/'+id,{method:"delete"}).then(response => {
                        console.log(response.json())
                    })
            .catch(err=>{
                console.log(err)
            });
        }else{
            
        }
    }
    //Ending of delete stock func
    render() {
        const {orderItems} = this.state;
        return (


            orderItems.map(data=>(
                <tr>
                    <td>
                        <ItemNameFind id={data.itemId}/>
                    </td>
                    <td>{data.qty}</td>
                    <td>{data.oDate}</td>
                    <td><SupplierNameFind id={data.supId} /></td>
                    <td>{data.status}</td>
                    <td>{data.dDate}</td>
                    <td><Link to={`/assign-a-supplier/${data._id}`}><button className="btn btn-sm btn-success">Assign a Supplier</button></Link> <button className="btn btn-sm btn-danger" onClick={() =>this.delete(data._id)}>Delete</button></td>
                </tr>
            ))
            
        )
    }
}

export default OrderDataItemsTableRow
