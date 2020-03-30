//This is the express backend that collects and sends the graph database
//data to localhost:5000/express_backend. 

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 

var cors = require('cors')
app.use(cors())

const port = process.env.PORT || 5000;
const RedisGraph = require("redisgraph.js").Graph;

let graph = new RedisGraph("graph");

var nodes = [];
var links = [];

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/express_backend', function(req, res) {
    
    (async () =>{
        
        nodes = [];
        links = [];
        res1 = await graph.query(req.body.message);//query to return links.
        
        while (res1.hasNext()) {

            let record = res1.next();
            
            
            nodes.push(record.get(res1._typelessHeader[0]).properties);
            nodes.push(record.get(res1._typelessHeader[1]).properties)
            links.push({source:record.get(res1._typelessHeader[0]).properties.id, target:record.get(res1._typelessHeader[1]).properties.id});
        }
        
        


        // create a GET route
        
    })();
    app.get('/express_backend', (req, res) => {
            res.send({express: {nodes:nodes, links:links}});//sending the data in the form of a dictionary object.
    });
});




