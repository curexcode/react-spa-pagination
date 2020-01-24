import React, {Component} from 'react';
import './Box.css';

class Box extends Component{

    render(){
        return(
            <div className="box">
                <h1>{this.props.data}</h1>
            </div>
        )
    }

}

export default Box;