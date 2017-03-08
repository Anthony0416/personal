import React from 'react';
import 'animate.css/source/_base.css'
import 'animate.css/source/bouncing_entrances/bounceInLeft.css'
import 'animate.css/source/bouncing_entrances/bounceInRight.css'

export default class Loading extends React.Component {

    render() {

        const loading = {
            position: 'absolute',
            zIndex: '100',
            top: '0',
            left: '0',
            height: '100%',
            weight: '100%',
            backgroundColor: '#fff',
        };

        return (
            <div style={loading}>
                <image
                    src="../images/loading.gif"
                />
            </div>
        )
    }
}
