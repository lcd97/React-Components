import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage"
import { PokemonCard } from "../03-examples/PokemonCard"

export const Layout = () => {
  
  const {counter, increment, decrement } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  
  return (
    <>
        <h2 className="text-center fw-bold">Información de Pokémon</h2>
        <hr />
        
        { 
          isLoading ? 
            <LoadingMessage /> 
          :
            <PokemonCard 
              id={ counter }
              name={ data.name } 
              sprites={ [
                data.sprites.front_default,
                data.sprites.back_default
                ]} 
            />
          }

        <div className="col-md-12 mt-2">
          <button        
            className="btn btn-primary"
            onClick={ () => counter > 1 ? decrement() : null }>
              Anterior
          </button>


          <button 
            className="btn btn-secondary"
            onClick={ increment }
          >
              Siguiente
          </button>
        </div>
    </>
  )
}