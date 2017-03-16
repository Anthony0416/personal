import React from 'react'

export default class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let body = {
            textAlign: 'center',
            marginTop: '150px'
        }
        return (            
            <div style={body}>
                <h1>Coming Soon</h1>
                <h3 style={{marginTop: '10px'}}>网站正在建设中,您可以访问我的
                    <a href="https://github.com/Anthony0416">Github</a>
                </h3>
                <img style={{marginTop: '20px',height: '150px',width: '150px'}} src="./dist/img/1998.gif" />
            </div>
        );
    }
}

