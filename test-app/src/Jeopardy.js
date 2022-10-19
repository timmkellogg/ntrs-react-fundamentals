import { Component } from 'react'
import axios from 'axios'

class Jeopardy extends Component {

    state = {
        question: {
            category: {}
        },
        score: 0,
        input: '',
        loading: true
    }

    //get a new random question from the API and add it to the data object in state
    getNewQuestion = async () => {
        // axios.get('http://jservice.io/api/random').then(result => {
        //     console.log(result.data[0])
        //     this.setState({
        //         question: result.data[0]
        //     })

        //     if(this.state.loading) this.setState({ loading: false })
        // })
        const result = await axios.get('http://jservice.io/api/random')
        
        this.setState({ question: result.data[0] })
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if(this.state.question.answer.toUpperCase().includes(this.state.input.toUpperCase())) {
            this.setState({ score: this.state.score + this.state.question.value })
        } else {
            alert(`Correct answer: ${this.state.question.answer}`)
        }
        
        this.setState({ input: '' })

        this.getNewQuestion()
    }

    //when the component mounts, get the first question
    async componentDidMount() {
        await this.getNewQuestion()
        
        this.setState({ loading: false })
    }

    //display the results on the screen
    render() {
        if (this.state.loading) return <div>Loading...</div>
        
        return (
            <div>
                <h2>Jeopardy</h2>
                <h4>Score: {this.state.score}</h4>
                <button onClick={this.getNewQuestion}>Skip</button>

                <div>
                    <h5>Question: {this.state.question.question}</h5>
                    <h5>Category: {this.state.question.category.title}</h5>
                    <h5>Value: {this.state.question.value}</h5>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.input}></input>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default Jeopardy