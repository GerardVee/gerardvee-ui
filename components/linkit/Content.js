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

const Posts = () => (
    <div></div>
);

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