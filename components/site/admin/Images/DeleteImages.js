import { Component } from 'react';
import { connect } from 'react-redux';

import { deleteCertainImage } from '../../../../ducks/actions/site';

const mapStateToProps = ({ site }) => (
{
    images: site.images
});
    
const mapDispatchToProps = (dispatch) => (
{
    deleteImage: (fileName) => dispatch(deleteCertainImage(fileName))
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    async deleteImage(fileName)
    {
        this.props.deleteImage(fileName);
    }

    render()
    {
        const { images } = this.props;
        return (
            <div>
            { images.map(({ location }) =>
                <div>
                    <img src={ location } />
                    <button onClick={ () => this.deleteImage(location.substr(location.lastIndexOf('/') + 1)) }>Delete</button>
                </div>
            )}
            </div>
        );
    }
});