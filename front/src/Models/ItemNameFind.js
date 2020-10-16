import React, { Component } from 'react'
import axios from 'axios';
export class ItemNameFind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             item:[]
        }
    }

    componentDidMount(){

        const {id} = this.props;

        
        
        axios.get(`http://localhost:5000/item-a/${id}`).then(
            response => {
                this.setState({item:response.data.data})
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
        const {item} = this.state;
        return (
            <div>
                {item.name}
            </div>
        )
    }
}

export default ItemNameFind
