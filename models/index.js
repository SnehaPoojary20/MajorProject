const mongoose=require("mongoose");
const initData= require("./data.js ");
const Listing= require("./models/listings.js");

const Mongoose_URL="mongodb://127.0.0.1:27017/wanderlust";

main().
then(()=>{
console.log("Connected to DB");
}).catch((err)=>{
 console.log(err);
});

async function main (){
    await mongoose.connect(Mongoose_URL);
}

const initDb = async () =>{
 await Listing.deleteMany({});
 await Listing.insertMany(initdata.data);
 console.log("Data was initalized");
};

initDb();