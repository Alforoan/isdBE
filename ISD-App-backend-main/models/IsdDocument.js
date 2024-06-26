const { DataTypes } = require('sequelize');

let sequelize;

const IsdDocument = providedSequelize => {
	sequelize = providedSequelize || require('../config/database');

	const IsdDocumentModel = sequelize.define('IsdDocument', {
		document_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		organization_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});

	IsdDocumentModel.associate = models => {
		IsdDocumentModel.belongsTo(models.Organization, {
			foreignKey: 'organization_id',
		});
	};

	return IsdDocumentModel;
};

module.exports = IsdDocument;
