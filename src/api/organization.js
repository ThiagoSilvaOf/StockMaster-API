class ApiOrganization {
  async FindById(req, res) {
    try {
      const { id } = req.params;
      const organization = {}; //service.findById(organizationId)

      res.status(200).send({ organization });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Create() {
    try {
      const { id } = req.params;
      const organization = {}; //service.findById(organizationId)

      res.status(200).send({ organization });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Update() {
    try {
      const { id } = req.params;
      const organization = {}; //service.findById(organizationId)

      res.status(200).send({ organization });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Delete() {
    try {
      const { id } = req.params;
      const organization = {}; //service.findById(organizationId)

      res.status(200).send({ organization });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }
}

module.exports = new ApiOrganization();
