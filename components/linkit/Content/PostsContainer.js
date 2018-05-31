import { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';

const mapStateToProps = ({ linkit }) => ({
    posts: linkit.posts,
    user: linkit.user
});

export default connect(mapStateToProps)(class extends Component
{
    render()
    {
        const { posts, user } = this.props;
        return (
            <div className='col posts halign-children flex-6'>
                <div className='col'>
                    { posts.map((props) => (
                        <Post key={ props.id } token={ !!user ? user.accessToken : '' } { ...props } />
                    ))}
                </div>
            </div>
        );
    }
});