import withCounter from "./withCounter"
import PropTypes from 'prop-types'

function SomeCountingComponent(props) {
    return (
      <div>
        <h1>{props.count}</h1>
        <button onClick={props.incrementCount}>Increment</button>
        <button onClick={props.decrementCount}>Decrement</button>
      </div>
    )
  }

SomeCountingComponent.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired
}

SomeCountingComponent.defaultProps = {
  count: 15
}



export default withCounter(SomeCountingComponent)
  