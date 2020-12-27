class UserController {
  constructor(saleService, productService) {
    this.saleService = saleService;
    this.productService = productService;
  }
  async getSales(req, res) {
    const sales = await this.saleService.getSales();
    return res.json(sales);
  }
  async getSaleById(req, res) {
    const { id } = req.params;
    const sale = await this.saleService.getSaleById(id);
    return res.json(sale);
  }
  async getSaleByHandler(req, res) {
    const { handler } = req.params;
    const sale = await this.saleService.getSaleByHandler(handler);
    return res.json(sale);
  }
  async addSale(req, res) {
    const { body } = req;
    await this.saleService.addSale(body);
    return res.send("venta agregado");
  }
}

module.exports = UserController;
