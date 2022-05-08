import React from "react";

const CreateElement = (props) => {
    return React.createElement(
        "div",
        {
            className: "shopping-list"
        },
        React.createElement("h1", null, "Shopping List for ", props.name)
    );
};

export default CreateElement;
