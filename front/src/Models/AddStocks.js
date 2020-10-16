import React, { Component } from 'react'
import axios from 'axios';

class AddStocks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            suppliers: [],
            qty:0,
            supplierId:'',
            uprice:0,
            itemId:''
        }
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})      
    }

    submitHandler = e=>{
        e.preventDefault();
        const {id} = this.props;
        console.log(id);
        console.log(this.state)

        if(this.state.supplierId == 0){
            alert("Select a Supplier")
        }
        else if(this.state.qty == 0){
            alert("Enter  qty")
        }else if(this.state.uprice == 0){
            alert("Enter  unit price")
        }
        else{

        

            const data = {
                qty:this.state.qty,
                supplierId:this.state.supplierId,
                uprice:this.state.uprice,
                itemId:id
            }
            axios.post('http://localhost:5000/stock/',data).then(res=>{
                console.log(res)
            alert("Done saving");
                this.setState({qty:0})
                this.setState({uprice:0})
                this.setState({supplierId:0})
                
            })
            .catch(err=>{
                console.log(err)
            })  
        } 
    }
    
    componentDidUpdate(){
        this.componentDidMount();
    }

    componentDidMount(){
        axios.get('http://localhost:5000/supplier').then(
            response => {
                console.log(response)
                this.setState({suppliers:response.data.data})
            }
        )
        .catch(error => {
            console.log(error)
        })
        
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }
    render() {

        const {suppliers,qty,uprice,supplierId} = this.state;
        // const {name,tel,email,address} = this.state;
        return (
                <div> 
                    <form onSubmit={this.submitHandler}>
                        <p>Select a Supplier</p>
                        <div className="px-5">
                        <select className="form-control" value={supplierId} name="supplierId" onChange={this.handleChange}>
                            <option value="0"  className="form-control">Select a supplier</option>
                            {suppliers.map(sup=>(
                                <option value={sup._id} className="form-control">{sup.name}</option>
                                ))}
                        </select>
                        </div>
                        <label for="qty">Qty:</label>
                        <div className="px-5">
                        <input type="number" value={qty} name="qty" className="form-control "  onChange={this.handleChange} ></input>
                        </div>

                        <label for="uPrice">Unit Price:</label>
                        <div className="px-5">
                        <input type="number" className="form-control" id="uprice" name="uprice"  value={uprice} onChange={this.handleChange}></input>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary">Add Stocks</button>
                    </form>
                </div>


                
                
            
        )
    }
}

export default AddStocks
