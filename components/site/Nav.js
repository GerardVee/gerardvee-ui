export default () =>
(
    <div className='row halign-children valign'>
        <div className='row' style={{ flex: 1 }}>
            <a href='/about'>About</a>
        </div>
        <div className='col' style={{ flex: 3 }}>
            <h1 style={{ textAlign: 'center' }}>Gerardo Valenzuela</h1>
        </div>
        <div className='row' style={{ flex: 1 }}>
            <a href='/contact'>Contact</a>
        </div>
        <div className='row' style={{ flex: 1 }}>
            <a href='/donate'>Donate</a>
        </div>
    </div>
);