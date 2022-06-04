import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { productRouter } from "./src/routes/product-route.js";
import { salesRouter } from "./src/routes/sale-route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(productRouter);
//app.use('/sales', salesRouter)
app.use(salesRouter);
//app.use('/product', productRouter)

app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
