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
    extname: '.hbs',
    helpers: { if_contains: function(a, b, opts) {
        console.log("a: ", a);
        if (a && a.includes(b)) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    }},
  }).engine,
  
  'auto update': true,
  'mongo': process.env.MONGODB_URI || "mongodb://localhost/clicking-together", 
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'UoS(g,yj2WD"b#WNB%drWesp-P4S'
  
});
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();