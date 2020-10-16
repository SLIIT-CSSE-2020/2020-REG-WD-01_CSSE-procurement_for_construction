import React, { Component } from 'react'
import OrderDataItemsTable from './Models/OrderDataItemsTable'
import axios from 'axios';
export class ViewOrder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            items:[],
            itemId:'',
            qty:0,
            oDate:'',
            dDate:''

        }
    }

    componentDidMount(){

        
        
        axios.get('http://localhost:5000/item/').then(
            response => {
                this.setState({items:response.data.data})
            }
        )
        .catch(error => {
            console.log(error)
        })
        
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }


    submitHandler = e=>{
        e.preventDefault();
        const data = {
            itemId:this.state.itemId,
            qty:this.state.qty,
            oDate:this.state.oDate,
            orderId:this.props.match.params.id,
            supId:"-",
            status:"-",
            dDate:this.state.dDate
        }
        axios.post('http://localhost:5000/order-item/',data).then(res=>{
            console.log(res)
           alert("Done saving");

            
        })
        .catch(err=>{
            console.log(err)
        })   
    }
    render() {
        const {items,itemId,qty,oDate,dDate} = this.state;
        return (
            <div className="row">
               <div className="col-sm-4">
                    <br></br>
                    <form  onSubmit={this.submitHandler}>
                    <label>
                        Select A Item
                        <br></br>
                        <br></br>
                        <select className="form-control px-5" name="itemId"  onChange={this.handleChange} >
                            <option value="0">Select a item</option>
                            {
                                items.map(data=>(
                                <option value={data._id}>{data.name}</option>
                                ))
                            }
                           
                        </select>
                    </label>
                    <br/>
                    <label>
                            Qty:
                            <input  className="form-control" type="text" name="qty" value={qty}  onChange={this.handleChange} />
                    </label>
                            <br></br>
                    <label>
                        Ordered Date:
                        <input type="date" className="form-control px-3" name="oDate" value={oDate}  onChange={this.handleChange} />
                    </label>
                    <br></br>

                    <label>
                        Delivery  Date:
                        <input type="date" className="form-control px-3" name="dDate" value={dDate}  onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary px-3" type="submit">Create a dummy order</button>
                    </form>

                    
                </div>

               <div className="col">
                    <OrderDataItemsTable/>
               </div>

               
            </div>
        )
    }
}

export default ViewOrder
