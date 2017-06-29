function videoStrGenerate(video){
  return '<div class="videoId" data-vid="http://player.youku.com/embed/'
    +video.vid
    +'">'
    +video.title
    +'<span class="time">'
    +moment(video.meta.createAt).format('YYYY年MM月DD日')
    +'</span></div>'
}



$('#videoIdBox').on('click','.videoId',function(e){
  var vid=$(e.target).data('vid');
  var vidNow=$('#videoId').attr('src');
  if(vid===vidNow){
    return console.log('视频相同')
  }
  $('#videoId').attr('src',vid);
  window.scrollTo(0,0);
});

$('#more').on('click',function(){
  var page=$('#page').val();
  var room=$('#room').val();
  $.ajax({
    url:'/more',
    method:'GET',
    data:{
      page:page,
      room:room
    },
    success:function(data){
      console.log(data);
      if(data.state==='success'){
        var htmlStr='';
        data.videos.forEach(function(video){
          htmlStr+=videoStrGenerate(video)
        });
        $('#videoIdBox').append(htmlStr);
        $('#page').val(data.page);
      }
      else{
        alert(data.err)
      }
    },
    error:function(){
      alert('链接错误，请稍后重试')
    }
  })
});