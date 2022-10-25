"use strict";
const { Model, DataTypes, literal } = require("sequelize");

module.exports = (sequelize) => {
	class ChildVacination extends Model {
		static associate(models) {
			ChildVacination.belongsTo(models.Child, {
				foreignKey: "childId",
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			});
		}
	}
	ChildVacination.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: literal("(uuid())"),
			},
			childId: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			vacinationType: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			batchNo: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			followingImmunzation: {
				type: DataTypes.TEXT,
			},
			bcgScar: {
				type: DataTypes.BOOLEAN,
			},
		},
		{
			sequelize,
			modelName: "ChildVacination",
			freezeTableName: true,
		}
	);
	return ChildVacination;
};
