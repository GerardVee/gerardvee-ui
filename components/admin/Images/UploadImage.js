import React, { Component } from 'react';
import { appendCertainImage } from '../../../ducks/actions/site';
import aws4 from 'aws4';
import axios from 'axios';
import { connect } from 'react-redux';
import { post } from '../../../lib/methods';

const mapStateToProps = ({ site }) => ({
    user: site.user,
    cognito: site.cognito
});

const mapDispatchToProps = (dispatch) => ({ appendImage: (cognito, location) => dispatch(appendCertainImage(cognito, location)) });

const api = process.env.API;

const extensionCapture = (file) => /(?:\.([^.]+))?$/.exec(file)[1];

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    async getUploadUrl(filename, filetype)
    {
        const { cognito } = this.props;
        var params = post({ filename, filetype }, '/gerardvee/site/image/upload');
        aws4.sign(params, cognito);
        const req = await fetch(api + 'site/image/upload', params);
        return await req.json();
    }

    async postOnline(uploadInfo, file)
    {
        const { signedRequest, url } = uploadInfo;
        const req = await axios.put(signedRequest, file, { headers: { 'content-type': file.type, 'x-amz-acl': 'public-read' } });
        if (req.status === 200)
        {
            return url;
        }
        else
        {
            alert('Photo failed to upload');
        }
    }

    async upload(e)
    {
        e.preventDefault();
        const { cognito } = this.props;
        const file = this.uploadInput.files[0];
        if (!(file.type.includes('image')))
        {
            alert('File is not an image');
            return;
        }
        const currentTime = new Date().getTime().toString();
        const extension = extensionCapture(file.name);
        const fileName = `${ currentTime }.${ extension == null ? 'jpg' : extension }`;
        const uploadInfo = await this.getUploadUrl(fileName, file.type);
        if (!uploadInfo.signedRequest)
        {
            alert('Upload failed');
            return;
        }
        const location = await this.postOnline(uploadInfo, file);
        this.props.appendImage(cognito, location);
    }

    render()
    {
        return (
            <label className='admin-edit-panel-selection-new-button'>
                <input className='none' ref={ (ref) => { this.uploadInput = ref; } } type='file' onChange={ (e) => this.upload(e) } />
                New
            </label>
        );
    }
});