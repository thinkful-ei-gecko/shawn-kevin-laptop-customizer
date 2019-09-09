import React, { Component } from 'react'

import Options from './Options';



export default class Customize extends Component {
    render() {


        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            <Options 
              selected={this.props.selected} 
              features={this.props.features}
              handleUpdate={this.props.handleUpdate}/>
          </form>
        )
    }
}
