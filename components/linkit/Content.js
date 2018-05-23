import React from 'react';

const api = 'https://api.gerardvee.com/';

const Option = ({ children, icon }) => (
    <div className='row valign option'>
        <i className='material-icons'>{ icon }</i>
        { children }
    </div>
);

const Text = ({ children }) => (
    <p>{ children }</p>
);

const ProfilePic = ({ url, ifEmpty, shape, profile }) => (
    <img style={{ borderRadius: '50%', height: 40, width: 40 }} src={ !!profile ? url : ifEmpty } />
);

const withPosts = (Component) =>
    class extends React.Component
    {
        state = { posts: [] };
        async componentWillMount()
        {
            const res = await fetch(api + 'linkit/posts');
            const posts = await res.json();
            this.setState({ posts });
        }
        render()
        {
            const { posts } = this.state;
            return <Component posts={ posts } />;
        }
    };

const Posts = withPosts(({ posts }) => (
    <div className='col'>
    { posts.map(post => (
        <div className='col halign-children' style={{ border: 'solid 0.1em black', borderRadius: '1em', marginBottom: '0.3em' }}>
            <a className='center' href={ post.link }><h1 style={{ fontSize: '2.7em' }}>{ post.title }</h1></a>
            <div className='row halign-children'>
                <div className='row valign flex-1'>
                    <i className='material-icons'>keyboard_arrow_up</i>
                    Upvote
                </div>
                <div className='row valign flex-1'>
                    <i className='material-icons'>keyboard_arrow_down</i>
                    Downvote
                </div>
                <div className='row valign flex-1'>
                    <i className='material-icons'>error_outline</i>
                    Report
                </div>
            </div>
        </div>
    ))}
    { JSON.stringify(posts) }
    </div>
));

export default ({ profile }) => (
    <main>
        <div className='row'>
            <div className='col user-controls halign-children' style={{ flex: 1 }}>
                <div className='row'>
                    <ProfilePic ifEmpty='https://transhumane-partei.de/wp-content/uploads/2016/04/blank-profile-picture-973461_960_720.png' url='urlhere' shape='circle' profile={ profile } />
                </div>
                <Option icon='person_outline'>
                    <Text>{ profile ? `Welcome, ${ profile.firstName }` : 'Sign In' }</Text>
                </Option>
                <Option icon='whatshot'>
                    <Text>Hot</Text>
                </Option>
                <Option icon='timer'>
                    <Text>New</Text>
                </Option>
                <Option icon='poll'>
                    <Text>Rising</Text>
                </Option>
            </div>
            <div className='col posts halign-children' style={{ flex: 6 }}>
                <Posts />
            </div>
            <div className='col user-changes halign-children' style={{ flex: 1 }}>
                <Option icon='update'>
                    <Text>Refresh</Text>
                </Option>
                <Option icon='tab'>
                    <Text>New Post</Text>
                </Option>
            </div>
        </div>
    </main>
);