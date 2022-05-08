import { Component } from "react";

class LoadMeLazily extends Component {
    state = {};
    render() {
        return Array.from({ length: 10 }).map((item, index) => (
            <img src={`https://picsum.photos/500?random=${index}`} alt={index} srcset="" />
        ));
    }
}

export default LoadMeLazily;
