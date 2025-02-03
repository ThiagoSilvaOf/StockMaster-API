const { Sequelize } = require("sequelize");

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.db = new Sequelize({
      database: "inventory_system",
      host: "localhost",
      username: "Thiago",
      password: "admin",
      dialect: "mysql",
    });
  }
}

module.exports = new Database();
