"use strict";
const { Model, DataTypes, literal } = require("sequelize");

module.exports = (sequelize) => {
	class Child extends Model {
		static associate(models) {
			Child.belongsTo(models.Parent, {
				foreignKey: "parentId",
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			});
		}
	}
	Child.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: DataTypes.UUIDV4,
			},
			name: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			parentId: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			gender: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			totalSiblings: {
				type: DataTypes.INTEGER,
			},
			birthdate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			district: {
				type: DataTypes.TEXT,
			},
			region: {
				type: DataTypes.TEXT,
			},
			hospital: {
				type: DataTypes.TEXT,
			},
			feedingPosition: {
				type: DataTypes.TEXT,
			},
			feedingContact: {
				type: DataTypes.TEXT,
			},
			feedWithinHour: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			CHTest: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			CHTestResults: {
				type: DataTypes.TEXT,
			},
			APGA: {
				type: DataTypes.TEXT,
			},
			birthWeight: {
				type: DataTypes.DOUBLE,
				allowNull: false,
			},
			birthHeight: {
				type: DataTypes.DOUBLE,
				allowNull: false,
			},
			birthHeadCircumference: {
				type: DataTypes.DOUBLE,
				allowNull: false,
			},
			status: {
				type: DataTypes.TEXT,
			},
			viteminKInjected: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			sequelize,
			modelName: "Child",
			freezeTableName: true,
		}
	);
	return Child;
};
