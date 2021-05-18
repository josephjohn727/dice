import React, { Component } from 'react'
import './Die.css'

class Die extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            // <div>
                <i className={`Die fas fa-dice-${this.props.face} ${this.props.isRolling && 'shaking'}`} />
                
            // </div>
        );
    }
}

export default Die;