const express = require("express");

const cors = require("cors");
const port=3020;
const app = express();


let allowlist = ['http://localhost:3000', 'http://example2.com']
let corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.get("/api/customer",cors(corsOptionsDelegate),(req, res)=>{
    const customers=[
        {id:1,firstName:"jack"},
        {id:2,firstName:"jill"},
        {id:3,firstName:"manoj"}
    ]

    res.send(customers)
})

app.listen(port,()=>{
    console.log(`server is lisening at ${port}`)
})
