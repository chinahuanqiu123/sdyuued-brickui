import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
//
import  appcss from  './app.css'
import logo from './logo.png'

class NewsItem extends Component {


    render () {





        return (



                <li style={ this.props.style_font_size }><a href="#"><span>欢迎使用ued-flyui，标题字数控制请设置置标</span><span style={ this.props.style_time_float }>2015-09-28</span></a></li>


        )
    }
}

export default hot(module)(NewsItem)