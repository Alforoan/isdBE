const { DataTypes } = require('sequelize');
let sequelize;
const Objective = providedSequelize => {
    sequelize = providedSequelize || require('../config/database');
    return sequelize.define('Objective', {
        terminal_objective: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        enabling_objective: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        created_at: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    });
};

module.exports = Objective;
