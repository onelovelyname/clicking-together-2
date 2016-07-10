var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Project = new keystone.List('Project');
 
Project.add({
    title: { type: String, initial: true, required: true, index: true },
    year: { type: Number, required: true, initial: true },
    description: { type: String, initial: true },
    students: { 
      1: { type: Types.Relationship, ref: 'Student', initial: true },
      2: { type: Types.Relationship, ref: 'Student', initial: true },
      3: { type: Types.Relationship, ref: 'Student', initial: true },
      4: { type: Types.Relationship, ref: 'Student', initial: true },
      5: { type: Types.Relationship, ref: 'Student', initial: true },
      6: { type: Types.Relationship, ref: 'Student', initial: true },
      7: { type: Types.Relationship, ref: 'Student', initial: true },
      8: { type: Types.Relationship, ref: 'Student', initial: true },
      9: { type: Types.Relationship, ref: 'Student', initial: true },
      10: { type: Types.Relationship, ref: 'Student', initial: true },
      11: { type: Types.Relationship, ref: 'Student', initial: true },
      12: { type: Types.Relationship, ref: 'Student', initial: true },
      13: { type: Types.Relationship, ref: 'Student', initial: true },
      14: { type: Types.Relationship, ref: 'Student', initial: true },
      15: { type: Types.Relationship, ref: 'Student', initial: true },
      16: { type: Types.Relationship, ref: 'Student', initial: true },
      17: { type: Types.Relationship, ref: 'Student', initial: true },
      18: { type: Types.Relationship, ref: 'Student', initial: true },
      19: { type: Types.Relationship, ref: 'Student', initial: true },
      20: { type: Types.Relationship, ref: 'Student', initial: true }
    },
    photos: { 
      1: { type: Types.Relationship, ref: 'Photo', initial: true },      
      2: { type: Types.Relationship, ref: 'Photo', initial: true },
      3: { type: Types.Relationship, ref: 'Photo', initial: true },
      4: { type: Types.Relationship, ref: 'Photo', initial: true },
      5: { type: Types.Relationship, ref: 'Photo', initial: true },
      6: { type: Types.Relationship, ref: 'Photo', initial: true },
      7: { type: Types.Relationship, ref: 'Photo', initial: true },
      8: { type: Types.Relationship, ref: 'Photo', initial: true },
      9: { type: Types.Relationship, ref: 'Photo', initial: true },
      10: { type: Types.Relationship, ref: 'Photo', initial: true },
      11: { type: Types.Relationship, ref: 'Photo', initial: true },
      12: { type: Types.Relationship, ref: 'Photo', initial: true },
      13: { type: Types.Relationship, ref: 'Photo', initial: true },
      14: { type: Types.Relationship, ref: 'Photo', initial: true },
      15: { type: Types.Relationship, ref: 'Photo', initial: true },
      16: { type: Types.Relationship, ref: 'Photo', initial: true },
      17: { type: Types.Relationship, ref: 'Photo', initial: true },
      18: { type: Types.Relationship, ref: 'Photo', initial: true },
      19: { type: Types.Relationship, ref: 'Photo', initial: true },
      20: { type: Types.Relationship, ref: 'Photo', initial: true },
      21: { type: Types.Relationship, ref: 'Photo', initial: true },
      22: { type: Types.Relationship, ref: 'Photo', initial: true },
      23: { type: Types.Relationship, ref: 'Photo', initial: true },
      24: { type: Types.Relationship, ref: 'Photo', initial: true },
      25: { type: Types.Relationship, ref: 'Photo', initial: true }
    }
});
 
Project.register();
