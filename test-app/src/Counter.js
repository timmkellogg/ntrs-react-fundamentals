import React from 'react'
import Button from 'react-bootstrap/Button';

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
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div style={{}}>
                <h1 style={{ color: this.state.count > 10 && 'red'}}>Counter: {this.state.count}</h1>

                <Button className='btn' onClick={this.handleIncrement}>+1</Button>
                <Button className='btn' onClick={this.handleDecrement}>-1</Button>
                <Button className='counter-btn' onClick={this.handleReset}>reset</Button>
            </div>
        )
    }
}

export default Counter