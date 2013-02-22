exports.comment = function(req, res){
  console.log("Posting to"+req.body.fbid)
  req.facebook.api('/'+req.body.fbid+'/comments', 'POST', {'message': req.body.comment}, function(err, stuff) {
    if (err) console.log('error');
    res.redirect('/');
  });
}