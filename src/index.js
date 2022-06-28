import React from "react";
import ReactDOM from "react-dom/client";
import './css/style.css';
import App from "./components/App";
import Test from "./components/Test";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <App />
        <Test test="webpack" test2="react" test3="node.js" />
    </div>    
);