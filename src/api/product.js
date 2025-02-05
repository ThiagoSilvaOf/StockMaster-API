class ApiProduct {
  async FindAll(req, res) {
    try {
      const products = [{}]; //service.findById(productId)

      res.status(200).send({ products });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async FindById(req, res) {
    try {
      const { id } = req.params;
      const product = {}; //service.findById(productId)

      res.status(200).send({ product });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Create() {
    try {
      const { id } = req.params;
      const product = {}; //service.findById(productId)

      res.status(200).send({ product });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Update() {
    try {
      const { id } = req.params;
      const product = {}; //service.findById(productId)

      res.status(200).send({ product });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Delete() {
    try {
      const { id } = req.params;
      const product = {}; //service.findById(productId)

      res.status(200).send({ product });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }
}

module.exports = new ApiProduct();