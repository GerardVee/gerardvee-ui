import React from 'react';

export default ({ cards }) => (
    <div className='col-sm-row-md space-evenly wrap'>
        { cards.map(({ price, description, example_url }) => (
            <div key={ 'apis_' + price } className='col halign site-pricing-card'>
                <div className='row halign'>
                    <h1 className='site-pricing-card-header-price center'>{ price }</h1>
                </div>
                <div className='col halign'>
                    <p className='site-pricing-card-body-description center'>{ description }</p>
                    { example_url && (
                        <button onClick={ () => window.location.href = example_url } className='site-pricing-card-body-button'>Example</button> )}
                    { (!(example_url)) && <button disabled className='site-pricing-card-body-button'>Coming Soon</button> }
                </div>
            </div> ))}
    </div>
);