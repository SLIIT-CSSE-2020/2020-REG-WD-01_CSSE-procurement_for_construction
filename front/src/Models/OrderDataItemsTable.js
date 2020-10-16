import React, { Component } from 'react'
import OrderDataItemsTableRow from './OrderDataItemsTableRow'

export class OrderDataItemsTable extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <table className="table table-light">
            <thead>
                <tr>
               
                    <th scope="col">ItemName</th>                
                    <th scope="col">Qty</th>
                    <th scope="col">Ordered Date</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Status</th>
                    <th scope="col">Delivery Date</th>
                    <th scope="col"></th>
               </tr>
           </thead>
            <tbody>
              <OrderDataItemsTableRow/>
               
           </tbody>
           </table>
        )
    }
}

export default OrderDataItemsTable
