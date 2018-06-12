import Nav from './Nav';

const Footer = () => (
    <div className='col'>
        <h3 className='center'>Keep in touch</h3>
        <div className='row halign'>
            <button>Github</button>
            <button>LinkedIn</button>
            <button>CodePen</button>
        </div>
        <p className='center'>Crafted by me ©, 2017 </p>
    </div>
);

export default ({ children, title }) => (
    <div className='col' style={{ padding: 0 }}>
        <title>{ title }</title>
        <Nav />
        { children }
        <Footer />
    </div>
);