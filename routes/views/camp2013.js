var keystone = require('keystone'),
    Project = keystone.list('Project');

exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    
    Project.model.find()
    .where('year', 2013)
    .populate('cover')
    .exec(function(error, projects) {
      console.log("projects: ", projects);
      view.render('camp2013', { projects: projects });
    });
    
}
