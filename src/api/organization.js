class ApiOrganization {
  async FindById(req, res) {
    try {
      const { id } = req.params;
      const organization = { id }; //service.findById(organizationId)

      res.status(200).send({ organization });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Create() {
    try {
      const { name, address, phone, email } = req.body;
      const organization = {}; //service.findById(organizationId)

      res.status(200).send({ organization });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Update() {
    try {
      const { id } = req.params;
      const { name, address, phone, email } = req.body;
      const organization = { id, name, address, phone, email }; //service.findById(organizationId)

      res.status(200).send({ organization });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Delete() {
    try {
      const { id } = req.params;
      const organization = { id }; //service.findById(organizationId)

      res.status(200).send({ organization });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }
}

module.exports = new ApiOrganization();
