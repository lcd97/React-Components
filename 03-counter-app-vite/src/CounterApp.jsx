import { useState } from 'react'
import PropTypes from "prop-types";

export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => setCounter( (counter) => counter + 1 );
    const handleSubst = () => setCounter( counter - 1 );
    const Reset = () => setCounter( value );

    return (
    <>
        <h1> CounterApp </h1>
        <h2> { counter } </h2>

        <button onClick = { handleAdd } > +1 </button>
        <button onClick = { handleSubst } > -1 </button>
        <button onClick = { Reset } > Reset </button>

    </>);
};

CounterApp.PropTypes={
    value: PropTypes.number.isRequired
};