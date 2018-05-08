export default ({ content, images }) => (
    <div className='col'>
        { content.find(item => item.type === 'projects-list').content.map((item, index) => (
            <div className='row center' key={ `projects-${ index }` }>
                <div className='col center'>
                    <h1>{ item.title }</h1>
                    <p>{ item.description }</p>
                    <img className='hidden-md hidden-lg' src={ 'https://gerardvee.com' + images.find(img => img.name === item.title).location } width="50%" />
                    { item.finished && <button>Visit</button> }
                    { !item.finished && <button disabled>Not Ready</button> }
                </div>
                <div className='col hidden-sm center' key={ `projects-picture-${ index }` }>
                    <img src={ 'https://gerardvee.com' + images.find(img => img.name === item.title).location } width="33%" />
                </div>
            </div>
            ))}
    </div>
);