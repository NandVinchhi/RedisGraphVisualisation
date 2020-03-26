const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const RedisGraph = require("redisgraph.js").Graph;

let graph = new RedisGraph("graph");

var nodes = [];
var links = [];
var res;

(async () =>{
        
        res = await graph.query("MATCH (n) RETURN n");
       while (res.hasNext()) {

            let record = res.next();
            
               
            nodes.push(record.get("n").properties);
        }
        
        res = await graph.query("MATCH (n)-[:connectedto]-(k) RETURN DISTINCT n, k");
        while (res.hasNext()) {

            let record = res.next();
            
            
            
            links.push({source:record.get("n").properties.id, target:record.get("k").properties.id});
        }
        // console.log that your server is up and running
        app.listen(port, () => console.log(`Listening on port ${port}`));

        // create a GET route
        app.get('/express_backend', (req, res) => {
            res.send({express: {nodes:nodes, links:links}});
        });
    })();

