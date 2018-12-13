import { Component } from 'react';
import { connect } from 'react-redux';
import aws4 from 'aws4';

import { appendCertainImage } from '../../../ducks/actions/site';

const mapStateToProps = ({ site }) => (
{
    user: site.user,
    cognito: site.cognito
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
        const { user } = this.props;
        const token = !!user ? user.accessToken : '';
        e.preventDefault();
        const data = new FormData();
        const imageName = 'image.' + extensionCapture(this.uploadInput.files[0].name);
        data.append('image', this.uploadInput.files[0]);
        data.append('filename', imageName);
        data.append('data', token);
        this.props.uploadImage(data);
    }

    async post()
    {
        const { cognito } = this.props;
        var opts =
        {
            host: 'pngzn5evv9.execute-api.us-east-1.amazonaws.com',
            method: 'POST',
            body: JSON.stringify({ filename: 'tracer.png', filetype: 'image/png' }),
            url: 'https://pngzn5evv9.execute-api.us-east-1.amazonaws.com/gerardvee/site/image/upload',
            path: '/gerardvee/site/image/upload'
        };
        aws4.sign(opts, cognito);
        fetch('https://pngzn5evv9.execute-api.us-east-1.amazonaws.com/gerardvee/site/image/upload', opts);
    }

    render()
    {
        return (
            <label className='admin-edit-panel-selection-new-button'>
                <input className='none' ref={ (ref) => { this.uploadInput = ref; } } type='file'
                    onChange={ (e) => this.handleUpload(e) } onClick={ () => this.post() }/>
                New
            </label>
        );
    }
});