export default ({ _id, location, activeId, onClick }) => (
    <div className={ 'row valign admin-selection-panel-selection-container' + (activeId === _id ? ' active' : '' ) }
        onClick={ onClick }>
        <img className='admin-selection-panel-image-picture' src={ location } />
        <div className='col admin-selection-panel-image-info'>
            <p className='admin-selection-panel-image-id'>{ _id }</p>
        </div>
    </div>
);