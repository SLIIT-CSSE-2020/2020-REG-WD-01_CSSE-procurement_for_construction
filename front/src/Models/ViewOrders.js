import React, { Component } from 'react'
import CustomerOrderTableData from './CustomerOrderTableData';
export class ViewOrders extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }


    
    
    render() {
        return (
            <div className="col">
                <table className="table table-light">
            <thead>
                <tr>
               
                    <th scope="col">customer Name</th>                
                    <th scope="col">Email</th>
                    <th scope="col">Ordered Date</th>
                    <th scope="col">No of items</th>
                    <th scope="col"></th>
                    <th></th>
               </tr>
           </thead>
            <tbody>
               <CustomerOrderTableData/>
               
           </tbody>
           </table>
            </div>
        )
    }
}

export default ViewOrders
