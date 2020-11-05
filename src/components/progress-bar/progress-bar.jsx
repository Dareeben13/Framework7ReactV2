import React from 'react'

import './progress-bar.scss'

export default ({ divStyle }) => {

    return (
        <div className="wrapper">
            <div className="bar-container" >
                <div className="progress-bar" style={divStyle} />
            </div>
        </div>

    )
}