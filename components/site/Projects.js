const pairs = (array) => array.reduce((result, _, i) =>
{
    if (i % 2 === 0)
    {
        result.push(array.slice(i, i + 2));
    }
    return result;
}, []);

export default ({ content, images }) => (
    <div className='col'>
        { pairs(content.find(item => item.type === 'projects-list').content).map((pair, i) => (
            <div className='row center halign' key={ `projects-${ i }` }>
                { pair.map((item, i) => (
                    <div className='col center' key={ `project-item-${ i }` }>
                        <img src={ 'https://gerardvee.com' + images.find(img => img.name === item.title).location } />
                    </div>
                    ))
                }
            </div>
            ))
        }
        {/* content.find(item => item.type === 'projects-list').content.map((item, index) => (
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
            ))
        */}
    </div>
);