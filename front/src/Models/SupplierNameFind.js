import React, { Component } from 'react'
import axios from 'axios';

class SupplierNameFind extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             supplierName:''
        }
    }
    

    componentDidMount(){

        console.log(this.props.id)
        if(this.props.id == "-"){

        }else{
            axios.get('http://localhost:5000/supplier/'+this.props.id).then(
            response => {
                console.log(response)
                this.setState({supplierName:response.data.data.name})
            }
            )
            .catch(error => {
                console.log(error)
            })
        }
        
        
    }

    render() {
        return (
            <div>
                {this.state.supplierName}
            </div>
        )
    }
}

export default SupplierNameFind
