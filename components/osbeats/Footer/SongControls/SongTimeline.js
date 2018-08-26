import Slider from 'rc-slider';

const msToMin = (ms) =>
{
    const min = Math.floor(ms / 60000);
    const sec = ((ms % 60000) / 1000).toFixed(0);
    if (sec == 60)
    {
        return (min + 1) + ':00';
    }
    return min + ':' + (sec < 10 ? '0' : '') + sec;
}

export default ({ position, duration, seek }) => (
    <div className='row space-evenly valign'>
        <p className='osbeats-slider-time'>{ msToMin(position) }</p>
        <Slider className='osbeats-slider osbeats-timeline' value={ position } min={ 0 } max={ duration } onChange={ (position) => seek(position) } />
        <p className='osbeats-slider-time'>{ msToMin(duration) }</p>
    </div>
);