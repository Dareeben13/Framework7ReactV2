import React from 'react'


import './question.scss'

export default ({ image, text, onClick }) => (
    <div className="container-wrapper">
        <div className="question-wrapper" onClick={onClick}>
            <img src={image} alt="question image" />
            <p>{text}</p>
        </div>
    </div>

)