import { Component } from 'react'

class SignUpForm extends Component {

    state = {

    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input placeholder='First Name' />

                    <input placeholder='Last Name' />

                    <input placeholder='Email' type="email" />

                    <input placeholder='Date of Birth' type="date" />

                    <br />

                    <label>
                        <input type='radio'></input>
                        Male
                    </label>

                    <label>
                        <input type='radio'></input>
                        Female
                    </label>

                    <br />

                    <select name='country'>
                        <option value=''>Select Country</option>
                        <option value='US'>United States</option>
                        <option value='CA'>Canada</option>
                        <option value='MO'>Mexico</option>
                    </select>

                    <br />

                    <label>
                        <input type='checkbox' />
                        Likes Pineapple
                    </label>

                    <label>
                        <input type='checkbox' />
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