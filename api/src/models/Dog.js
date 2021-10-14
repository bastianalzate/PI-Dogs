const { DataTypes } = require("sequelize");

module.exports = sequelize => {
    sequelize.define("Dog", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alturaMax: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        alturaMin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pesoMax: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pesoMin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
}