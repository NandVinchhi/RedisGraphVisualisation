import React, { Component } from 'react';
import './App.css';
import { Graph } from "react-d3-graph";

const myConfig = {
    nodeHighlightBehavior: true,
    directed: true,
    node: {
        color: "lightgreen",
        size: 120,
        highlightStrokeColor: "lightgreen",
    },
    link: {
        highlightColor: "lightblue",
    },
    
};

// graph event callbacks
const onClickGraph = function() {
    //when graph is clicked 
};

const onClickNode = function(nodeId) {
    //when a node is clicked
};

const onDoubleClickNode = function(nodeId) {
    //when a node is double clicked
};

const onRightClickNode = function(event, nodeId) {
    //when a node is right clicked
};

const onMouseOverNode = function(nodeId) {
    //when mouse is over node
};

const onMouseOutNode = function(nodeId) {
    //when mouse out node
};

const onClickLink = function(source, target) {
    //when link is clicked
};

const onRightClickLink = function(event, source, target) {
    //when link is right clicked
};

const onMouseOverLink = function(source, target) {
    //when mouse is over link
};

const onMouseOutLink = function(source, target) {
    //when mouse out link bwn source and target
};

const onNodePositionChange = function(nodeId, x, y) {
    //when node is moved to new position (x, y)
};

class App extends Component {
  state = {
    data: JSON.parse('{"nodes":[{"id":"X"},{"id":"Y"}],"links":[{"source":"X","target":"Y"}]}')

  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        
        <Graph
            id="graph-id" 
            data={this.state.data}
            config={myConfig}
            onClickNode={onClickNode}
            onDoubleClickNode={onDoubleClickNode}
            onRightClickNode={onRightClickNode}
            onClickGraph={onClickGraph}
            onClickLink={onClickLink}
            onRightClickLink={onRightClickLink}
            onMouseOverNode={onMouseOverNode}
            onMouseOutNode={onMouseOutNode}
            onMouseOverLink={onMouseOverLink}
            onMouseOutLink={onMouseOutLink}
            onNodePositionChange={onNodePositionChange}
            />
      </div>
    );
  }
}

export default App;