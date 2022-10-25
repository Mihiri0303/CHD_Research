"use strict";
const { Model, DataTypes, literal } = require("sequelize");

module.exports = (sequelize) => {
	class ChildGrowth extends Model {
		static associate(models) {
			ChildGrowth.belongsTo(models.Child, {
				foreignKey: "childId",
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			});
		}
	}
	ChildGrowth.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: DataTypes.UUIDV4,
			},
			childId: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			weight: {
				type: DataTypes.DOUBLE,
			},
			weightCondition: {
				type: DataTypes.TEXT,
			},
			weightGrowth: {
				type: DataTypes.TEXT,
			},
			height: {
				type: DataTypes.DOUBLE,
			},
			heightCondition: {
				type: DataTypes.TEXT,
			},
			thriposha: {
				type: DataTypes.BOOLEAN,
			},
			memo: {
				type: DataTypes.TEXT,
			},
		},
		{
			sequelize,
			modelName: "ChildGrowth",
			freezeTableName: true,
		}
	);
	return ChildGrowth;
};
