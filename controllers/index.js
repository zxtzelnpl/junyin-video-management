var VideoModel = require('../models/video.js');
var RoomModel = require('../models/room.js');

exports.index = function (req, res, next) {
  var room = req.params.room;
  RoomModel
    .findOne({name: room})
    .exec()
    .then(function (room) {
      if (room) {
        return VideoModel.find({room: room._id}).exec()
      } else {
        return next('页面错误')
      }
    })
    .then(function(videos){
      res.render('index',{
        title:'往期视频回顾',
        videos:videos
      })
    })
    .catch(function(err){
      next(err)
    })

};