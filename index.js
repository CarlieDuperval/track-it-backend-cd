import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { productRouter } from "./src/routes/product-route";
import { salesRouter } from "./src/routes/sale-route";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(productRouter);
app.use(salesRouter);

app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
