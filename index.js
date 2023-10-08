require('dotenv').config();
const express = require('express');
const blogRouter = require("./routes/api")
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',blogRouter.router)

app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
})


app.listen(port,()=>{
    console.log(`Server Running at ${port}`);
})
