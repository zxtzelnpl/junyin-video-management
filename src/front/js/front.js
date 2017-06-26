$('.videoId').click(function(e){
  var vid=$(e.target).data('vid');
  var title=$(e.target).html();
  var vidNow=$('#videoId').attr('src');
  if(vid===vidNow){return alert('killme')}
  $('#videoId').attr('src',vid)
});

$('#openList').click(function(){
  $('#videoIdBox').show()
});

$('#close').click(function(){
  $('#videoIdBox').hide()
});