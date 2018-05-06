export default ({ content }) => (
    <div className='col'>
        { content.filter(item => item.type === 'skills').map((item) => [
            <div className='row halign' key={ `title-${ item.type }` }>
                <h1>{ item.title }</h1>
            </div>,
            <div className='row halign' key={ `body-${ item.type }` }>
                <p>{ item.body }</p>
            </div> ])
        }
        <div className='col-md-row-sm halign'>
            { content.find(item => item.type === 'skills-list').content.map((item, index, contents) => (
                <div className='col halign-children' key={ `skill-${ item.title }` }>
                    <i className={ `fa fa-${ item.icon } fa-5x` }/>
                    <h1>{ item.title }</h1>
                    <p>{ item.body }</p>
                </div>))
            }
        </div>
    </div>
);