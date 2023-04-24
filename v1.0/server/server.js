const express = require("express");
const cors = require("cors");
const lodash = require("lodash");

const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


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






app.get("/", (req, res) => {
  res.json({
    message: "Hello from Server"
  });
  console.log("Server Connected");
});








app.post("/signup", async (req, res) => {
  const {
    Data
  } = req.body;

  const userdata = new UserCollection({
    username: Data.username,
    email: Data.email,
    password: Data.password,
  });

  UserCollection.findOne({
    email: Data.email
  }).then((founditem) => {
    if (!founditem) {
      userdata.save();
      console.log("saved " + Data.username);
      res.json({
        connection: "success",
        name: Data.username,
        email: Data.email,
      });
    } else {
      res.json({
        connection: "failed",
        message: "Email already exists. Please try again.",
      });
      console.log("Email already exists.");
    }
  });
});



app.post("/login", (req, res) => {
  const {
    Data
  } = req.body;

  try {
    UserCollection.findOne({
      email: Data.email,
      password: Data.password
    }).then(
      (founditem) => {
        if (!founditem) {
          console.log(founditem);
          res.json({
            connection: "failed",
            message: "Account Not exist!! please Try Signup",
          });
        } else {
          res.json({
            connection: "success",
            userdata: founditem,
          });
        }
      }
    );
  } catch {
    console.log("Error occured");
  }
});

app.get("/home/:id", (req, res) => {

  const id = req.params.id;
  console.log("id: " + id);
  UserCollection.findOne({
      _id: id
    })
    .then((foundItem) => {
      console.log("foundItem: ", foundItem);
      if (!foundItem) {
        console.log("Error occurred: id could not be found");
        res.status(404).send("User not found");
      } else {
        res.json(foundItem);
      }
    })
    .catch((err) => {
      console.log("Error occurred:", err);
      res.status(500).send("Server error");
    });
});




app.get("/card", async (req, res) => {
  const pdata = new ProductCollection({
    pname: "chilly",
    price: .99,
    pdisc: "loremjsdbfjsdbfjsdfhjdfnuiehfewfskoncsjhceu efhejfwsjfn ehfowhfejwfnwoe ehfowefhe",
    rating : "3.5"
  });

  try {
    // Wait for the data to be saved
    // await pdata.save();
    console.log("Saved " + pdata);

    // Find all items and send the response
    const foundItem = await ProductCollection.find({});
    res.json(foundItem);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while saving the data.");
  }
});



app.get("/product/:id", async (req, res) => {
  const id = req.params.id;
console.log(id)
  try {
    const foundItem = await ProductCollection.findById(id);
    if (!foundItem) {
      return res.status(404).send("Product not found.");
    }
    else{res.json(foundItem);
      console.log(foundItem)
    }
    
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while retrieving the data.");
  }
});








app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});