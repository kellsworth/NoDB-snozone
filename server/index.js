const express = require('express'),
  cartCtrl = require('./controllers/cartController'),
  port = 4040,
  app = express();

app.use(express.json());

// endpoints
app.get('/api/cart', cartCtrl.getCartArr)
app.post('/api/cart', cartCtrl.addToCartArr)

app.listen(port, () => console.log(`Server is running on ${port}`));


