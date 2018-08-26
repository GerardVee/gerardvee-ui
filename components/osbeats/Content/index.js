import PlaylistAside from './PlaylistAside';
import PlaylistsList from './PlaylistsList';
import SearchesList from './SearchesList';
import Sound from './Sound';

export default ({ playlists, setPlaylist, page, currentPlaylist, songDetails, setSongFromPlaylist,
    suggestions, setSongFromSearch, playStatus, position, volume, loop, onLoadingMP3, setPosition, setStop }) => (
    <main className='osbeats-main'>
        <PlaylistAside playlists={ playlists } setPlaylist={ setPlaylist } />
        <PlaylistsList page={ page} playlists={ playlists } currentPlaylist={ currentPlaylist } songDetails={ songDetails } setSongFromPlaylist={ setSongFromPlaylist } />
        <SearchesList page={ page } suggestions={ suggestions } songDetails={ songDetails } setSongFromSearch={ setSongFromSearch } />
        <Sound songDetails={ songDetails } playStatus={ playStatus } position={ position } volume={ volume }
            loop={ loop } onLoadingMP3={ onLoadingMP3 } setPosition={ setPosition } setStop={ setStop } />
    </main>
)