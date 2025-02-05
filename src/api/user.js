class ApiUser {
  async FindAll(req, res) {
    try {
      const organizationId = 1;
      const users = [{}]; //service.findById(userId)
 
      res.status(200).send({ users });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async FindById(req, res) {
    try {
      const organizationId = 1;
      const { id } = req.params;
      const user = {}; //service.findById(userId)

      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Create() {
    try {
      const organizationId = 1;
      const { name, email, password, role } = req.body;
      const user = {}; //service.findById(userId)

      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Update() {
    try {
      const organizationId = 1;
      const { id } = req.params;
      const { name, email, password, role } = req.body;
      const user = {}; //service.findById(userId)

      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }

  async Delete() {
    try {
      const organizationId = 1;
      const { id } = req.params;
      const user = {}; //service.findById(userId)

      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ mensagem: error.message });
    }
  }
}

module.exports = new ApiUser();
