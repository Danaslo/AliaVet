const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Veterinarian = sequelize.define('Veterinarian',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },  
    lastName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        validate: {
            isEmail: true
        }
    }
},{
    timestamps: true,
    paranoid: true
});

module.exports = Veterinarian;