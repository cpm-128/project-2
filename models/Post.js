const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		song_title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		song_url: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isURL: true,
			},
		},
		artist_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// album_name allows false value. Independent artists are likely to release songs and demos without an assigned album
		album_name: {
			type: DataTypes.STRING,
		},
		poster_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'user',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'post',
	}
);

module.exports = Post