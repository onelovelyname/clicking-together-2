var keystone = require('keystone'),
    Team = keystone.list('Team');
 
exports = module.exports = function(done) {

    new Team.model({
      name: { first: 'Hannah', last: 'Yang' },
      title: "Founder",
      linkedin: "https://www.linkedin.com/in/hannahcyang",
      twitter: "https://twitter.com/hannahcyang",
      order: 1
    }).save(done);

    new Team.model({
      name: { first: 'Shiv', last: 'Tandan' },
      title: "Founder",
      website: "https://shivtandan.com/",
      twitter: "https://twitter.com/shivtandan",
      order: 2
    }).save(done);

    new Team.model({
      name: { first: 'Charmaine', last: 'Poh' },
      title: "Founder",
      website: "http://charmainepoh.com/",
      instagram: "https://www.instagram.com/psxcharmaine/",
      order: 3
    }).save(done);

    new Team.model({
      name: { first: 'Gayatri', last: 'Nair' },
      title: "Photographer Teacher",
      website: "http://www.gayatrinair.in/",
      instagram: "https://www.instagram.com/livefromindia/",
      order: 4
    }).save(done);

    new Team.model({
      name: { first: 'Tanushree', last: 'Bhasin' },
      title: "Documentary Filmmaker",
      website: "http://porterfolio.net/tanushree",
      instagram: "https://www.instagram.com/camerawaalebaraati/",
      order: 5
    }).save(done);

    new Team.model({
      name: { first: 'Mahima Dayal', last: 'Mathur' },
      title: "Documentary Filmmaker",
      website: "https://www.facebook.com/basantiaurrahza/info/?entry_point=page_nav_about_item",
      instagram: "https://www.instagram.com/camerawaalebaraati/",
      order: 6
    }).save(done);
    
};
