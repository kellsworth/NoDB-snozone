let cartArr = [];
let orderNum = 0;


module.exports = {
  getCartArr: (req, res) => {
    res.status(200).send(cartArr)
  },

  addToCartArr: (req, res) => {
    console.log(req.body)
    const order = req.body;
    order.id = orderNum;
    orderNum++;
    cartArr.push(order)
  },

  deleteFromCartArr: (req, res) => {

  },

  editOrder: (req, res) => {

  },

  clearCart: (req, res) => {

  }
}

