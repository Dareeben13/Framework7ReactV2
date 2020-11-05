import React from 'react'
import {
    Page,
    Link
} from 'framework7-react';

import Illustration from '../components/illustrations/illustration'

import img4 from '../assets/img4.jpg'

import '../css/welcome.scss'

export default () => (
    <Page name="welcome" className="welcome-container">
        <Illustration
            image={img4}
            title="Welcome!"
            text="To build your personal curriculum, we'll ask you a few questions."
        />
        <div className="link-wrapper">
            <Link href="/question" className="link">
                continue
             </Link>
        </div>
    </Page>
)