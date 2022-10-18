import React from 'react'

class Counter extends React.Component {

    state = {
        count: this.props.initialCount ? this.props.initialCount : 0
    }

    handleIncrement = () => {
        if (this.state.count < 20) {
            this.setState({ count: this.state.count + 1 })
        }
    }

    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
        
    }

    handleReset = () => {
        this.setState({ count: this.props.initialCount ? this.props.initialCount : 0 })
    }

    render() {
        return (
            <div style={{}}>
                <h1 style={{ color: this.state.count > 10 && 'red'}}>Counter: {this.state.count}</h1>

                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

export default Counter