import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        console.log("Counters - Render");
        const { onReset, counters, onIncrement, onDecrement, onDelete } = this.props;

        return (
            <div className="wrapper">
                <button onClick={onReset} className="btn btn-sm btn-primary mb-4">
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter key={counter.id} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} nums={counter} />
                ))}
            </div>
        );
    }
}

export default Counters;
