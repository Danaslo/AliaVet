const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Pet = sequelize.define('Pet', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    ownerId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'unknown'),
        allowNull: false
    },
    species: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    weight: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(50),
        validate: {
            isIn: [["Active", "Deceased", "Lost", "In Treatment", "Archived"]]
        },
        allowNull: false
    },
    sterilized: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true,
    paranoid: true
});

module.exports = Pet;
