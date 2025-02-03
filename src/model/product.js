const database = require("../database");
const Organization = require("./organization");

class Product {
  constructor() {
    this.model = database.db.define("products", {
      id: {
        primaryKey: true,
        type: database.db.Sequelize.type.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: database.db.Sequelize.type.STRING,
        allowNull: false,
      },
      description: {
        type: database.db.Sequelize.type.STRING,
        allowNull: false,
      },
      organizationId: {
        type: database.db.Sequelize.type.INTEGER,
        references: {
          model: Organization,
          key: "id",
        },
      },
    });

    this.model.belongsTo(Organization, { foreignKey: "organizationId" });
    Organization.hasMany(this.model, { foreignKey: "organizationId" });
  }
}

module.exports = new Product().model;