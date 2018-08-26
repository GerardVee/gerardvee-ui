import Sound from 'react-sound';

export default ({ currentPlaylist, stepBackward, modifyPlayStatus, playStatus, stepForward, loop, flipLoop }) => (
    <div className='osbeats-song-controls row valign'>
        <div className='col full-width-pct'></div>
        { (currentPlaylist !== -1 ) && <div className='col full-width-pct'>
            <i className='osbeats-secondary-circle-button fas fa-backward'
                onClick={ () => stepBackward() }></i>
        </div>}
        <div className='col full-width-pct'>
            <button className='osbeats-pause-play-button' onClick={ () => modifyPlayStatus() }>
                <i className={ `fas fa-${ playStatus === Sound.status.PLAYING ? 'pause' : 'play' }` }></i>
            </button>
        </div>
        { (currentPlaylist !== -1 ) && <div className='col full-width-pct'>
            <i className='osbeats-secondary-circle-button fas fa-forward'
                onClick={ () => stepForward() }></i>
        </div>}
        <div className='col full-width-pct'>
            <i className={ `osbeats-secondary-circle-button${ loop ? ' osbeats-active-blue' : '' } fa${ loop ? 's' : 'r' } fa-dot-circle` }
                onClick={ () => flipLoop() }></i>
        </div>
    </div>
);