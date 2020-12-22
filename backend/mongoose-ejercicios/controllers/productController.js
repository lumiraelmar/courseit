class ProductController {
  constructor(productService) {
    this.productService = productService;
  }
  async getProducts(req, res) {
    const { page } = req.query;
    let pageNum = 1;
    if (page) {
      pageNum = page;
    }
    const products = await this.productService.getProducts(pageNum);
    return res.json(products);
  }

  async getFreeShipping(req, res) {
    const products = await this.productService.getFreeShipping();
    return res.json(products);
  }

  async getProduct(req, res) {
    const { id } = req.params;
    const product = await this.productService.getProduct(id);
    return res.json(product);
  }

  async addProduct(req, res) {
    const { body } = req;
    const { name, price, category, quantity } = body;

    if (name && price && category && quantity) {
      try {
        await this.productService.addProduct(body);
        return res.status(200).send("producto agregado");
      } catch (err) {
        console.log(err);
        return res.status(500).send("problema en la creacion");
      }
    } else {
      return res.status(400).send("falta información del producto");
    }
  }

  async modifyProduct(req, res) {
    const { body, params } = req;
    const { name, price, category, quantity } = body;
    if (params.id && name && price && category && quantity) {
      try {
        await this.productService.modifyProduct(params.id, body);
        return res.status(200).send("producto modificado");
      } catch (err) {
        console.log(err);
        return res.status(500).send("problema en la modificación");
      }
    } else if (!params.id) {
      return res.status(400).send("olvidaste el id");
    } else {
      return res.status(400).send("olvidaste el información del producto");
    }
  }
}

module.exports = ProductController;
