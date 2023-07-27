import mongoose from "mongoose";
import 'dotenv/config'


const options = {
  autoIndex: true,
  serverSelectionTimeoutMS: 5000,
};

const execute = () => {
  mongoose
    .connect(process.env.MONGO_URI, options)
    .then(() => {
      console.log("Conectado a Mongo DB Atlas 🚀");
    })
    .catch((error) => {
      console.error(error);
    });

  const db = mongoose.connection;

  db.on(
    "error",
    console.error.bind(console, "Error en la conexion a Mongo DB 💥")
  );
  db.once("open", () => {
    console.log("Me conecte ok, a Mongo DB Atlas 🚀 ✅");
  });
};

export { execute };
