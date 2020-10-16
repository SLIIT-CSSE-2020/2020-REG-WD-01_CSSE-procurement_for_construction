import React, { useState,useEffect,Component } from 'react';
import {Link} from 'react-router-dom';
import SupplierTable from './Models/SupplierTable'
import axios from 'axios';
import SupplierForm from './Models/SupplierForm';

class Suppliers extends Component {

    
    constructor(props) {
        super(props)
    
        this.state = {
            suppliers: []
        }

        this.deleteSupplier = this.deleteSupplier.bind(this);
        this.render = this.render.bind(this);
        this.addSupplier = this.addSupplier.bind(this);
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

    componentDidUpdate(){
        this.componentDidMount();
    }
    deleteSupplier(id){
        if(window.confirm("Are you sure?")){
            console.log("Delete id "+id);
            fetch('http://localhost:5000/supplier/'+id,{method:"delete"}).then(response => {
                        console.log(response.json())
                    })
            .catch(err=>{
                console.log(err)
            });
        }else{
            
        }
    }


    addSupplier(data){
        console.log(data)
    }

    render() 
    {


        const {suppliers} = this.state;
        return (

            
            <div>
                <table className="table table-light">
             <thead>
                 <tr>
                <th scope="col" >Name</th>
                <th scope="col">Tel</th>                
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                </tr>
            </thead>
             <tbody>
             {suppliers.map(sup=>(
                    <SupplierTable greetHandler={this.deleteSupplier} id={sup._id} name={sup.name} tel={sup.tel} email={sup.email}  address={sup.address}/>
                ))}
            </tbody>
            </table>
            </div>
        )
    }
}

export default Suppliers;
