import { connect } from 'react-redux';

const mapStateToProps = ({ site }) => ({
    user: site.user,
});

export default connect(mapStateToProps)(({ user }) => (
    <div className='row valign'>
        <img className='admin-user-panel-picture' src={ user ? user.picture.data.url : '' } />
        <div className='col'>
            <h1 className='admin-user-panel-name'>{ user ? user.name : 'Some Admin' }</h1>
            <h2 className='admin-user-panel-role'>> Admin</h2>
        </div>
    </div>
));