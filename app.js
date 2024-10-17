const express= require("express");
const app= express();
const mongoose= require("mongoose");
const Listing=require("./models/listings.js");
const path=require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

const Mongoose_URL="mongodb://127.0.0.1:27017/wanderlust";

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));

main().
then(()=>{
console.log("Connected to DB");
}).catch((err)=>{
 console.log(err);
});

async function main (){
    await mongoose.connect(Mongoose_URL);
}

app.get("/testinglisting" ,async(req, res)=>{
    let sampleLsiting= new Listing({
     title:"My new Villa",
     description:"By the Beach",
     price:"1200",
     location:"Karanataka",
     country:"India",
    });

  await sampleLsiting.save();
  console.log("Sample was saved");
  res.send("sucessfull testing");
});

app.get("/listings",async(req,res)=>{
 const allListings= await Listing.find({});
 res.render("listings/index.ejs",{allListings});
 });

app.get("listings/:id" , async(req,res)=>{
 let {id}=req.params;
 const listing= await Listing.findById(id);
 res.render("/listings/show.ejs",{listing});
});

app.get("listings/new" ,(req,res)=>{
 <input name="title"></input>
});


app.listen(8080,()=>{
    console.log("listeneing");
});
