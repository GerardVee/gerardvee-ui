import { Component } from 'react';
import { connect } from 'react-redux';

import { appendCertainImage } from '../../../../ducks/actions/site';

const mapStateToProps = ({ site }) => (
{
    user: site.user,
});
    
const mapDispatchToProps = (dispatch) => (
{
    uploadImage: (data) => dispatch(appendCertainImage(data)),
});

const extensionCapture = (file) => /(?:\.([^.]+))?$/.exec(file)[1];
    
export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    async handleUpload(e)
    {
        const { fileName, user } = this.props;
        const token = !!user ? user.accessToken : '';
        e.preventDefault();
        const data = new FormData();
        const imageName = 'image.' + extensionCapture(this.uploadInput.files[0].name);
        data.append('image', this.uploadInput.files[0]);
        data.append('filename', imageName);
        data.append('data', { token, fileName });
        this.props.replaceImage(data);
    }

    render()
    {
        return (
            <label className='admin-edit-panel-selection-replace-button'>
                <input className='none' ref={ (ref) => { this.uploadInput = ref; } } type='file' />
                Replace
            </label>
        );
    }
});