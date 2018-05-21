import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
//
import UED_Grid from './UED_Grid'
import 'antd/dist/antd.css';
import './app.css'

import logo from './logo.png'
import UED_Newslist from './UED_Newslist'
import NewsItem from './NewsItem'
import Col from './Col'
import UED_Carousel from './UED_Carousel'
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">欢迎使用UED—flyui,请在"header"标签下开始你的创作,修改代码后静等片刻程序将自动编译代码并无刷新更新浏览器，进行组件局部热替换</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>


                <UED_Newslist datelocate="right" fontSize={16} width={500}>

                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>

                </UED_Newslist>

                <UED_Newslist datelocate="left" fontSize={14} width={450}>

                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>

                </UED_Newslist>
                <UED_Grid>
                    <Col lg={3}>12等分，lg属性里填写所占份额，此处占3等份</Col>
                    <Col lg={3}>12等分，lg属性里填写所占份额，此处占4等分</Col>
                    <Col lg={3}>
                        <UED_Grid>

                            <Col lg={6}>剩余部分再次进行等份，此处占6/12,</Col>
                            <Col lg={6}>同理，6等份</Col>

                        </UED_Grid>

                    </Col>
                    <Col lg={3}>

                        <UED_Carousel  effect="fade" >

                            <div><img src="http://www.sdyu.edu.cn/tplb/201803/W020180426569847305123.jpg"  width="100%" /></div>
                            <div><img src="http://www.sdyu.edu.cn/tplb/201805/W020180502784215156083.jpg"  width="100%" /></div>
                            <div><img src="http://www.sdyu.edu.cn/tplb/201801/W020180129428322392578.jpg"  width="100%" /></div>
                            <div><img src="http://www.sdyu.edu.cn/tplb/201803/W020180402372049837860.jpg"  width="100%" /></div>


                        </UED_Carousel>



                    </Col>





                </UED_Grid>
                <UED_Grid>

                    <Col>    </Col>

                </UED_Grid>

            </div>
        )
    }
}

export default hot(module)(App)
