"use strict";
const { Model, DataTypes, literal } = require("sequelize");

module.exports = (sequelize) => {
	class Parent extends Model {
		static associate(models) {}
	}
	Parent.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: literal("(uuid())"),
			},
			motherName: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			fatherName: {
				type: DataTypes.TEXT,
			},
			motherNIC: {
				type: DataTypes.TEXT,
			},
			fatherNIC: {
				type: DataTypes.TEXT,
			},
			address: {
				type: DataTypes.TEXT,
			},
			contact: {
				type: DataTypes.TEXT,
			},
		},
		{
			sequelize,
			modelName: "Parent",
			freezeTableName: true,
		}
	);
	return Parent;
};
