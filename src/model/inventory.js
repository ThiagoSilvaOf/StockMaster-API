const database = require("../database");
const Organization = require("./organization");

class Inventory {
  constructor() {
    this.model = database.db.define("inventories", {
      id: {
        primaryKey: true,
        type: database.db.Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      organizationId: {
        type: database.db.Sequelize.INTEGER,
        references:{
          model: Organization,
          key:"id"
        }
      },
    });
    
    this.model.belongsTo(Organization, {foreignKey:"organizationId"})
    Organization.hasMany(this.model, {foreignKey:"organizationId"})
  }
}

module.exports = new Organization().model;
