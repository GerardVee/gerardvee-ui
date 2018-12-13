import { Component } from 'react';
import { connect } from 'react-redux';

import { replaceCertainImage } from '../../../ducks/actions/site';

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
        const { fileName, user } = this.props;
        const token = !!user ? user.accessToken : '';
        const fn = fileName.split('?')[0];
        e.preventDefault();
        const data = new FormData();
        const newname = 'lol';
        const imageName = 'image.' + extensionCapture(this.uploadInput.files[0].name);
        data.append('image', this.uploadInput.files[0]);
        data.append('filename', imageName);
        data.append('data', JSON.stringify({ token, fileName: fn }));
        this.props.replaceImage(data, noTime);
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