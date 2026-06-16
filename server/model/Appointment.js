const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    //Foreign key(pet - id)
    petId: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    //Foreign key( veterinary - id)
    vetId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    reason: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        validate: {
            isIn: [['scheduled', 'completed', 'cancelled', 'not shown']]
        },
        allowNull: false
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    }
}, {
    timestamps: true,
    paranoid: true
})

module.exports = Appointment;