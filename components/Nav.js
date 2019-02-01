import Link from 'next/link';
import React from 'react';

const names =
[
    'Projects',
    // 'Pricing', no longer in use
    'Contact',
    'About',
    'Donate',
];

export default () => (
    <>
        <div className='hidden-md hidden-lg col halign'>
            <h1 className='site-header-name' onClick={ () => window.location.href = '../' }>Gerardo Valenzuela</h1>
            <div className='row halign space-evenly'>
                { names.map((name, i) =>
                    <Link key={ 'sm_' + name } href={ `/${ name.toLowerCase() }` }><a className='site-header-link' style={{ order: i }}>{ name }</a></Link>
                )}
            </div>
        </div>
        <div className='hidden-sm row valign space-evenly'>
            <h1 className='site-header-name' style={{ order: 2 }} onClick={ () => window.location.href = '../' }>Gerardo Valenzuela</h1>
            { names.map((name, i) =>
                <Link key={ 'lg_' + name } href={ `/${ name.toLowerCase() }` }><a className='site-header-link' style={{ order: i }}>{ name }</a></Link>
            )}
        </div>
    </>
);