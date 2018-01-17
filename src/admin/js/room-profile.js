'use strict'

function delFun (e) {
  console.log($(this).data('id'))
  let id = $(this).data('id')
  let url = '/admin/video-delete/'+id
  let className = '.item-id-'+id
  $.ajax({
    url: url,
    method:'GET',
    dataType:'json',
    success:function(data){
      if(data.state==='success'){
        $(className).remove()
      }
    },
    error:function(err){
      console.log(err)
    }
  })
}

$('.del').on('click', delFun)