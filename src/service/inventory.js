const getProductMovements = require("../fns/get-product-movements");
const modelInventory = require("../model/inventory")
const serviceInventoryMovement = require("./iventoryMovement");

class ServiceInventory{
  async FindAll(organizationId, transaction) {
    return modelInventory.findAll({ where: { organizationId } }, { transaction });
  }

  async FindById(organizationId, id, transaction) {
    const inventory = await modelInventory.findOne(
      { where: { organizationId, id } },
      { transaction }
    );
    if(!inventory){
      throw new Error("Estoque não encontrado")
    }

    const movements = await serviceInventoryMovement.FindAll(inventory.id)

    const result = getProductMovements(movements)

    return {...inventory.dataValues, ...result }
  }

  async Create(organizationId, name, transaction) {
    if (!organizationId) {
      throw new Error("Organização não encontrada.");
    } else if (!name) {
      throw new Error("Favor Informar campo nome")
    }

    return modelInventory.create( { organizationId, name }, {transaction})
  }

  async Update(organizationId, id, name, transaction) {
    const oldInvetory = await modelInventory.findOne(
      { where: { organizationId, id } },
      { transaction }
    );

    if (!oldInvetory) {
      throw new Error("Estoque não encontrado.");
    }

    oldInvetory.name = name || oldInvetory.name;

    return oldInvetory.save({ transaction });
  }

  async Delete(organizationId, id, transaction) {
    const oldInvetory = await modelInventory.findOne(
      { where: { organizationId, id } },
      { transaction }
    );

    if (!oldInvetory) {
      throw new Error("Estoque não encontrado.");
    }

    await oldInvetory.destroy({transaction})
  }

}

module.exports = new ServiceInventory();
