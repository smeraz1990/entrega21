import express, { json } from "express";
import { graphqlHTTP } from "express-graphql";
import productoController from "./controllers/product.controller.js"
import prodcutoSchema from "./graphhql/productos.schema.js"

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    prodcutoSchema,
    rootValue: {
      getProducto: productoController.getProducto,
      getProductos: productoController.getProductos,
      createProducto: productoController.createProducto,
      updateProducto: productoController.updateProducto,
      deleteProducto: productoController.deleteProducto,
    },
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
