import React, { Component } from 'react'
import axios from 'axios';

export class NumOfSuppliers extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             id:String,
             count:0
        }
    }

    componentDidUpdate(){
        this.componentDidMount();
    }


    componentDidMount(){
    
        const {id} = this.props;
    
        axios.get(`http://localhost:5000/num-of-suppliers/${id}`).then(
            response => {
                console.log(response.data.data)
                this.setState({count:response.data.data})
            }
        )
        .catch(error => {
            console.log(error)
        })
        
      }
    
    render() {
        const {id} = this.props;

        const {count} = this.state;
        return (
            <div>
              {count}
            </div>
        )
    }
}

export default NumOfSuppliers
