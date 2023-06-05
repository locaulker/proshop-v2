export const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''
export const PRODUCTS_URL = process.env.NODE_ENV === '/api/v2/products'
export const USERS_URL = process.env.NODE_ENV === '/api/v2/users'
export const ORDERS_URL = process.env.NODE_ENV === '/api/v2/orders'
export const PAYPAL_URL = process.env.NODE_ENV === '/api/v2/config/paypal'
