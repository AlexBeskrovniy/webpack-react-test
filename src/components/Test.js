import React from "react";

const Test = (props) => {
    return (
        <div className="list">
            <ul>
                <li>{props.test}</li>
                <li>{props.test2}</li>
                <li>{props.test3}</li>
            </ul>
        </div>
    );
}

export default Test;