import React, { Component } from 'react'
import axios from 'axios';
import SuplierNameFind from '../Models/SupplierNameFind'
import ItemNameFind from './ItemNameFind';

export class FindSuppliersForAOrderItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            stocks: [],
            
        }

    }

    componentDidMount(){

        console.log(this.props.ItemId)
        
        axios.get('http://localhost:5000/stock-by-item/'+this.props.ItemId).then(
            response => {
                console.log(response)
                this.setState({stocks:response.data.data})
            }
        )
        .catch(error => {
            console.log(error)
        })
        
    }
    componentDidUpdate(){
        this.componentDidMount();
    }

    submitHandler = (supI)=>{
        const {idOne,ItemId,qty,oDate,dDate} = this.props;
        const data = {
            itemId:ItemId,
            qty:qty,
            oDate:oDate,
            orderId:idOne,
            supId:supI,
            status:'S ASSIGNED',
            dDate:dDate
        }

        axios.put('http://localhost:5000/order-item/'+idOne,data).then(res=>{
            console.log(res)
            alert("Done saving");
           
        })
        .catch(err=>{
            console.log(err)
        })

       
    
        
    }


    render() {
        const {stocks} = this.state;
        const {idOne} = this.props;
        return (
            <div>
                
                
                
                <table className="table table-light">
            <thead>
                <tr>
               
               <th scope="col">Supplier Name</th>                
               <th scope="col">Item</th>                
               <th scope="col">Qty</th>
               <th scope="col">Unit Price</th>
               <th>Assign Supplier</th>
               </tr>
           </thead>
            <tbody>
            {
                    
                    stocks.map(stock=>(
                       
                        <tr>
                            
                            <td><SuplierNameFind id={stock.supplierId}/></td>
                            <td><ItemNameFind id={stock.itemId}/></td>
                            <td>{stock.qty}</td>
                            <td>{stock.uprice}</td>
                            <td><buton className="btn btn-primary" onClick={()=>this.submitHandler(stock.supplierId)}>Assign</buton></td>
                            
                        </tr>
                        ))
                }
           </tbody>
           </table>
            </div>
        )
    }
}

export default FindSuppliersForAOrderItem
