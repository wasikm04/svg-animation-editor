import React from 'react';
import SVGWindow from "./SVGWindow.js";
import Editor from "./Editor.js";



function App() {
  return (
    <div className="col-12 row">
    <div  className="col-6">
    <Editor/>
      </div>
      <div className="col-6">
      <SVGWindow/>
      </div>
    </div>
  );
}

export default App;
