import { Component } from 'react';
import { connect } from 'react-redux';

import { appendCertainImage } from '../../../../ducks/actions/site';

const mapStateToProps = ({ site }) => (
{
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
        e.preventDefault();
        const data = new FormData();
        const imageName = 'image.' + extensionCapture(this.uploadInput.files[0].name);
        data.append('image', this.uploadInput.files[0]);
        data.append('filename', imageName);
        this.props.uploadImage(data);
    }

    render()
    {
        return (
            <div>
                <input ref={(ref) => { this.uploadInput = ref; }} type='file' />
                <button onClick={ (e) => this.handleUpload(e) }>Upload</button>
            </div>
        );
    }
});