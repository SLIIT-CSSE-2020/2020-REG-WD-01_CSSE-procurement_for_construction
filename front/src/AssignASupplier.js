import React, { Component } from 'react'
import axios from 'axios';
import FindSuppliersForAOrderItem from './Models/FindSuppliersForAOrderItem';
import ItemNameFind from './Models/ItemNameFind';

export class AssignASupplier extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Oitems:[],
        }

        
    }

    componentDidMount(){

        const {id} = this.props.match.params;
        
        axios.get('http://localhost:5000/order-item/'+id).then(
            response => {
                this.setState({Oitems:response.data.data})
                console.log(this.state.Oitems);
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
        const {Oitems} = this.state;
        const {id} = this.props.match.params;
        return (
            <div>
                
        <div className="p-3 mb-2 bg-light text-black"><h1>Assign a supplier to order item</h1></div>

 
                <div className="row">
                    
                    <div className="col">

                        <FindSuppliersForAOrderItem dDate={Oitems.dDate} oDate={Oitems.oDate} idOne={id} ItemId={Oitems.itemId} qty={Oitems.qty} />

                    </div>
                </div>
                
            </div>
        )
    }
}

export default AssignASupplier
