const modelProduct = require("../model/product");

class ServiceProduct {
  async FindAll(organizationId, transaction) {
    return modelProduct.findAll({ where: { organizationId } }, { transaction });
  }

  async FindById(organizationId, id, transaction) {
    return modelProduct.findOne(
      { where: { organizationId, id } },
      { transaction }
    );
  }

  async Create(organizationId, name, description, transaction) {
    if (!organizationId) {
      throw new Error("Organização não encontrada.");
    } else if (!name) {
      throw new Error("Favor Informar campo nome");
    } else if (!description) {
      throw new Error("Favor Informar campo descrição");
    }
    return modelProduct.create(
      { organizationId, name, description },
      { transaction }
    );
  }

  async Update(organizationId, id, name, description, transaction) {
    const oldProduct = await this.FindById(organizationId, id, transaction);

    if (!oldProduct) {
      throw new Error("Produto não encontrado.");
    }

    oldProduct.name = name || oldProduct.name;
    oldProduct.description = description || oldProduct.description;

    return oldProduct.save({ transaction });
  }

  async Delete(organizationId, id, transaction) {
    const oldProduct = await this.FindById(organizationId, id, transaction);

    if (!oldProduct) {
      throw new Error("Produto não encontrado.");
    }

    oldProduct.destroy({ transaction });
  }
}

module.exports = new ServiceProduct();
