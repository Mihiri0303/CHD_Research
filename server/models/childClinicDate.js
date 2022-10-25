"use strict";
const { Model, DataTypes, literal } = require("sequelize");

module.exports = (sequelize) => {
	class ChildClinicData extends Model {
		static associate(models) {
			ChildClinicData.belongsTo(models.Child, {
				foreignKey: "childId",
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			});
		}
	}
	ChildClinicData.init(
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
			date: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			isAttended: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			sequelize,
			modelName: "ChildClinicData",
			freezeTableName: true,
		}
	);
	return ChildClinicData;
};
