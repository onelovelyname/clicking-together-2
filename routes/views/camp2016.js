var keystone = require('keystone'),
    Project = keystone.list('Project');
 
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    
    Project.model.find()
    .where('year', 2016)
    .populate('student cover')
    .exec(function(error, projects) {
      view.render('camp2016', { projects: projects });
    });
    
}
