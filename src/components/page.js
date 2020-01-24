import React, { Component } from 'react';
import Box from './Box';
import './page.css';

export default class page extends Component {
    render() {
        return (
            <div id="page">
            {this.props.data.map( data => {
              return <Box data={data}></Box>
            })}
            </div>
        )
    }
}
