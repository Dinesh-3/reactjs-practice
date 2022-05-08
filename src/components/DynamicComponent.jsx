import { useState } from "react";

const DynamicComponent = ({ section }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <p>{section.title}</p>
            <p onClick={(e) => setToggle((prev) => !prev)}> {">"} </p>
            {section.subComponent &&
                toggle &&
                section.subComponent.map((section, i) => <DynamicComponent key={i} section={section} />)}
        </div>
    );
};

export default DynamicComponent;
