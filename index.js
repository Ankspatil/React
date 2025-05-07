const heading = React.createElement("div", {id: "perent"}, 
    React.createElement("div", {id: "child"},
    React.createElement("h1", {id: "main"}, "Hello React" )));
    
    console.log(heading)
    
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(heading);
    //create element is return objects not html 