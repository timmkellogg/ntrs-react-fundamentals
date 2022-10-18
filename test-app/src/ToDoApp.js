

function ToDoApp({ name, currentCity, description, tempature, todos }) {

    console.log(todos)

    return (
        <div>
            <h1>{name}</h1>
            <h2>{currentCity}</h2>
            <h2>{description}</h2>
            <h2>{tempature}</h2>

        </div>
    )
}

export default ToDoApp