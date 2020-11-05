import React, { useState } from 'react'
import {
    Page,
    Link,
    Swiper,
    SwiperSlide,
    Tabs,
    Tab,
    Range
} from 'framework7-react';

import QuestionItem from '../components/question/question'
import ProgressBar from '../components/progress-bar/progress-bar'

import bag from '../assets/bag.jpg'
import cup from '../assets/cup.jpg'
import duck from '../assets/duck.jpg'
import tools from '../assets/tools.jpg'
import certificate from '../assets/certificate.jpg'
import cap from '../assets/cap.jpg'
import employee from '../assets/employee.jpg'
import robot from '../assets/robot.jpg'
import codebook1 from '../assets/codebook1.jpg'

import '../css/questionpage.scss'



export default () => {
    const [width, setWidth] = useState(33.3)

    const divStyle = {
        width: "" + width + "%"
    };

    const SetWidth = () => {
        setWidth(width + 33.3)
    }

    return (
        <Page name="question" className="question-container">
            <ProgressBar divStyle={divStyle} />
            <Tabs>
                <Tab className="swiper-no-swiping" tabActive id="tab-1">
                    <div className="items-container">
                        <p className="text-wrapper">
                            Why are you learning to code?
                     </p>
                        <Link tabLink="#tab-2">
                            <QuestionItem
                                onClick={SetWidth}
                                image={certificate}
                                text="For my current job"
                            />
                        </Link>
                        <Link tabLink="#tab-2">
                            <QuestionItem
                                onClick={SetWidth}
                                image={duck}
                                text="Just for fun"
                            />
                        </Link>
                        <Link tabLink="#tab-2">

                            <QuestionItem
                                onClick={SetWidth}
                                image={cup}
                                text="To become a professional developer"
                            />
                        </Link>
                        <Link tabLink="#tab-2">

                            <QuestionItem
                                onClick={SetWidth}
                                image={tools}
                                text="For a different reason"
                            />
                        </Link>
                    </div>
                </Tab>
                <Tab id="tab-2">
                    <div className="items-container">
                        <p className="text-wrapper">
                            Why are you learning to code?
                     </p>
                        <Link tabLink="#tab-3">

                            <QuestionItem
                                onClick={SetWidth}
                                image={bag}
                                text="High school student"
                            />
                        </Link>

                        <Link tabLink="#tab-3">

                            <QuestionItem
                                onClick={SetWidth}
                                image={cap}
                                text="University student"
                            />
                        </Link>
                        <Link tabLink="#tab-3">

                            <QuestionItem
                                onClick={SetWidth}
                                image={employee}
                                text="Employee"
                            />
                        </Link>
                        <Link tabLink="#tab-3">

                            <QuestionItem
                                onClick={SetWidth}
                                image={robot}
                                text="Other"
                            />
                        </Link>
                    </div>
                </Tab>
                <Tab id="tab-3" className="tab-3">
                    <div className="tab3-wrapper">
                        <p className="tab3-text">How much coding experience do you have?</p>

                        <div className="tab3-image">
                            <img src={codebook1} alt="books" />
                        </div>

                        <Range
                            min={0}
                            max={10}
                            label={true}
                            step={5}
                            value={0}
                            draggableBar={true}
                        >
                        </Range>
                    </div>
                </Tab>
            </Tabs>
        </Page>
    )
}