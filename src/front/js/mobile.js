
var vid=document.getElementById('vid').value;

new YKU.Player('video', {
  styleid: '0',
  client_id: '289dfb4d3a907497',
  vid: vid,
  newPlayer: true,
  autoPlay: true
});