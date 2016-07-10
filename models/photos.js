var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Photo = new keystone.List('Photo');
 
Photo.add({
    link: { type: String, initial: true, required: true },
    student: { type: Types.Relationship, ref: 'Student', initial: true },
    caption: { type: String, initial: true }
});
 
Photo.register();