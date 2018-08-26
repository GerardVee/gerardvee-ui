export default ({ playlists, setPlaylist }) => (
    <div className='osbeats-main-playlists-aside col'>
    { playlists.length > 0 && <div className='row halign'>
            <h1 className='osbeats-main-playlists-aside-title'>Playlists</h1>
        </div>}
    { playlists.length > 0 && playlists.map((playlist, i) =>
        <div className='row halign' onClick={ () => setPlaylist(i) }>
            <p className='osbeats-main-playlists-aside-name'>{ playlist.name.replace(/(^\w|\W\w)/g, c => c.toUpperCase()).replace('-', '/') }</p>
        </div>)}
    </div>
);