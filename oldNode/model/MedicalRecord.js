const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const MedicalRecord = sequelize.define('MedicalRecord', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    //Foreign key (id table Pet)
    petId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true
});


module.exports = MedicalRecord;