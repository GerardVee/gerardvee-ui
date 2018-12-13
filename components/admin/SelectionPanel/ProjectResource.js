export default ({ project_id, image, title, activeId, finished, onClick }) => (
    <div className={ 'row valign admin-selection-panel-selection-container' + (activeId === project_id ? ' active' : '' ) }
        onClick={ onClick }>
        <img className='admin-selection-panel-project-picture' src={ image } />
        <div className='col admin-selection-panel-project-info'>
            <span className={ 'admin-selection-panel-project-circle' + (finished ? ' active' : '') } />
            <p className='admin-selection-panel-project-title'>{ title }</p>
            <p className='admin-selection-panel-project-id'>{ project_id }</p>
        </div>
    </div>
);