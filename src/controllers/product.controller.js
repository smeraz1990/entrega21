import crypto from "crypto";
import Producto from "../classes/producto.class.js";

const productosMap = {};

const createProducto = ({ datos }) => {
  const id = crypto.randomBytes(10).toString("hex");
  const nuevaProducto = new Producto(id, datos);

  productosMap[id] = nuevaProducto;

  return nuevaProducto;
};

const getProducto = ({ id }) => {
  if (!productosMap[id]) throw new Error("Producto no existe");

  return productosMap[id];
};

const getProductos = ({ campo, valor }) => {
  const productos = Object.values(productosMap);

  if (campo && valor) {
    return productos.filter((producto) => producto[campo] == valor);
  } else {
    return productos;
  }
};

const updateProducto = ({ id, datos }) => {
  if (!productosMap[id]) throw new Error("Producto no existe");

  const productoActualizada = new Producto(id, datos);

  productosMap[id] = productoActualizada;

  return productoActualizada;
};

const deleteProducto = ({ id }) => {
  if (!productosMap[id]) throw new Error("Producto no existe");

  const productoBorrada = productosMap[id];

  delete productosMap[id];

  return productoBorrada;
};

export default {
  createProducto,
  getProducto,
  getProductos,
  updateProducto,
  deleteProducto,
};
