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
    res.sendStatus(201)
  },

  deleteFromCartArr: (req, res) => {
    const { orderId } = req.body;
    cartArr = cartArr.filter((order) => order.id !== +orderId)
    res.sendStatus(200)
  },

  updateOrder: (req, res) => {
    const { orderId } = req.params;
    const { name } = req.body;
    cartArr.forEach((order, index) => {
      if (+orderId === order.id) {
        cartArr[index].nameInput = name;
      }
    })
    res.sendStatus(200)
  },

  clearCart: (req, res) => {
    cartArr = []
    res.sendStatus(200)
  }

}

