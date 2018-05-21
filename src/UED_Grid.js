import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
//
import  appcss from  './app.css'
import logo from './logo.png'

class UED_Grid extends Component {


    render () {

        const {title, children} = this.props;

        return (
            <div className="row" style={{ overflow:'hidden' }}>


                {   children }


            </div>
        )
    }
}

export default hot(module)(UED_Grid)