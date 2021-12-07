// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: 'category_id'
}),

Product.belongsTo(Category, {
  foreignKey: 'category_id',
}),
// Products belongsTo Category

// Categories have many Products
Product.belongsToMany(Tag, {
  through: ProductTag})
// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
