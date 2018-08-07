import { Component } from 'react';
import { connect } from 'react-redux';

import { deleteCertainImage } from '../../../../ducks/actions/site';

const mapStateToProps = ({ site }) => (
{
    user: site.user,
});
    
const mapDispatchToProps = (dispatch) => (
{
    deleteImage: (fileName, token) => dispatch(deleteCertainImage(fileName, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    async deleteImage(fileName)
    {
        const { user } = this.props;
        const token = !!user ? user.accessToken : '';
        this.props.deleteImage(fileName, token);
    }

    render()
    {
        const { fileName } = this.props;
        return (
            <button className='admin-edit-panel-selection-delete-button'
                onClick={ () => this.deleteImage(fileName.substr(fileName.lastIndexOf('/') + 1)) }>Delete</button>
        );
    }
});