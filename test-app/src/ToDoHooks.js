import { useState, useEffect, useRef } from 'react'
import ToDo from './ToDo'

function ToDoList() {
    const [input, setInput] = useState('')
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

    const initialMount = useRef(true)

    useEffect(() => {
        if(initialMount.current) {
            initialMount.current = false
        } else {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }, [tasks])

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!input) return

        setTasks([...tasks, { taskName: input, completed: false }])
        setInput('')
    }

    const handleRemove = (index) => {
        const updatedTasks = [...tasks]

        updatedTasks.splice(index, 1)

        setTasks(updatedTasks)
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleToggle = (index) => {
        const updatedTasks = [...tasks]

        updatedTasks[index].completed = !tasks[index].completed

        setTasks(updatedTasks)
    }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={input} onChange={handleChange} />
                    <button>add</button>
                </form>

                <ul>
                    {tasks.map((task, index) => {
                        return (
                            <ToDo 
                                key={index}
                                index={index}
                                task={task}
                                handleToggle={handleToggle}
                                handleRemove={handleRemove}
                            />
                        )
                    })}
                </ul>
            </div>
        )
}

export default ToDoList