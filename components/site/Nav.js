import Link from 'next/link';

const names =
[
    'About', 'Pricing', 'Contact', 'Donate'
];

export default () =>
(
    <div className='row valign' style={{ justifyContent: 'space-evenly' }}>
    { names.map((name, i) =>
        <Link href={ `/${ name.toLowerCase() }` }><a style={{ order: i }}>{ name }</a></Link>
    )}
    <h1 style={{ order: 1 }}>Gerardo Valenzuela</h1>
        {/*<div className='row' style={{ flex: 1 }}>
            <a href='/about'>About</a>
        </div>
        <div className='row' style={{ flex: 1 }}>
            <a href='/pricing'>Pricing</a>
        </div>
        <div className='col' style={{ flex: 3 }}>
            <h1 style={{ textAlign: 'center' }}>Gerardo Valenzuela</h1>
        </div>
        <div className='row' style={{ flex: 1 }}>
            <a href='/contact'>Contact</a>
        </div>
        <div className='row' style={{ flex: 1 }}>
            <a href='/donate'>Donate</a>
        </div>*/}
    </div>
);