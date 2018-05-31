import PostsControls from './PostsControls';
import PostsContainer from './PostsContainer';
import UserChanges from './UserChanges';

export default () => (
    <main>
        <div className='row'>
            <PostsControls />
            <PostsContainer />
            <UserChanges />
        </div>
    </main>
);