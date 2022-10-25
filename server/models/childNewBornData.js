"use strict";
const { Model, DataTypes, literal } = require("sequelize");

module.exports = (sequelize) => {
	class ChildNewBornData extends Model {
		static associate(models) {
			ChildNewBornData.belongsTo(models.Child, {
				foreignKey: "childId",
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			});
		}
	}
	ChildNewBornData.init(
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
			skinColor: {
				type: DataTypes.TEXT,
			},
			eyes: {
				type: DataTypes.TEXT,
			},
			birthCode: {
				type: DataTypes.TEXT,
			},
			breastfeedingOnly: {
				type: DataTypes.BOOLEAN,
			},
			breastfeedingPosition: {
				type: DataTypes.TEXT,
			},
			breastfeedingContact: {
				type: DataTypes.TEXT,
			},
		},
		{
			sequelize,
			modelName: "ChildNewBornData",
			freezeTableName: true,
		}
	);
	return ChildNewBornData;
};
