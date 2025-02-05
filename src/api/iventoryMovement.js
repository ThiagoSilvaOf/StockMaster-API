class ApiInventoryMovement {
  async FindAll(req, res) {
    try {
      const inventoryMovements = [{}]; //service.findById(inventoryId)

      res.status(200).send({ inventoryMovements });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async FindById(req, res) {
    try {
      const { id } = req.params;
      const inventory = {}; //service.findById(inventoryId)

      res.status(200).send({ inventory });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Create() {
    try {
      const { id } = req.params;
      const inventoryMovement = {}; //service.findById(inventoryMovementId)

      res.status(200).send({ inventoryMovement });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Update() {
    try {
      const { id } = req.params;
      const inventoryMovement = {}; //service.findById(inventoryMovementId)

      res.status(200).send({ inventoryMovement });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Delete() {
    try {
      const { id } = req.params;
      const inventoryMovement = {}; //service.findById(inventoryMovementId)

      res.status(200).send({ inventoryMovement });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }
}

module.exports = new ApiInventoryMovement();