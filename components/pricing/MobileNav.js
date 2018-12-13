export default () => (
    <div className='row halign space-evenly hidden-md hidden-lg'>
        <a className='site-pricing-mobile-nav-link' onClick={ () => window.scrollTo(0, document.getElementById('website').offsetTop) }>Website Pricing</a>
        <a className='site-pricing-mobile-nav-link' onClick={ () => window.scrollTo(0, document.getElementById('api').offsetTop) }>API Pricing</a>
        <a className='site-pricing-mobile-nav-link' onClick={ () => window.scrollTo(0, document.getElementById('mobile').offsetTop) }>App Pricing</a>
    </div>
);