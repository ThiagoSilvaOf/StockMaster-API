const database = require("../database");
const database = require("../database");
const Inventory = require("./inventory");
const Organization = require("./organization");
const Product = require("./product");
const User = require("./user");

class InventoryMovement {
  constructor() {
    this.model = database.db.define("inventory_movements", {
      id: {
        primaryKey: true,
        type: database.db.Sequel.INTEGER,
        autoIncrement: true,
      },
      type: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: database.db.Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: database.db.Sequelize.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      productId: {
        type: database.db.Sequelize.type.INTEGER,
        references: {
          model: Product,
          key: "id",
        },
      },
      inventoryId: {
        type: database.db.Sequelize.type.INTEGER,
        references: {
          model: Inventory,
          key: "id",
        },
      },
    });

    this.model.belongsTo(User, { foreignKey: "userId" });
    User.hasMany(this.model, { foreignKey: "userId" });

    this.model.belongsTo(Product, { foreignKey: "productId" });
    Product.hasMany(this.model, { foreignKey: "productId" });

    this.model.belongsTo(Inventory, { foreignKey: "inventoryId" });
    Inventory.hasMany(this.model, { foreignKey: "inventoryId" });
  }
}

module.exports = new InventoryMovement().model;
