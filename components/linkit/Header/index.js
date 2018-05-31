import { connect } from 'react-redux';
import Link from 'next/link';

import MobileNav from './MobileNav';

const mapStateToProps = ({ linkit }) => (
{
    loggedIn: linkit.loggedIn
});

export default connect(mapStateToProps)(({ loggedIn, extra }) => (
    <>
        { extra && <MobileNav /> }
        <header className='linkit-header'>
            <Link href={ `/projects/linkit${ loggedIn ? `?loggedIn=${ loggedIn }` : '' }` }>
                <h1 className='title'><span className='colored'>L</span>ink<span className='colored'>I</span>t</h1>
            </Link>
        </header>
    </>
));