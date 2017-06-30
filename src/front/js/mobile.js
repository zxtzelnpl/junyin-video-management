
var vid=document.getElementById('vid').value;
var video=$('#video');
var width=video.width();
var height=parseInt(width*0.7);
var marginTop=-parseInt(height/2);
video.css({
  height:height,
  marginTop:marginTop
});

new YKU.Player('video', {
  styleid: '0',
  client_id: '289dfb4d3a907497',
  vid: vid,
  newPlayer: true,
  autoPlay: true
});