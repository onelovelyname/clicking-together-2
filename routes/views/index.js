var keystone = require('keystone'),
  Student = keystone.list('Student');
 
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);

    Student.model.find()
    .exec(function(error, students) {
      console.log("students: ", students); 
      view.render('index', {students: students});
    });
        
}
