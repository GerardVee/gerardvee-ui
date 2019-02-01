import React from 'react';

export default () => (
    <div className='col halign'>
        <h2 className='site-intro-about-me'>
            I{ '\'' }m a Front End Web Developer who works remotely, and can relocate
            to any city within California.
        </h2>
        <div className='self-center site-intro-me'>
            <img src='https://media.licdn.com/dms/image/C5603AQGsh5jB9P61Bg/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=2rP5if8tlvuB2CJx5rOV5re7GEZk94L72bCCHC5D3ag'
                className='site-intro-me-image'
            />
            <p className='site-intro-me-text'>
                Not only am I Front End Web Developer, I also know my way around the back end. However,
                it{ '\'' }s easier to have a more defined area of expertise. You can get my resume <a className='site-intro-me-resume-link' href='//google.com'>here</a>.
            </p>
            <p className='site-intro-me-text'>
                I{ '\'' }m a learner at heart, and I know my away around tough situations. I am skilled,
                and I never give up, a fact of which I am proud. My hobbies include experimenting with computers,
                embedded systems, fixing tech, and breaking things in order to rebuild them and learn how they work.
                I love learning about how computers truly work, and as such, one of my favorite series is <span className='italic'>Modern Operating Systems</span> by
                Andrew S. Tanenbaum. If you want to work with me on a hobby, a project, or even to offer me a paid or volunteering position, I
                would be glad to hear from you, so don{ '\'' }t hesitate to call!
                Thank you for reading a bit about me.
            </p>
        </div>
    </div>
);