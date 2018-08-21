/*VIDEO TOUTUBE API*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
if ($(window).width() > 768) {
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
      width: '555',
      height: '440',
      videoId: 'agS3WnUbZao',
      playerVars: {
        'autoplay': 0,
        'controls': 1,
        'color': 'white',
        'showinfo': 0,
        'rel': 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
}
else {
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
      width: '555',
      height: '200',
      videoId: 'agS3WnUbZao',
      playerVars: {
        'autoplay': 0,
        'controls': 1,
        'color': 'white',
        'showinfo': 0,
        'rel': 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
}

/*video controls*/
function onPlayerReady(event) {
  event.target;
}
function onPlayerStateChange(event) {
  if (event.data==2 || event.data==0) {
    pauseVideo();
    estatus.show();
  }
}
function stopVideo() {
  player.stopVideo();
}
function pauseVideo() {
  player.pauseVideo();
}
function playVideo() {
  player.playVideo();
}
var estatus=$('div#status');
$("svg#Play").click(function(e){
  e.preventDefault();
  playVideo();
  estatus.hide();
});
$("#video_tes1").click(function(e){
  e.preventDefault();
  $('#modalVideo').modal('show');
  $('#modalVideo').css('display','-ms-flexbox');
  $('#modalVideo').css('display','-webkit-flex');
  $('#modalVideo').css('display','flex');
});
$('#modalVideo').on('show.bs.modal', function (e) {
  playVideo();
});
$('#modalVideo').on('hide.bs.modal', function (e) {
  pauseVideo();
});
