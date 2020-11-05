import React, { useState } from 'react'
import {
    Page,
    Link,
    Swiper,
    SwiperSlide,
    Tabs,
    Tab
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
                        <QuestionItem
                            onClick={SetWidth}
                            image={bag}
                            text="High school student"
                        />
                        <QuestionItem
                            onClick={SetWidth}
                            image={cap}
                            text="University student"
                        />
                        <QuestionItem
                            onClick={SetWidth}
                            image={employee}
                            text="Employee"
                        />
                        <QuestionItem
                            onClick={SetWidth}
                            image={robot}
                            text="Other"
                        />
                    </div>
                </Tab>
            </Tabs>
        </Page>
    )
}