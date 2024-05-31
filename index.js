const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello World.");
});


//handle 404
app.use((req, res, next)=>{
 res.status(404).send('Not Found');
})


// server error handling 
app.use((err, req, res, next)=>{
    if(err.message){
        res.status(500).send(err.message);
    }else{
        res.status(500).send('There was an error.');
    }
})

app.listen(3000, () => {
  console.log("Server is on 3000 port.");
});
