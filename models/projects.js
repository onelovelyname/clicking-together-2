var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Project = new keystone.List('Project');
 
Project.add({
    title: { type: String, initial: true, required: true, index: true },
    description: { type: String, initial: true },
    student: { type: Types.Relationship, ref: 'Student', initial: true },
    photos: { type: Types.Relationship, ref: 'Photo', initial: true }
});
 
Project.register();
