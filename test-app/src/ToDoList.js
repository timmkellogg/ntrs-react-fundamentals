import { Component } from 'react'
import ToDo from './ToDo.js'

class ToDoList extends Component {

    state = {
        toDos: [],
        input: ''
    }

    componentDidMount() {
        let toDos = localStorage.getItem('toDos')
        
        if (toDos) this.setState({ toDos: JSON.parse(toDos) })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.toDos !== this.state.toDos) {
            localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({ toDos: [...this.state.toDos, { taskName: this.state.input, completed: false}], input: '' })
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    handleToggle = (index) => {
        const newArray = [...this.state.toDos]

        newArray[index].completed = !newArray[index].completed

        this.setState({ toDos: newArray })
    }

    handleDelete = (event, index) => {
        event.stopPropagation()
        
        const newArray = this.state.toDos.filter((toDo, toDoIndex) => toDoIndex !== index)
        
        this.setState({ toDos: newArray })
        
    }

    render() {
        return (
            <div>
                <h2>To Do list</h2>

                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button>add</button>
                </form>
                
                <ul>
                    {this.state.toDos.map((toDo, index) => {
                        return (
                            <ToDo 
                                key={index} 
                                handleToggle={this.handleToggle}
                                handleDelete={this.handleDelete}
                                toDo={toDo}
                                index={index}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoList