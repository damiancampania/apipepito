const mongoose = require('mongoose');

const dbconnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pepito", {
     
    });
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error de conexión a la base de datos:", error.message);
  }
};

module.exports = dbconnect;
