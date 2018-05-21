import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
//
import  appcss from  './app.css'
import logo from './logo.png'

class Col extends Component {


    render () {
         var Col_width={

             width:this.props.lg

         }
        const {title, children} = this.props;

        return (
            <div style={{ width:(Col_width.width/12*100)+"%" ,float:'left'}}>


                {   children }


            </div>
        )
    }
}

export default hot(module)(Col)