class ProductController {
  constructor(productService) {
    this.productService = productService;
  }
  async getProducts(req, res) {
    const products = await this.productService.getProducts();
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

    await this.productService.addProduct(body);
    return res.status(200).json("producto agregado");
  }

  async modifyProduct(req, res) {
    const { body, params } = req;
    if (params.id) {
      await this.productService.modifyProduct(params.id, body);
      return res.status(200).json("producto modificado");
    } else {
      return res.status(400).json("te olvidaste el id, no podemos modificar nada");
    }
  }
}

module.exports = ProductController;
