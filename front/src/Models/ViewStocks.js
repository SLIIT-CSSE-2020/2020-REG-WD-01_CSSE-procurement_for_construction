import React, { Component } from 'react'
import axios from 'axios';
import SuplierNameFind from '../Models/SupplierNameFind'

export class ViewStocks extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            stocks: [],
            id:String
        }
    }
    

    componentDidMount(){

        console.log(this.props.id)
        
        axios.get('http://localhost:5000/stock-by-item/'+this.props.id).then(
            response => {
                console.log(response)
                this.setState({stocks:response.data.data})
            }
        )
        .catch(error => {
            console.log(error)
        })
        
    }

    //starting of delete stock func
    deleteStock(id){
        if(window.confirm("Are you sure?")){
            console.log("Delete id "+id);
            fetch('http://localhost:5000/stock/'+id,{method:"delete"}).then(response => {
                        console.log(response.json())
                    })
            .catch(err=>{
                console.log(err)
            });
        }else{
            
        }
    }
    //Ending of delete stock func

    componentDidUpdate(){
        this.componentDidMount();
    }

    render() {
        
        const {stocks} = this.state;
        const x = 1;
        return (
            <table className="table table-light">
            <thead>
                <tr>
               <th scope="col">Supplier Name</th>                
               <th scope="col">Qty</th>
               <th scope="col">Unit Price</th>
               <th></th>
               </tr>
           </thead>
            <tbody>
                {
                    
                    stocks.map(stock=>(
                       
                        <tr>
                            
                            <td><SuplierNameFind id={stock.supplierId}/></td>
                            <td>{stock.qty}</td>
                            <td>{stock.uprice}</td>
                            <td>
                                
                                <button className="btn btn-danger btn-sm" onClick={() =>this.deleteStock(stock._id)}>Delete</button> 
                                {/* <button className="btn btn-success btn-sm">Edit</button> */}

                            </td>
                        </tr>
                        ))
                }
           </tbody>
           </table>
        )
    }
}

export default ViewStocks
