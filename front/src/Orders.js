import React, { Component } from 'react'
import CreateDumiOrder from './Models/CreateDumiOrder'
import ViewOrders from './Models/ViewOrders'

export class Orders extends Component {
    render() {
        return (
            <div className="row">
                
                <CreateDumiOrder/>
                <ViewOrders />
            </div>
        )
    }
}

export default Orders
