var keystone = require('keystone');
var handlebars = require('express-handlebars');

keystone.init({
  
  'name': 'Clicking Together',
  'brand': 'Clicking Together', 
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],
  
  'views': 'templates/views',
  'view engine': 'hbs',
  'custom engine': handlebars.create({
    layoutsDir: 'templates/views/layouts',
    partialsDir: 'templates/views/partials',
    defaultLayout: 'default',
    extname: '.hbs'
  }).engine,
  
  'auto update': true,
  'mongo': process.env.MONGODB_URI || "mongodb://localhost/clicking-together", 
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'UoS(g,yj2WD"b#WNB%drWesp-P4S'
  
});

console.log("Hello");
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();
