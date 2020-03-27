//This is the express backend that collects and sends the graph database
//data to localhost:5000/express_backend. 

const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())

const port = process.env.PORT || 5000;
const RedisGraph = require("redisgraph.js").Graph;

let graph = new RedisGraph("graph");

var nodes = [];
var links = [];
var res;



(async () =>{
        
        res = await graph.query("MATCH (n) RETURN n"); //query to return all nodes.
       while (res.hasNext()) {

            let record = res.next();
            
               
            nodes.push(record.get("n").properties);
        }
        
        res = await graph.query("MATCH (n)-[:connectedto]-(k) RETURN DISTINCT n, k");//query to return all links.
        while (res.hasNext()) {

            let record = res.next();
            
            
            
            links.push({source:record.get("n").properties.id, target:record.get("k").properties.id});
        }
        // console.log that your server is up and running
        app.listen(port, () => console.log(`Listening on port ${port}`));

        // create a GET route
        app.get('/express_backend', (req, res) => {
            res.send({express: {nodes:nodes, links:links}});//sending the data in the form of a dictionary object.
        });
    })();

