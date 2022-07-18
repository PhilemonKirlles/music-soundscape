// import all models
const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'author_id',
});

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'author_id',
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
});

Vote.belongsTo(User, {
  foreignKey: 'author_id',
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Vote, {
  foreignKey: 'author_id',
});

Post.hasMany(Vote, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'author_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Comment, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User, Post, Vote, Comment,
};
