import { Component } from 'react'

class ToDo extends Component {

    componentDidMount() {
        console.log('start timer')
    }

    componentWillUnmount() {
        console.log('deleted')
    }

    render() {
        return (
            <li  
                onClick={() => this.props.handleToggle(this.props.index)}
                style={{textDecoration: this.props.toDo.completed && 'line-through'}}
            >
                {this.props.toDo.taskName}
                <button onClick={(event) => this.props.handleDelete(event, this.props.index)}>delete</button>
            </li>
        )
    }
}

export default ToDo