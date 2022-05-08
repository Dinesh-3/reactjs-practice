import React, { Component } from "react";
import _ from "lodash";

class Hello extends Component {
    state = {
        userName: "Dinesh"
    };

    constructor(props) {
        super(props);
        console.log("Hello Component - Constructor");
    }

    componentDidMount() {
        console.log("Hello Component - componentDidMount");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Hello Component - componentDidUpdate", { prevProps, prevState }, { currentState: this.state });
    }
    componentWillUnmount() {
        console.log("Hello Component - componentWillUnmount");
    }

    render() {
        console.log("Hello Component - render()");
        // this.props.data = ""; will throw error props are not modifiable
        return (
            <div>
                <h5>{this.props.greet}</h5>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={(e) => this.setState({ userName: e.target.value })}
                />
            </div>
        );
    }
}

export default React.memo(Hello); // React.memo component will only re render if props or state changes

/*
forceUpdate()
component.forceUpdate(callback)
By default, when your component’s state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().

Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate(). This will trigger the normal lifecycle methods for child components, including the shouldComponentUpdate() method of each child. React will still only update the DOM if the markup changes.

Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().

DEFAULTPROPS
        defaultProps can be defined as a property on the component class itself, 
    to set the default props for the class. This is used for undefined props, but not for null props. 

For example:
    class CustomButton extends React.Component {
        // ...
    }

    CustomButton.defaultProps = {
        color: 'blue'
    };

    If props.color is not provided, it will be set by default to 'blue':
    render() {
        return <CustomButton /> ; // props.color will be set to blue
    }

    If props.color is set to null, it will remain null:
    render() {
        return <CustomButton color={null} /> ; // props.color will remain null
    }

*/
