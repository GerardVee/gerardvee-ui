import UserInfo from './UserInfo';
import ProjectResource from './ProjectResource';
import ImageResource from './ImageResource';

export default ({ activeResource, onProjectButtonClick, onImageButtonClick }) => (
    <div className='col admin-panel admin-user-panel'>
        <UserInfo/>
        <ProjectResource activeResource={ activeResource } onClick={ onProjectButtonClick } />
        <ImageResource activeResource={ activeResource } onClick={ onImageButtonClick } />
    </div>
);