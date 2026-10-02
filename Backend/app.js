//Here I will import express js module
let express=require ("express");
//import cors 
let cors =require ("cors");
//import path
let path = require ("path");
let {MongoClient} = require ("mongodb");


let uri="your_mongodb_connection_string";
let client = new MongoClient (uri);

//Here function to connect with mondodb

async function run () {

    await client.connect();
    console.log ("Connected to MondoDB");
}

let app= express ();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public", "static")));

//endpoints

app.get("/", function(req, res){
    res.send("Hello from my backend server!");

});

app.post("/api/users", async function(req, res){ 
let form_data =req.body;

// here I will connect with database

let my_database=client.db("my_project_db");
let my_collection=my_database.collection("User_info");

let the_data ={
    fullName:   form_data.fullName,
    age:        form_data.age,
    hourlyRate: form_data.hourlyRate,
    isActive:   form_data.isActive,
    phone:       form_data.phone,
    joinDate:    new Date(),
    salary:      form_data.salary,
    nickname:    null,
    address: {
        city:       form_data.city,
         country:    form_data.country,
    },
    skills:      form_data.skills,
    email:      form_data.email
    
};

let saved_data= await my_collection.insertOne(the_data);
res.redirect("/api/users");
});

app.get("/api/users", async function (req, res) {

//Here I will connect to the database

let my_database=client.db ("my_project_db");
let my_collection= my_database.collection("User_info");
let db_data=await my_collection.find({}, {projection:{_id:0}}).toArray();
res.json(db_data);
});

//End point to search users

app.get ("/api/users/search",  async function(req, res){

//Here I connect to the database

let my_database =client.db("my_project_db");
let my_collection=my_database.collection("User_info");

let query_city=req.query.city;
let query_age= req.query.age;

let db_data=await my_collection.find(
    {city:query_city,age:query_age},
    {projection:{_id:0}}
).toArray();
 if (db_data.length==0){
res.send("No data for the filter applied!");

 }
 else{

    res.json(db_data);
 }
});
//POST endpoint for a pet

app.post("/api/pets", async function (req, res){
let form_data=req.body;

let my_database=client.db("my_project_db");

let my_collection=my_database.collection("pet_info");

let the_data={

    //Here I will write 10 diffent data tupes

    petName:       form_data.petName,
    age:           form_data.age,
    breed:         form_data.breed,
    isVaccinated:  form_data.isVaccinated,
    registerDate:  new Date(),
    weight:        form_data.weight,
    owner:         form_data.owner, 
    city:          form_data.city,
    color:         form_data.color,
    email:         form_data.email,
    food:          form_data.food 
};

let saved_data= await my_collection.insertOne(the_data);
res.redirect("/api/pets");
});


app.get ("/api/pets",  async function(req, res){

//Here I connect to the database

let my_database =client.db("my_project_db");
let my_collection=my_database.collection("pet_info");

//Here get pet from mongodb
let db_data=await my_collection.find({}, {projection:{_id:0}}).toArray();
res.json(db_data);
});

app.post("/react_data", async function(req, res){

    let form_data = req.body;

    let my_database = client.db("my_project_db");
    let my_collection = my_database.collection("User_info");

    let the_data = {
        name:    form_data.user_name,
        age:     form_data.user_age,
        city:    form_data.user_city,
        hobby:   form_data.user_hobby,
        country: form_data.user_country
    };

    let saved_data = await my_collection.insertOne(the_data);
    res.json("/react_data");
});

app.post("/movies", async function(req, res){
let form_data=req.body;


let my_database=client.db("my_project_db");
let my_collection=my_database.collection("movies");


let the_data={
title: form_data.title,
director: form_data.director,
genre: form_data.genre,
year: form_data.year,
rating: form_data.rating,
}; 

let save_data=await my_collection.insertOne(the_data);
res.redirect("/movies");

});

app.get("/movies", async function (req, res) {

let my_database =client.db ("my_project_db");
let my_collection=my_database.collection("movies");

let db_data=await my_collection.find({}, {projection:{_id:0}}).toArray();
res.json(db_data);
    
});


app.listen(8000, function(){
    console.log("the server has started");
    run();
});

