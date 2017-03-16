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
                        {/*<p style={{textAlign: 'center',fontSize: '20px'}}>陈世文的个人网站</p>*/}
                        <p style={{textAlign: 'center',fontSize: '16px'}}>Chen's Personal Website</p>
                    </div>
                    <p id="link">
                        <a href="http://blog.chenshiwen.top">Blog</a>&nbsp;/&nbsp;
                        <a href="https://github.com/Anthony0416">Github</a>&nbsp;/&nbsp;
                        <a href="http://weibo.cn/chentong0416">Microblog</a>&nbsp;/&nbsp;
                        <a href="404">About</a>
                    </p>
                    <p id="last">
                        <a href="mailto:csw0416@hotmail.com">Content</a>&nbsp;|&nbsp;chenshiwen.top
                    </p>
                </div>
            </div>
        );
    }
}


