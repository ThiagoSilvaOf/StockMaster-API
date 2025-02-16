const modelInventory = require("../model/iventoryMovement");
const product = require("../model/product");
const movementTypes = ["out", "in"]

class ServiceInventoryMovement {
  async FindAll(inventoryId, transaction) {
    return modelInventory.findAll(
      { where: { inventoryId }, include: { model: product } },
      { transaction }
    );
  }

  async FindById(inventoryId, id, transaction) {
    return modelInventory.findOne(
      { where: { inventoryId, id } },
      { transaction }
    );
  }

  async Create(inventoryId, userId, type, amount, productId, transaction) {
    if (!inventoryId) {
      throw new Error("Favor Informar campo inventoryId");
    }else if (!userId) {
      throw new Error("Favor Informar campo userId");
    }else if (!type || !movementTypes.includes(type)) {
      throw new Error("Favor Informar o tipo de movimentação corretamente");
    }else if (!amount) {
      throw new Error("Favor Informar campo quantidade");
    } else if (!productId) {
      throw new Error("Favor Informar campo produto");
    }
    

    return modelInventory.create(
      { inventoryId, userId, type, amount, productId },
      { transaction }
    );
  }

  async Update(inventoryId, id, type, amount, transaction) {
    const oldInvetory = await this.FindById(inventoryId, id, transaction);

    if (!oldInvetory) {
      throw new Error("Estoque não encontrado.");
    }

    if (type && !movementTypes.includes(type)) {
      throw new Error("Favor Informar o tipo de movimentação corretamente");
    }

    oldInvetory.type = type || oldInvetory.type;
    oldInvetory.amount = amount || oldInvetory.amount;

    return oldInvetory.save({ transaction });
  }

  async Delete( inventoryId, id, transaction) {
    const oldInvetory = await this.FindById(inventoryId, id, transaction);

    if (!oldInvetory) {
      throw new Error("Estoque não encontrado.");
    }

    await oldInvetory.destroy({ transaction });
  }
}

module.exports = new ServiceInventoryMovement();
