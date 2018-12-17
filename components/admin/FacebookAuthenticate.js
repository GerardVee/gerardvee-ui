import React, { Component } from 'react';
import FacebookAuth from 'react-facebook-auth';
import { connect } from 'react-redux';
import { login } from '../../ducks/actions/site';

const appId = process.env.FB_APP_ID;

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({ login: (user) => dispatch(login(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    login(user)
    {
        this.props.login(user);
    }

    render()
    {
        return <FacebookAuth autoLoad={ true } appId={ appId } callback={ (user) => this.login(user) } component={ () => <div></div> } />;
    }
});
