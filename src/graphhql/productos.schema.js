import { buildSchema } from "graphql";

const productoSchema = buildSchema(`
    input ProductoInput {
        name: String,
        price: Float,
        thumbnail: String
    } 

    type Producto {
        id: ID!,
        name: String,
        price: Float,
        thumbnail: String
    }

    type Query {
        getProducto(id: ID!): Producto,
        getProductos(campo: String, valor: String): [Producto],
    }

    type Mutation {
        createProducto(datos: ProductoInput): Producto,
        updateProducto(id: ID!, datos: ProductoInput): Producto,
        deleteProducto(id: ID!): Producto,
    }
`);

export default productoSchema;
