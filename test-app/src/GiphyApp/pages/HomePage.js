import { Component } from 'react'
import axios from 'axios'

const API_KEY = 'APIKEYGOESHERE'

class HomePage extends Component {

    state = {
        gifs: []
    }

    async componentDidMount () {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&rating=g`)

        this.setState({ gifs: response.data.data })

        console.log('mounted')
    }

    componentDidUpdate() {
        
    }

    render() {
        return (
            <div>
                <h1>Trending Gifs</h1>
                <>
                    {this.state.gifs.map((gif, index) => {
                        return (
                            <div key={index}>
                                <img src={gif.images.original.url} />
                                <button>save</button>
                            </div>
                        )
                    })}
                </>
            </div>
        )
    }
}

export default HomePage