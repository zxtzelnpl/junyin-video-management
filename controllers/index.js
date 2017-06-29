var VideoModel = require('../models/video.js');
var RoomModel = require('../models/room.js');

var pageSize = 4;

exports.index = function (req, res, next) {
  var room = req.params.room;
  RoomModel
    .findOne({name: room})
    .exec()
    .then(function (room) {
      if (room) {
        return VideoModel
          .find({room: room._id})
          .limit(pageSize)
          .exec()
      }
      else {
        return next('此房间无资源')
      }
    })
    .then(function (videos) {
      res.render('index', {
        title: '往期视频回顾',
        room: room,
        videos: videos
      })
    })
    .catch(function (err) {
      next(err)
    })

};

exports.more = function (req, res, next) {
  var page = req.query.page;
  var room_name = req.query.room;
  RoomModel
    .findOne({name: room_name})
    .exec()
    .then(function (room) {
      console.log(room);
      if (room) {
        return VideoModel
          .find({room:room._id})
          .skip(page * pageSize)
          .limit(pageSize)
          .exec()
      }
      else {
        return next('无此房间')
      }
    })
    .then(function (videos) {
      var jsonObj;
      if(videos.length>0){
        page = parseInt(page) + 1;
        jsonObj={
          state:'success',
          videos,
          page
        }
      }else{
        jsonObj={
          state:'fail',
          err:'所有视频已经加载完毕'
        }
      }
      res.json(jsonObj)
    })
    .catch(function (err) {
      next(err)
    })
};