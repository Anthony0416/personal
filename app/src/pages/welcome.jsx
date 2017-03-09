import React from 'react'
import { browserHistory } from 'react-router'
import { render, unmountComponentAtNode } from 'react-dom'

import '../less/welcome.less'

export default class Login extends React.Component {

    render() {
        return (

            <div id="welcomeWrap" style={{backgroundImage: 'url("https://bing.ioliu.cn/v1/rand")'}}>
                <div id="contentWrap">
                    <div style={{padding: '0 0 20px 0', borderBottom: '1px solid #eee'}}>
                        <p style={{textAlign: 'center',fontSize: '20px'}}>陈世文的个人网站</p>
                        <p style={{textAlign: 'center',fontSize: '16px'}}>Chen Shiwen's Personal Website</p>
                    </div>
                    <p id="link">
                        <a>Blog</a>&nbsp;/&nbsp;
                        <a>Github</a>&nbsp;/&nbsp;
                        <a href="http://weibo.com/u/3798317205">Microblog</a>&nbsp;/&nbsp;
                        <a>About</a>
                    </p>
                    <p id="last">
                        <a>Content</a>&nbsp;|&nbsp;chenshiwen.top
                    </p>
                </div>
            </div>
        );
    }
}


