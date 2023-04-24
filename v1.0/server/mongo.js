const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/storedb").then(()=>{
    console.log("Connected")
}).catch(()=>{
    console.log("Failed to Connect");
})

const StoreUserSchema = new mongoose.Schema({
    username :String,
    email : String,
    password :String
});
const StoreProductSchema = new mongoose.Schema({
    pname : String,
    pdisc: String,
    price :String,
    rating : String
});


const UserCollection = mongoose.model("userCollection",StoreUserSchema);
const ProductCollection = mongoose.model("product",StoreProductSchema)

module.exports = UserCollection;
module.exports = ProductCollection;