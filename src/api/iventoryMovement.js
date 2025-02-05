class ApiInventoryMovement {
  async FindAll(req, res) {
    try {
      const organizationId = 1;
      const { inventoryId } = req.params;
      const inventoryMovements = [{}]; //service.findById(inventoryId)

      res.status(200).send({ inventoryMovements });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async FindById(req, res) {
    try {
      const organizationId = 1;
      const { id, inventoryId } = req.params;
      const inventory = {}; //service.findById(inventoryId)

      res.status(200).send({ inventory });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Create() {
    try {
      const organizationId = 1;
      const userId = 1;
      const { inventoryId } = req.params;
      const { type, amount, productId} = req.body;
      const inventoryMovement = {}; //service.findById(inventoryMovementId)

      res.status(200).send({ inventoryMovement });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Update() {
    try {
      const organizationId = 1;
      const userId = 1;
      const { id, inventoryId } = req.params;
      const { type, amount, productId} = req.body;

      const inventoryMovement = {}; //service.findById(inventoryMovementId)

      res.status(200).send({ inventoryMovement });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Delete() {
    try {
      const organizationId = 1;
      const { id, inventoryId } = req.params;

      const inventoryMovement = {}; //service.findById(inventoryMovementId)

      res.status(200).send({ inventoryMovement });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }
}

module.exports = new ApiInventoryMovement();
