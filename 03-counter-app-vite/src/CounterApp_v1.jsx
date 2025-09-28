import PropTypes from "prop-types";

//SI LOS PARAMETROS NO SON LOS QUE ESTAN PASANDO POR FUNCTIONAL COMPONENTS , SE DECLARA FUERA DE EL
const handleAdd = (event, newValue) => {
    console.log(newValue);
}

export const CounterApp = ({ value=0 }) => {

    return (
    <>
        <h1> CounterApp </h1>
        <h2> { value } </h2>

        {/* <button onClick={ (event) => handleAdd(event, 'hola') } > */}
        <button onClick={ (event) => handleAdd(event, 'hola') } >
            +1
        </button>

    </>);
};

CounterApp.PropTypes={
    value: PropTypes.number.isRequired
};

/*
deprecated
CounterApp.defaultProps={
    value:0
}*/