# Prop Types

When using create-react-app, the `prop-types` library is automatically included! To start using it, import it:

``` js
import PropTypes from 'prop-types'
```

## Typechecking Props

``` js
import PropTypes from 'prop-types'

function SomeChildComponent(props) {

    return (
        <div>
            <div>{props.firstName} {props.lastName}</div>
            <div>{props.age}</div>
            <div>Likes Pineapple: {props.likesPineapple ? 'Yes' : 'No'}</div>
        </div>
    )
}

// use camelCased 'propTypes' rather than imported `PropTypes' here
SomeChildComponent.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    likesPineapple: PropTypes.bool
}

export default SomeChildComponent
```

## Default Props

Counter that receives count as prop.

``` js
import PropTypes from 'prop-types'

function Counter(props) {
    const [count, setCount] = useState(props.initialCount)

    return (
        <div>
            <h1>{props.counterName}</h1>
            <h2>{count}</h2>
        </div>
    )
}

// props.count = defaultProps.count if not passed to Counter
Counter.defaultProps = {
    counterName: 'My Counter'
    initialCount: 0
}

export default Counter
```

## Resources

* [https://reactjs.org/docs/typechecking-with-proptypes.html](https://reactjs.org/docs/typechecking-with-proptypes.html)
* [https://www.npmjs.com/package/prop-types](https://www.npmjs.com/package/prop-types)