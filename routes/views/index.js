var keystone = require('keystone'),
  Student = keystone.list('Student');
 
exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    view.render('index');
};
