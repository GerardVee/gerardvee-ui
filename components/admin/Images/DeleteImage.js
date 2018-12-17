import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCertainImage } from '../../../ducks/actions/site';

const mapStateToProps = ({ site }) => ({
    user: site.user,
    cognito: site.cognito,
});

const mapDispatchToProps = (dispatch) => ({ deleteImage: (cognito, location) => dispatch(deleteCertainImage(cognito, location)) });

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    async deleteImage(location)
    {
        const { cognito } = this.props;
        this.props.deleteImage(cognito, location);
    }

    render()
    {
        const { fileName } = this.props;
        return (
            <button className='admin-edit-panel-selection-delete-button' onClick={ () => this.deleteImage(fileName.split('?')[0]) }>
                Delete
            </button>
        );
    }
});