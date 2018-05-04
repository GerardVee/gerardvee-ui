import Typing from '../../components/Typing';

export default ({ content }) => (
    <div className='col'>
        { content.filter(item => item.type === 'header').map((item) => [
            <div className='row halign' key={ `title-${ item.type }` }>
                <h1>{ item.title }</h1>
            </div>,
            <div className='row halign' key={ `body-${ item.type }` }>
                <p>{ item.body } { '\n' } <Typing hideCursorDelay={ 500 } defaultElement='' startTypingDelay={ 400 } cycle cycleType='erase' children={ content.find(item => item.type === 'cycle').snippets }/></p>
            </div>,
            <div className='col halign-children' key={ `row-${ item.type }`}>
                <div className='row'>
                    <div className='col-sm-12 col-lg-2 col-lg-offset-4 center' key={ `button-${ item.type }` }>
                        <button icon='terminal' type='standard' bold fill='#FADA5E' shade='white' stroke='none' onClick={ () => scrollIntoView(document.getElementById('contact')) }>Hire Me</button>
                    </div>
                    <div className='col-sm-12 col-lg-2 center learn-more' key={ `learn-more-${ item.type }` }>
                        <button icon='hand-o-down' type='standard' bold fill='none' stroke='#FADA5E' shade='#FADA5E' stretch onClick={ () => scrollIntoView(document.getElementById('skills')) }>Learn more</button>
                    </div>
                </div>
            </div>
        ])}
    </div>
);