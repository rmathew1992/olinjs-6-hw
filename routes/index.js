exports.index = function(req, res){
  req.facebook.api('/435/photos', function(err, data){
    res.render('index', { title: 'Photos', data: data.data });
  });
};