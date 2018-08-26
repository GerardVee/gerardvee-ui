import SongControl from './SongControl';
import SongTimeline from './SongTimeline';

export default ({ currentPlaylist, stepBackward, playStatus, modifyPlayStatus,
    stepForward, loop, flipLoop, position, duration, seek }) => (
    <div className='col' style={{ justifyContent: 'flex-end' }}>
        <SongControl currentPlaylist={ currentPlaylist } stepBackward={ stepBackward } playStatus={ playStatus } modifyPlayStatus={ modifyPlayStatus }
            stepForward={ stepForward } loop={ loop } flipLoop={ flipLoop } />
        <SongTimeline position={ position } duration={ duration } seek={ seek } />
    </div>
);