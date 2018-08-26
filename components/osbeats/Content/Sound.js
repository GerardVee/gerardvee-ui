import Sound from 'react-sound';

const mp3file = (title) => `https://www.bensound.com/bensound-music/bensound-${ title.replace(/[^a-zA-Z]/g, '').toLowerCase() }.mp3`;

export default ({ songDetails, playStatus, position, volume, loop, onLoadingMP3, setPosition, setStop }) => (
    <Sound
        url={ mp3file(songDetails.title || '') }
        playStatus={ playStatus }
        position={ position }
        volume={ volume }
        playbackRate={ 1 }
        loop={ loop }
        onLoading={ (obj) => onLoadingMP3(obj) }
        onPlaying={ ({ position }) => setPosition({ position }) }
        onFinishedPlaying={ () => setStop() } />
);