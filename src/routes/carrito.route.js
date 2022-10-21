import { Router } from "express";
import carritoController from "../controllers/carrito.controller.js";
import jwt from "../utils/jwt.js";

const router = Router();

router
  .route("/")
  .post(carritoController.createCarrito);
router.get("/:idusuario", carritoController.getAllProductCarrito);
router.get("/:idusuario/:idproduct", carritoController.getOneProductCarrito);

export default router;
