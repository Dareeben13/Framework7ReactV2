import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
  Swiper,
  SwiperSlide
} from 'framework7-react';

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

import Illustration from '../components/illustrations/illustration.jsx'

import '../css/home.scss'

export default () => (
  <Page name="home" className="home">
    <div className="login">
      <a className="login__btn" href='#'>Log in</a>
    </div>
    <Swiper
      pagination
      init={true}
      className="swiper" >
      <SwiperSlide>
        <Illustration
          image={img1}
          title="Learn to code"
          text="Master the skills to read and write code, build apps and games, and advance your career"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Illustration
          image={img2}
          title="Build projects"
          text="Make apps, games, websites, and more with step-by-step guidance"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Illustration
          image={img3}
          title="Join the community"
          text="Get advice and inspiration from more than 5 million learners"
        />
      </SwiperSlide>
    </Swiper>
    <div className="button-container">
      <Link className="button" href="/welcome" >
        Get Started
    </Link>
    </div>
  </Page>
); 