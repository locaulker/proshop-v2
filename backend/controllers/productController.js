import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js"

// @desc    Get All products
// @route   GET /api/v2/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc    Get a Single Product
// @route   GET /api/v2/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    return res.json(product)
  }
  res.status(404)
  throw new Error("Resource not found")
})

export { getProducts, getProductById }
