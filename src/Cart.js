import React, { Component } from 'react';
import Cartitem from './Cartitem';
import Total from './Total';




export default class Cart extends Component {   
    render() {     
            return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <Cartitem selected={this.props.selected}/>
            <Total selected={this.props.selected}/>
          </section>
        )
    }
}
