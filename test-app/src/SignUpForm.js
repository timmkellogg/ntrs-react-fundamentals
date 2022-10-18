import { Component } from 'react'

class SignUpForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        gender: '',
        country: '',
        likesPineapple: false,
        likesLiquorice: false,

    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.log(this.state)

        this.setState({})
    }

    handleChange = (event) => {
        const { name, value, checked, type } = event.target
        
        if(type === 'checkbox') {
            this.setState({ [name]: checked })
        } else {
            this.setState({ [name]: value })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input placeholder='First Name' name='firstName' onChange={this.handleChange} />

                    <input placeholder='Last Name' name='lastName'  onChange={this.handleChange} />

                    <input placeholder='Email' type="email" />

                    <input placeholder='dob' name='dob' value={this.state.dob} onChange={this.handleChange} type="date" />

                    <br />

                    <label>
                        <input type='radio' value='male' name='gender' onChange={this.handleChange}></input>
                        Male
                    </label>

                    <label>
                        <input type='radio' value='female' name='gender' onChange={this.handleChange}></input>
                        Female
                    </label>

                    <br />

                    <select name='country' value={this.state.country} onChange={this.handleChange}>
                        <option value=''>Select Country</option>
                        <option value='US'>United States</option>
                        <option value='CA'>Canada</option>
                        <option value='MO'>Mexico</option>
                    </select>

                    <br />

                    <label>
                        <input type='checkbox' name='likesPineapple' onChange={this.handleChange} value={this.state.likesPineapple} checked={this.state.likesPineapple} />
                        Likes Pineapple
                    </label>

                    <label>
                        <input type='checkbox' name='likesLiquorice' onChange={this.handleChange} value={this.state.likesLiquorice} checked={this.state.likesLiquorice} />
                        Likes Liquorice
                    </label>

                    <br />
                    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm