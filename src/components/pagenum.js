import React, {Component} from 'react';
import './pagenum.css';
import {NavLink} from 'react-router-dom';


class PageNum extends Component{

    render(){
        return (
            <div className="numbox">
                <NavLink  to={String(this.props.num)} onClick={(e) => this.props.getPageNum(this.props.num)}> {this.props.num}</NavLink>
            </div>
        );
    }

}

export default PageNum;