const modelUser = require("../model/user");
const bcrypt = require("bcrypt");

const roles = ["admin", "employee"]
const salt = 12;

class ServiceUser {
  async FindByAll(organizationId, transaction) {
    return await modelUser.findAll({ where: { organizationId }, transaction });
  }

  async FindById(organizationId, id, transaction) {
    return await modelUser.findOne({ where: { organizationId, id }, transaction });
  }

  async Create(organizationId, name, email, password, role, transaction) {
    if(!organizationId){
      throw new Error("Favor informar a organização.");
    } else if(!name){
      throw new Error("Favor informar o nome.");
    } else if (!email) {
      throw new Error("Favor informar o email.");
    } else if (!password) {
      throw new Error("Favor informar a senha.");
    }else if (!role || !roles.includes(role)) {
      throw new Error("Favor informar a permissão corretamente.");
    }

    const hashPass = await bcrypt.hash(password, salt)

    const user = await modelUser.create(
      {organizationId, name, email, password: hashPass, role},
      {transaction}
    );

    return user;
    
  }

  async Update(organizationId, id, name, email, password, role, transaction) {
    const oldUser = await this.FindById(organizationId, id, transaction)
    
    if (!oldUser) {
      throw new Error("Usuário não encontrado.");
    }
    
    if (role && !roles.includes(role)) {
      throw new Error("Favor informar a permissão corretamente.");
    }

    if(role && oldUser.role === "admin"){
      oldUser.role = role;
    } 

    oldUser.name = name ||  oldUser.name;
    oldUser.email = email || oldUser.email;
    oldUser.password = password ? await bcrypt.hash(password, salt) : oldUser.password;

    return await oldUser.save({transaction});
  }

  async Delete(organizationId, id, transaction) {
    const deletedUser = await this.FindById(organizationId, id, transaction)
    
    if (!deletedUser) {
      throw new Error("Usuário não encontrado.");
    }
    
    await deletedUser.destroy({transaction})
  }

  // async Login(){}
  // asuync Verify(){}
}

module.exports = new ServiceUser();
