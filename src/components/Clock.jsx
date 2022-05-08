import { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clock: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.updateClock(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    updateClock() {
        this.setState({ clock: new Date() });
    }

    render() {
        return (
            <div>
                <h5>Current Time</h5>
                <h2>{this.state.clock.toTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;
