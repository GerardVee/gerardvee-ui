export default ({ content, images }) => (
    <div className='col'>
        { content.find(item => item.type === 'projects-list').content.map((item, index) => [
            <div className='col' key={ `projects-${ index }` }>
                <h1>{ item.title }</h1>
                <p>{ item.description }</p>
                <img className='hidden-md hidden-lg' src={ images.find(img => img.name === item.title).location } height="50%" />
                { item.finished && <button>Visit</button> }
                { !item.finished && <button disabled>Not Ready</button> }
            </div>,
            <div className='col hidden-sm' key={ `projects-picture-${ index }` }>
                <img src={ images.find(img => img.name === item.title).location } width="100%" />
            </div> ])
        }
    </div>
);