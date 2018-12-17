import React, { Component } from 'react';
import aws4 from 'aws4';
import axios from 'axios';
import { connect } from 'react-redux';
import { post } from '../../../lib/methods';
import { replaceCertainImage } from '../../../ducks/actions/site';

const mapStateToProps = ({ site }) => ({
    user: site.user,
    cognito: site.cognito,
});

const mapDispatchToProps = (dispatch) => ({ replaceImage: (cognito, location, old_location) => dispatch(replaceCertainImage(cognito, location, old_location)) });

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

    async update(e)
    {
        e.preventDefault();
        const { fileName, cognito } = this.props;
        const file = this.uploadInput.files[0];
        if (!(file.type.includes('image')))
        {
            alert('File is not an image');
            return;
        }
        const extension = extensionCapture(file.name);
        const shortFileName = fileName.substring(fileName.lastIndexOf('/') + 1).split('?')[0].replace(/\.[^/.]+$/, '') + (extension === null ? '.jpg' : '.' + extension);
        const uploadInfo = await this.getUploadUrl(shortFileName, file.type);
        if (!uploadInfo.signedRequest || !uploadInfo.url)
        {
            alert('Replacement failed');
            return;
        }
        const location = await this.postOnline(uploadInfo, file);
        if (!location)
        {
            return;
        }
        this.props.replaceImage(cognito, location, fileName.split('?')[0]);
    }

    render()
    {
        return (
            <label className='admin-edit-panel-selection-replace-button'>
                <input className='none' ref={ (ref) => { this.uploadInput = ref; } } type='file' onChange={ (e) => this.update(e) } />
                Replace
            </label>
        );
    }
});