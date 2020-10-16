import React, { useState,useEffect } from 'react';

import {Link} from 'react-router-dom';

function Shop(){

  const [items,setItems] = useState([]);


  useEffect(()=>{
    fetchItems();
  },[])

  const fetchItems = async ()=>{
    const data = await fetch(
      'https://my-json-server.typicode.com/typicode/demo/posts'
    );


    const items = await data.json();
    console.log(items);
    setItems(items);


  };

 
  return(
    <div className="app">

      <h1>This is Shop</h1>

      {
        items.map(item =>(

          <div>
              <h1 key={item.id}>{item.id}</h1>
              <Link to={`/shop/${item.id}`}><h1>{item.title}</h1></Link>
          </div>
         
        ))
      }
      
    </div>
  );
}


export default Shop;
