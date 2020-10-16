import React, { Component } from 'react'
import axios from 'axios';
import AddStocks from './Models/AddStocks';
import ViewStocks from './Models/ViewStocks';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      itemData:[],
      id:String
    }
  }
  

  
  
  componentDidMount(){
    
    const { id } = this.props.match.params;

    axios.get(`http://localhost:5000/item/${id}`).then(
        response => {
            console.log(response)
            this.setState({itemData:response.data.data})
        }
    )
    .catch(error => {
        console.log(error)
    })
    
  }
  render() {
    const {id} = this.props.match.params;
    const {itemData} = this.state;
    console.log(id)
    console.log("Item data "+itemData.name);
    return (
      <div>
        <div className="p-3 mb-2 bg-dark text-white"><h1>{itemData.name}</h1></div>
        <div className="row">
        <div className="col-sm-4"><AddStocks  id={id}  /></div>
        <div className="col"><ViewStocks id={id}/></div>
      </div>
        
      </div>
    )
  }
}
