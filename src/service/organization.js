const modelOrganization = require("../model/organization");

class ServiceOrganization {
  async FindById(id, transaction) {
    return await modelOrganization.findByPk(id, { transaction });
  }

  async Create(name, address, phone, email, transaction) {
    if (!name) {
      throw new Error("Favor informar o campo nome.");
    } else if (!address) {
      throw new Error("Favor informar o campo endereço.");
    } else if (!phone) {
      throw new Error("Favor informar o campo telefone.");
    } else if (!email) {
      throw new Error("Favor informar o campo email.");
    }

    const organization = await modelOrganization.create(
      { name, address, phone, email },
      { transaction }
    );
    return organization;
  }

  async Update(id, name, address, phone, email, transaction) {
    const organization = await this.FindById(id, transaction);
    if(!organization){
      throw new Error("Organização não encontrada.");
    }

    organization.name = name || organization.name
    organization.address = address || organization.address
    organization.phone = phone || organization.phone
    organization.email = email || organization.email

    return organization.save({ transaction })
  }

  async Delete(id, transaction) {
    const organization = await this.FindById(id, transaction);
    if(!organization){
      throw new Error("Organização não encontrada.");
    }
    
    organization.destroy({transaction})
  }
}

module.exports = new ServiceOrganization();
