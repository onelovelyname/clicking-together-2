var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Student = new keystone.List('Student');
 
Student.add({
    name: { type: String, initial: true, required: true, index: true },
    school: { type: String, initial: true },
    photo: { type: String, initial: true }
});
 
Student.register();
