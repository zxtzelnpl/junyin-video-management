$('#videoIdBox').on('click','.videoId',function(e){
  var vid=$(e.target).data('vid');
  var vidNow=$('#videoId').attr('src');
  if(vid===vidNow){
    return console.log('视频相同')
  }
  $('#videoId').attr('src',vid)
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
      if(data.state==='success'){
        console.log(data);
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