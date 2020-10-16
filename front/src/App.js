import React, { useState } from 'react';
import Tweet from './tweet';

import Nav from './Nav';
import Shop from './Shop';
import Supplier from './Suppliers';

import ItemDetails from './ItemDetails';



import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import testOne from './testOne';
import Item from './items';
import SupplierForm from './Models/SupplierForm';
import EditSupplierFrom from './Models/EditSupplierFrom';
import Orders from './Orders';
import ViewOrder from './ViewOrder';
import AssignASupplier from './AssignASupplier';
function App(){
  return(
    <Router>
    <div className="app">

      <Nav/>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/suppliers" exact component={Supplier}/>
        <Route path="/add-supliers" exact component={SupplierForm}/>
        <Route path="/edit-supliers/:id" exact component={EditSupplierFrom}/>
        <Route path="/items" exact component={Item}/>
        <Route path="/items/:id" component={ItemDetails}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/view-order/:id" component={ViewOrder}/>
        <Route path="/assign-a-supplier/:id" component={AssignASupplier}/>
      </Switch>
      
    </div>

    </Router>
  );
}


const Home = ()=>(
  <div>
    
  </div>
);


export default App;

