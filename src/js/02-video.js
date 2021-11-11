import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player(document.querySelector("iframe"));

const currentTimePlayer = localStorage.getItem('videoplayer-current-time');

if (currentTimePlayer) { player.setCurrentTime(currentTimePlayer) };

player.on('timeupdate', throttle(function () {
    player.getCurrentTime().then(function (seconds) { localStorage.setItem('videoplayer-current-time', seconds) });
},1000));
