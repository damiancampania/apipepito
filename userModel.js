const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema(
    {
    nombre: {
        type: String
    } ,
    edad: {
        type: String
    }   



}, {
    
    timestamps: true,
versionKey:0,}
)
const ModelUser = mongoose.model("users", userSchema);
module.exports= ModelUser;