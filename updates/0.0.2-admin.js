var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {
    
    new User.model({
      name: { first: 'Hannah', last: 'Yang' },
      email: 'yanghannah530@gmail.com',
      password: 'admin',
      canAccessKeystone: true
    }).save(done);
    
};
