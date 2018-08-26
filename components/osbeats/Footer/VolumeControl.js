import Slider from 'rc-slider';

export default ({ volume, setVolume }) => (
    <div className='osbeats-volume-bar row halign valign'>
        <div className='osbeats-volume-icon col wrap full-width-pct'>
            <i className='fas fa-volume-up' onClick={ () => setVolume(0) }></i>
        </div>
        <div className='osbeats-volume-slider col wrap center full-width-pct'>
            <Slider className='osbeats-slider osbeats-volume' value={ volume } min={ 0 } max={ 100 } onChange={ (volume) => setVolume(volume) } />
        </div>
    </div>
);