//express
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

import routerProduct from "../router/product";
import routerPost from "../router/post";
import routerCategory from "../router/category";
import routerUser from "../router/auth";

const app = express();
//middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json()); //express.json() là middleware

//route
app.use("/api", routerProduct);
app.use("/api", routerCategory);
app.use("/api", routerPost);
app.use("/api", routerUser);

//connect database
mongoose
  .connect("mongodb://localhost:27017/we16309")
  .then(() => console.log("Ket noi db thanh cong"))
  .catch((error) => console.log(error));

//cổng chạy
const PORT = 8000;
app.listen(PORT, () => {
  console.log("server running port", PORT);
});

/**
 * npm i -g json-server: cai dat module vao o he thong
 * npm i --save express:
 * su dung npm i thi tu cai dat luon
 * bat buoc phai co module nay thi moi chay project
 * devDependencies: { "express:" 1.2.3 }
 * npm i --save-dev nodemon:
 */
