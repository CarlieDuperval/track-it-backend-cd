import functions from "firebase-functions";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { salesRouter } from "./src/routes/sale-route.js";
//import { authorize } from "./src/authorization.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());





// app.use(authorize)
app.use(salesRouter);
//app.use('/product', productRouter)
//app.use(productRouter);
//app.use('/sales', salesRouter)

// app.listen(5050, () => {
//   console.log("Listening on Port: 5050");
// });
export const api = functions.https.onRequest(app);
