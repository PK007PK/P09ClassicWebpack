import HandleBurgerMenu from './HandleBurgerMenu/HandleBurgerMenu';
import AddSmScrollToMainMenu from './AddSmScrollToMainMenu/AddSmScrollToMainMenu';
import BackgroundLazyLoad from './BackgroundLazyLoad/BackgroundLazyLoad';

import Glide from '@glidejs/glide';

HandleBurgerMenu();
// AddSmScrollToMainMenu();
BackgroundLazyLoad();

new Glide('.glide').mount();
// AOS.init({
//   startEvent: 'load',
// });

// var videowrap = document.getElementsByClassName('banner__video-wrap')[0];
// videowrap.addEventListener('click', function(event) {
//   if (event.target == document.getElementsByClassName('videocoverimage')[0]) {
//     var video = document.createElement('iframe');
//     video.setAttribute('src', videowrap.dataset.src);
//     video.height = '100%';
//     video.width = '100%';
//     video.style.borderWidth = '0';
//     event.target.parentElement.replaceChild(video, event.target);
//   }
// });

// var videowrap = document.getElementsByClassName('banner__video-wrap')[0];
// videowrap.addEventListener('click', function(event) {
//   if (event.target == document.getElementsByClassName('videocoverimage')[0]) {
//     var video = document.createElement('iframe');
//     video.setAttribute('src', videowrap.dataset.src);
//     video.height = '100%';
//     video.width = '100%';
//     video.style.borderWidth = '0';
//     event.target.parentElement.replaceChild(video, event.target);
//   }
// });

// Variables
// var player,
//   card = document.querySelector('.card'),
//   play = document.querySelector('.card-play'),
//   video = document.querySelector('.card-video');

// Shine effect
// card.onmousemove = function(e) {
//   const x = e.pageX - card.offsetLeft;
//   const y = e.pageY - card.offsetTop;

//   card.style.setProperty('--x', x + 'px');
//   card.style.setProperty('--y', y + 'px');
// };

// Youtube API
// function onYouTubePlayerAPIReady() {
//   player = new YT.Player('video', {
//     events: {
//       onReady: onPlayerReady,
//     },
//   });
// }

// Player Ready
// function onPlayerReady(event) {
//   console.log('abc');
//   play.addEventListener('click', function() {
//     card.classList.add('video-is-open');
//     setTimeout(function() {
//       video.style.display = 'block';
//       player.playVideo();
//     }, 500);
//   });
// }

// Inject YouTube API script
// var tag = document.createElement('script');
// tag.src = '//www.youtube.com/player_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
