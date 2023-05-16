const User = require('./User');
const Region = require('./Region');
const Comuna = require('./Comuna');
const Candidato = require('./Candidato')



Comuna.belongsTo(Region); 
Region.hasMany(Comuna);

User.belongsTo(Region); 
Region.hasMany(User);

User.belongsTo(Comuna); 
Comuna.hasMany(User);

User.belongsTo(Candidato); 
Candidato.hasMany(User);
