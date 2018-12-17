import React from 'react';

export default () => (
    <div className='col'>
        <h3 className='center site-footer-title'>Keep in touch</h3>
        <div className='row halign'>
            <button className='site-footer-github-button' onClick={ () => window.location.href = 'https://github.com/GerardVee' }>Github</button>
            <button className='site-footer-linkedin-button' onClick={ () => window.location.href = 'https://www.linkedin.com/in/gerardo-valenzuela-336496116/' }>LinkedIn</button>
            <button className='site-footer-codepen-button' onClick={ () => window.location.href = 'https://codepen.io/geevee/' }>CodePen</button>
        </div>
        <p className='center site-footer-copyright'>Crafted by me ©, 2017 </p>
    </div>
);