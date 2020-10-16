import React, { useState } from 'react';
import {Link } from 'react-router-dom';

function Nav(){

    const navStyle = {
        color:'white'
    }

  return(
   /*  <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            

            <Link style={navStyle} to="/suppliers">
                <li >Suppliers</li>
            </Link>
            <Link style={navStyle} to="/add-supliers">
                <li >Add Suppliers</li>
            </Link>

            <Link style={navStyle} to="/orders">
                <li >Orders</li>
            </Link>

            <Link style={navStyle} to="/items">
                <li >Items</li>
            </Link>


        </ul>
    </nav> */

    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
				<a href="" class="navbar-brand" >Samanmal</a>
				<button class="navbar-toggler" data-toggle="collapse" data-target="#bdrop"><span class="navbar-toggler-icon"></span></button>
				<div class="collapse navbar-collapse justify-content-center" id="bdrop">
					<ul class="navbar-nav">
					<Link style={navStyle} to="/suppliers"><li class="nav-item "><a href="" class="nav-link">Suppliers</a></li></Link>
					<Link style={navStyle} to="/add-supliers"><li class="nav-item"><a href="" class="nav-link">Add Suppliers</a></li></Link>
					<Link style={navStyle} to="/orders"><li class="nav-item"><a href="" class="nav-link ">Orders</a></li></Link>
					<Link style={navStyle} to="/items"><li class="nav-item"><a href="" class="nav-link">Items</a></li></Link>
				</ul>
				</div>
				
			</nav>

  );
}
export default Nav;