import React, { Component } from 'react'
import ChildComponent from './childComponent';

class testOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        alert("helloo "+this.state.parentName+" from "+childName);
    }
    
    render() {
        return (
            <div>
                <h1>hi</h1>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default testOne
