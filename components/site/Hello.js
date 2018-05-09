import Typing from '../../components/Typing';

export default ({ header, cycle }) => (
    <div className='row halign'>
        <h1>{ 'Hi. I am a developer and I build ' }
            <Typing hideCursorDelay={ 500 } defaultElement='' startTypingDelay={ 400 } cycle cycleType='erase'
                children={ cycle.snippets } />
        </h1>
    </div>
);