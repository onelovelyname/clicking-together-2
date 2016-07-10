var keystone = require('keystone'),
    Project = keystone.list('Project'),
    Handlebars = require('express-handlebars');
 
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    var name = req.params.name;

    Project.model.find()
    .where('title', name)
    .populate('photo1 photo2 photo3 photo4 photo5 photo6 photo7 photo8 photo9 photo10 photo11 photo12 photo13 photo14 photo15 photo16 photo16 photo17 photo18 photo19 photo20 photo21 photo22 photo23 photo24 photo25 student1 student2 student3 student4 student5 student6 student7 student8 student9 student10 student11 student12 student13 student14 student15 student16 student17 student18 student19 student20')
    .exec(function(error, project) {
      console.log("project: ", project);
      view.render('project', project[0]);
    });
    
}