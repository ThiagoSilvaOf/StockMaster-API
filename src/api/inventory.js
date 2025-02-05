class ApiInventory {
  async FindAll(req, res) {
    try {
      const organizationId = 1;
      const inventories = [{}]; //service.findById(inventoryId)

      res.status(200).send({ inventories });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async FindById(req, res) {
    try {
      const organizationId = 1;
      const { id } = req.params;
      const inventory = {}; //service.findById(inventoryId)

      res.status(200).send({ inventory });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Create() {
    try {
      const organizationId = 1;
      const { name } = req.body;
      const inventory = {}; //service.findById(inventoryId)

      res.status(200).send({ inventory });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Update() {
    try {
      const organizationId = 1;
      const { id } = req.params;
      const { name } = req.body;
      const inventory = {}; //service.findById(inventoryId)

      res.status(200).send({ inventory });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Delete() {
    try {
      const organizationId = 1;
      const { id } = req.params;
      const inventory = {}; //service.findById(inventoryId)

      res.status(200).send({ inventory });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }
}

module.exports = new ApiInventory();