const Pet = require('./Pet');
const Owner = require('./Owner');
const MedicalRecord = require('./MedicalRecord');
const Veterinarian = require('./Veterinarian');
const Appointment = require('./Appointment');

//Relations between Owner and Pet
Owner.hasMany(Pet, {foreignKey: 'ownerId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
Pet.belongsTo(Owner, {foreignKey: 'ownerId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});

//Relations between Pet and MedicalRecord
Pet.hasMany(MedicalRecord, {foreignKey: 'petId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
MedicalRecord.belongsTo(Pet, {foreignKey: 'petId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});

//Relations between Pet and Appointment
Pet.hasMany(Appointment, {foreignKey: 'petId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
Appointment.belongsTo(Pet, {foreignKey: 'petId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});

//Relations between Appointment and Veterinary
Appointment.belongsTo(Veterinarian, {foreignKey: 'vetId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});
Veterinarian.hasMany(Appointment, {foreignKey: 'vetId', onDelete: 'RESTRICT', onUpdate: 'CASCADE'});


module.exports = {
    Pet,
    Owner,
    MedicalRecord,
    Veterinarian,
    Appointment
}