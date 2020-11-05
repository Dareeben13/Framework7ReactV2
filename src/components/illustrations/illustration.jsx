import React from 'react'

import './illustration.scss'


export default ({ image, title, text }) => (
    <div className="illustration">
        <div className="image__wrapper">
            <img src={image} alt="image" />
        </div>
        <div className="text__wrapper">
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
        </div>
    </div>
)