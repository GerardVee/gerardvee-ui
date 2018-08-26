export default ({ songDetails }) => (
    <div className='row halign valign'>
        { songDetails.src && <img className='osbeats-song-info-image' src={ songDetails.src } /> }
        <div className='col halign valign'>
            <h1 className='osbeats-song-info-title' onClick={ () => { if (songDetails.href) window.location.href = songDetails.href; } }>
                { songDetails.title || 'Music' }</h1>
            <p className='osbeats-song-info-credit'>Music from Bensound.com</p>
        </div>
    </div>
);