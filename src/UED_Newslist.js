import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
//
import  appcss from  './app.css'
import logo from './logo.png'

class UED_Newslist extends Component {


    render () {
        var datelocate={
        float:this.props.datelocate


    }
    var fontSize={
            fontSize:this.props.fontSize
    }


        const childrenWithProps = React.Children.map(this.props.children, child => React.cloneElement(child,
            {
                style_time_float: datelocate,
                style_font_size:fontSize,

            }
        ));

        return (
            <div  style={{width:this.props.width}}>


                <ul className="item"  style={{width:this.props.width}}  >

                    {

                        childrenWithProps
                    }

                </ul>



            </div>
        )
    }
}

export default hot(module)(UED_Newslist)