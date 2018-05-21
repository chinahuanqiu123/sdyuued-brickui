import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Carousel } from 'antd';


class UED_Carousel extends Component {


    render () {

        const {children,effect,dots,speed ,infinite } = this.props;

        return (

            <Carousel  autoplay  effect={effect}   dots={true} infinite={true} speed={500}>
                { children }
            </Carousel>


        )
    }
}

export default hot(module)(UED_Carousel)