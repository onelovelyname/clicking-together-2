var keystone = require('keystone');
 
exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    
    var context = {
      team: [{
        name: "Hannah Yang",
        title: "Founder",
        linkedin: "https://www.linkedin.com/in/hannahcyang",
        twitter: "https://twitter.com/hannahcyang"
      }, {
        name: "Shiv Tandan",
        title: "Founder",
        website: "https://shivtandan.com/",
        twitter: "https://twitter.com/shivtandan"
      }, {
        name: "Charmaine Poh",
        title: "Founder",
        website: "http://charmainepoh.com/",
        instagram: "https://www.instagram.com/psxcharmaine/"
      }, {
        name: "Gayatri Nair",
        title: "Photographer Teacher",
        website: "http://www.gayatrinair.in/",
        instagram: "https://www.instagram.com/livefromindia/"
      }, {
        name: "Tanushree Bhasin",
        title: "Documentary Filmmaker",
        website: "http://porterfolio.net/tanushree",
        instagram: "https://www.instagram.com/camerawaalebaraati/"
      }, {
        name: "Mahima Dayal Mathur",
        title: "Documentary Filmmaker",
        website: "https://www.facebook.com/basantiaurrahza/info/?entry_point=page_nav_about_item",
        instagram: "https://www.instagram.com/camerawaalebaraati/"
      }]
    }

    view.render('about', context);
    
}
