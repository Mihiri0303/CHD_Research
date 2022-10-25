"use strict";
const { Model, DataTypes, literal } = require("sequelize");

module.exports = (sequelize) => {
	class ChildAttentionReason extends Model {
		static associate(models) {
			ChildAttentionReason.belongsTo(models.Child, {
				foreignKey: "childId",
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			});
		}
	}
	ChildAttentionReason.init(
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
			reason: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "ChildAttentionReason",
			freezeTableName: true,
		}
	);
	return ChildAttentionReason;
};
