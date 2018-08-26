import SongInfo from './SongInfo';
import SongControls from './SongControls';
import VolumeControl from './VolumeControl';

export default ({ songDetails, currentPlaylist, stepBackward, playStatus, modifyPlayStatus,
    stepForward, loop, flipLoop, position, duration, seek, volume, setVolume }) => (
    <footer className='osbeats-footer'>
        <SongInfo songDetails={ songDetails } />
        <SongControls currentPlaylist={ currentPlaylist } stepBackward={ stepBackward } playStatus={ playStatus } modifyPlayStatus={ modifyPlayStatus }
            stepForward={ stepForward } loop={ loop } flipLoop={ flipLoop } position={ position } duration={ duration } seek={ seek } />
        <VolumeControl volume={ volume } setVolume={ setVolume } />
    </footer>
);