import { Component } from 'react';
import { connect } from 'react-redux';

import { replaceCertainImage } from '../../../../ducks/actions/site';

const mapStateToProps = ({ site }) => (
{
    user: site.user,
});
    
const mapDispatchToProps = (dispatch) => (
{
    replaceImage: (data, fileName) => dispatch(replaceCertainImage(data, fileName)),
});

const extensionCapture = (file) => /(?:\.([^.]+))?$/.exec(file)[1];
    
export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    async handleUpload(e)
    {
        // remove ?t= so we won't err
        const { fileName, user } = this.props;
        const fn = fileName.substr(fileName.lastIndexOf('/') + 1).split('?')[0];
        const token = !!user ? user.accessToken : '';
        e.preventDefault();
        const data = new FormData();
        const imageName = 'image.' + extensionCapture(this.uploadInput.files[0].name);
        data.append('image', this.uploadInput.files[0]);
        data.append('filename', imageName);
        data.append('data', JSON.stringify({ token, fileName: fn }));
        this.props.replaceImage(data, fileName);
    }

    render()
    {
        return (
            <label className='admin-edit-panel-selection-replace-button'>
                <input className='none' ref={ (ref) => { this.uploadInput = ref; } } type='file'
                    onChange={ (e) => this.handleUpload(e) } />
                Replace
            </label>
        );
    }
});