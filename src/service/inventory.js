class ServiceInventory {
  async FindAll(organizationId, transaction) {}

  async FindById(organizationId, id, transaction) {}

  async Create(organizationId, name, description, transaction) {}

  async Update(organizationId, id, name, description, transaction) {}

  async Delete(organizationId, id, transaction) {}
}

module.exports = new ServiceInventory();
