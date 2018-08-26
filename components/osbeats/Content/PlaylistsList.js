export default ({ page, playlists, currentPlaylist, songDetails, setSongFromPlaylist }) => (
    <>
    { page === 'playlist' && <div className='osbeats-list col'>
        <div className='row halign valign'>
            <h1 className='osbeats-main-list-results-title'>Songs</h1> }
        </div>
        <div className='osbeats-main-list row space-evenly wrap'>
        { playlists[currentPlaylist].playlist.map((details, i) =>
            <div className='osbeats-suggestions-suggestion col halign' onClick={ () => setSongFromPlaylist(details, i) }>
                <div className='row halign valign'>
                    <img className='osbeats-suggestions-image' src={ details.src } />
                    <h3 className={ `osbeats-suggestions-title${ details.title === songDetails.title ? ' osbeats-active-blue' : '' }` }>{ details.title }</h3>
                </div>
            </div>)}
        </div>
    </div>}
    </>
);