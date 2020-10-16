import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';



function SupplierTable(props){

  

  
 
  return(
                <tr >
                    <th scope="row">{props.name}</th>
                    <td>{props.tel}</td>
                    <td>{props.email}</td>
                    <td>{props.address}</td>
                    <td><button  onClick={() => props.greetHandler(props.id)} className="btn btn-danger">Delete</button> 
                      <Link to={`/edit-supliers/${props.id}`}> <button className="btn btn-success">Edit</button></Link>
                    </td>
                </tr>   
  );
}


export default SupplierTable;
