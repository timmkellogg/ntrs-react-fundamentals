import React from 'react'

class MyFirstForm extends React.Component {

    state = {
        username: '',
        password: '',
        someText: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.log(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder='username' name='username' value={this.state.username} onChange={this.handleChange} />
                <input placeholder='password' name='password' value={this.state.password} onChange={this.handleChange} />
                <textarea name='someText' value={this.state.someText} onChange={this.handleChange} />
                <button>submit</button>
            </form>
        )
    }
}

export default MyFirstForm