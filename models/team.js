var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Team = new keystone.List('Team');
 
Team.add({
    name: { type: Types.Name, initial: true, required: true, index: true },
    title: { type: String, initial: true, required: true, index: true },
    linkedin: { type: String, initial: true },
    website: { type: String, initial: true },
    twitter: { type: String, initial: true },
    instagram: { type: String, initial: true },
    order: { type: Number, required: true, initial: true }
});
 
Team.register();
