import React, { Component } from 'react'
import axios from 'axios';
import ItemTable from './Models/ItemTable';
import AddItems from './Models/AddItems';

class items extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            itemData: []
        }

        this.deleteItem = this.deleteItem.bind(this);
    }
    

    deleteItem(id){
        if(window.confirm("Are you sure?")){
            console.log("Delete id "+id);
            fetch('http://localhost:5000/item/'+id,{method:"delete"}).then(response => {
                        console.log(response.json())
                    })
            .catch(err=>{
                console.log(err)
            });
        }else{
            
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/item').then(
            response => {
                console.log(response.data.data)
                this.setState({itemData:response.data.data})
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
        const {itemData} = this.state;
        return (
            <div className="row">

                <AddItems />

                <div className="col">
                <table className="table table-dark">
             <thead>
                 <tr>
                <th scope="col" >Item</th>
                <th scope="col">Number of suppliers</th>
                <th scope="col">View</th>
                </tr>
            </thead>
             <tbody>
             {itemData.map(ite=>(
                    <ItemTable name={ite.name} num={0} id={ite._id} deleteHandler={this.deleteItem} />
                ))}
            </tbody>
            </table>
                </div>
            </div>
        )
    }
}

export default items
