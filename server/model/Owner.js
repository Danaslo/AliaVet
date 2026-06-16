const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Owner = sequelize.define('Owner', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    documentType: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    documentNumber: {
        type: DataTypes.STRING(50)
    },
    phone: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    postalCode: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    }
}, {
    timestamps: true,
    paranoid: true
}
);
module.exports = Owner;
