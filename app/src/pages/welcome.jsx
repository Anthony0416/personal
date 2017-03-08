import React from 'react'
import { browserHistory } from 'react-router'
import { render, unmountComponentAtNode } from 'react-dom'

import '../less/welcome.less'

export default class Login extends React.Component {

    render() {
        return (

            <div id="welcomeWrap" style={{backgroundImage: 'url("https://bing.ioliu.cn/v1/rand")'}}>
                <div id="contentWrap">
                    <p style={{textAlign: 'center',fontSize: '20'}}>个人网站</p>
                </div>
            </div>
        );
    }
}


