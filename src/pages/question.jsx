import React, { useState } from "react";
import { Page, Link, Tabs, Tab } from "framework7-react";

import QuestionItem from "../components/question/question";
import ProgressBar from "../components/progress-bar/progress-bar";

import bag from "../assets/bag.jpg";
import cup from "../assets/cup.jpg";
import duck from "../assets/duck.jpg";
import tools from "../assets/tools.jpg";
import certificate from "../assets/certificate.jpg";
import cap from "../assets/cap.jpg";
import employee from "../assets/employee.jpg";
import robot from "../assets/robot.jpg";
import codebook1 from "../assets/codebook1.jpg";
import codebook2 from "../assets/codebook2.jpg";
import codebook3 from "../assets/codebook3.jpg";

import "../css/questionpage.scss";

export default () => {
  const [width, setWidth] = useState(33.3);
  const [currentSubTab, setCurrentSubTab] = useState(0);

  const divStyle = {
    width: "" + width + "%",
  };

  const SetWidth = () => {
    setWidth(width + 33.3);
  };

  const renderLevelText = () => {
    const parent = document.getElementById("tab-3");

    if (parent && parent.classList.contains("tab-active")) {
      if (currentSubTab === 0) {
        return "You're about to start your journey";
      }
      else if (currentSubTab === 50) {
        return "You've written small programs or webpages";
      }
      else {
        return "You've worked on larger projects"
      }
    }
    return null;
  }

  return (
    <Page name="question" className="question-container">
      <ProgressBar divStyle={divStyle} />
      <Tabs>
        <Tab className="swiper-no-swiping" tabActive id="tab-1">
          <div className="items-container">
            <p className="text-wrapper">Why are you learning to code?</p>
            <Link tabLink="#tab-2" className="item-link">
              <QuestionItem
                onClick={SetWidth}
                image={certificate}
                text="For my current job"
              />
            </Link>
            <Link tabLink="#tab-2" className="item-link">
              <QuestionItem
                onClick={SetWidth}
                image={duck}
                text="Just for fun"
              />
            </Link>
            <Link tabLink="#tab-2" className="item-link">
              <QuestionItem
                onClick={SetWidth}
                image={cup}
                text="To become a professional developer"
              />
            </Link>
            <Link tabLink="#tab-2" className="item-link">
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
            <p className="text-wrapper">Why are you learning to code?</p>
            <Link tabLink="#tab-3" className="item-link">
              <QuestionItem
                onClick={SetWidth}
                image={bag}
                text="High school student"
              />
            </Link>

            <Link tabLink="#tab-3" className="item-link">
              <QuestionItem
                onClick={SetWidth}
                image={cap}
                text="University student"
              />
            </Link>
            <Link tabLink="#tab-3" className="item-link">
              <QuestionItem
                onClick={SetWidth}
                image={employee}
                text="Employee"
              />
            </Link>
            <Link tabLink="#tab-3" className="item-link">
              <QuestionItem onClick={SetWidth} image={robot} text="Other" />
            </Link>
          </div>
        </Tab>
        <Tab id="tab-3" className="tab-3">
          <div className="tab3-wrapper">
            <p className="tab3-text">How much coding experience do you have?</p>
            <div className="code-level">
              <Tabs>
                <Tab id="subtab-1" className="" tabActive>
                  <div className="tab3-image">
                    <img src={codebook1} alt="books" />
                  </div>
                </Tab>
                <Tab id="subtab-2" className="">
                  <div className="tab3-image">
                    <img src={codebook2} alt="books" />
                  </div>
                </Tab>
                <Tab id="subtab-3" className="">
                  <div className="tab3-image">
                    <img src={codebook3} alt="books" />
                  </div>
                </Tab>
              </Tabs>
              <div id="subtablinks">
                <Link tabLink="#subtab-1" tabLinkActive onClick={() => setCurrentSubTab(0)} style={{ zIndex: 2}}>
                  <div className="custom-link-content">
                    <p className="custom-link-text">None</p>
                    <div className={currentSubTab === 0 ? "donut" : (currentSubTab > 0 ? "filled" : "blank")}></div>
                  </div>
                </Link>
                <Link tabLink="#subtab-2" onClick={() => setCurrentSubTab(50)} style={{ zIndex: 2}}>
                  <div className="custom-link-content">
                    <p className="custom-link-text">A Little</p>
                    <div className={currentSubTab === 50 ? "donut" : (currentSubTab > 50 ? "filled" : "blank")}></div>
                  </div>
                </Link>
                <Link tabLink="#subtab-3" onClick={() => setCurrentSubTab(100)} style={{ zIndex: 2}}>
                  <div className="custom-link-content">
                    <p className="custom-link-text">A Lot</p>
                    <div className={currentSubTab === 100 ? "donut" : (currentSubTab > 100 ? "filled" : "blank")}></div>
                  </div>
                </Link>
                <div className="bar-container">
                  <div className="filler" style={{ width: `calc(${currentSubTab}%)`}}></div>
                </div>
              </div>
              <p className="code-level-text">{renderLevelText()}</p>
            </div>
            <div className="link-container">
              <Link className="link" href="/signup">
                Continue
              </Link>
            </div>
          </div>
        </Tab>
      </Tabs>
    </Page>
  );
};
