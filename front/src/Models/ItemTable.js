import React from 'react'
import {Link } from 'react-router-dom';
import NumOfSuppliers from './NumOfSuppliers';

export default function ItemTable(props) {

    

    return (
        <tr >
                    <th scope="row">{props.name}</th>
                    <th scope="row"><NumOfSuppliers id={props.id}/></th>
                    <td><Link to={`/items/${props.id}`}><button className="btn btn-primary">View</button>
                    </Link> <button  onClick={() => props.deleteHandler(props.id)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr> 
    )
}
