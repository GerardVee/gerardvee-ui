import { Component } from 'react';
import { connect } from 'react-redux';

import FacebookAuthenticate from './Content/FacebookAuthenticate';
import Option from './Option';

const mapStateToProps = ({ linkit }) => ({
    user: linkit.user
});

const mapDispatchToProps = (dispatch) => ({
});

const noProfile = 'https://transhumane-partei.de/wp-content/uploads/2016/04/blank-profile-picture-973461_960_720.png';

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    render()
    {
        const { mobile, user } = this.props;
        if (mobile)
        {
            return (
                <div className='center thirds inline-block'>
                    { !user && <FacebookAuthenticate mobile /> }
                    { !!user && <img className='linkit-mobile-photo linkit-profile-photo' src={ user.picture } /> }
                </div>
            );
        }
        return (
            <>
                <div className='row'>
                    <img className='linkit-profile-photo' src={ !!user ? user.picture : noProfile } />
                </div>
                { !user && <FacebookAuthenticate />}
                { !!user && <Option icon='person_outline'>
                    <p>{ `Welcome, ${ user.firstName }` }</p>
                </Option> }
            </>
        )
    }
});