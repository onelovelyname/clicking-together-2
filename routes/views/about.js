var keystone = require('keystone'),
    Team = keystone.list('Team');
 
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    
    Team.model.find()
    .exec(function(error, members) {
      view.render('about', { team: members });
    });
    
}
