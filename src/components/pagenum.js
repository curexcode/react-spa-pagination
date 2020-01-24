import React, {Component} from 'react';
import './pagenum.css';
import {NavLink} from 'react-router-dom';


class PageNum extends Component{

    render(){
        return (
            <div className="numbox">
                <a href={this.props.num} onClick={(e) => this.props.getPageNum(this.props.num)}> {this.props.num}</a>
            </div>
        );
    }

}

export default PageNum;