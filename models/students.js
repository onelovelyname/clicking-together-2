var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Student = new keystone.List('Student');
 
Student.add({
    name: { type: Types.Name, initial: true, required: true, index: true },
    school: { type: String, initial: true, required: true },
});
 
Student.register();
