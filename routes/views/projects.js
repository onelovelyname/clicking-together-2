var keystone = require('keystone'),
    Project = keystone.list('Project');
 
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    var name = req.params.name;

    Project.model.find()
    .where('title', name)
    .populate('photo student')
    .exec(function(error, project) {
      console.log("project: ", project);
      view.render('project', project[0]);
    });
    
}
