// export const FirstApp = () => <h1>My First Component Daniela</h1>

// import { Fragment } from 'react'
//<> es un fragmento funciona como nodo padre cuando retornemos varios selectores

// const newMessage={
//     message:'hola',
//     title:'mensaje'
// };

// const saludo = () => ('First App with React JS');

/*JSON.stringify(newMessage)*/ //MOSTRAR DATOS DE UN OBJETO
import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle}) => {
  // if(!title)
  //   throw new Error("Error no existe title")

  return (
    <>
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
    </>
  )
}

FirstApp.PropTypes={
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}

//deprecated
FirstApp.defaultProps={
  title:'no hay title',
  subTitle:'no hay subtitle',
  name:'fernando herrera'
}