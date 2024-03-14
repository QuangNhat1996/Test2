const express = require('express');
const router = express.Router();
const productModel = require('../model/productModel')
/* GET home page. */
router.get('/', async function(req, res, next) {
  let prods = await productModel.find()
  res.render('product/index', { products : prods });
});

router.get('/create', (req , res)=>{
  res.render('product/create');
})

router.post('/create', async (req ,res)=>{
  let body = req.body
  let name = body.name
  let price = body.price

  let prod = new productModel({
    name :name,
    price:price
  })
  await prod.save();
  res.redirect('/product')
})
router.get('/update/:id', async (req , res)=>{
  let id = req.params.id;
  let prod = await productModel.findById(id)
  res.render('product/update',{product:prod});
})


module.exports = router;
