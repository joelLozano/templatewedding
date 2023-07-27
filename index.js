import express from "express";
import routes from "./routes/routes.js";
import { execute } from "./config/db.js";
import bodyParser from'body-parser'
import 'dotenv/config'

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

execute();

app.listen(process.env.PORT, () => {
  console.log(`Aplicación ejemplo, escuchando el puerto ${process.env.PORT}!`);
});
