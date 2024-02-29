import { useFetch } from "../hooks"
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoadin, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Informacón de Pokemon</h1>
      <hr />
      {isLoadin
        ? <LoadingMessage />
        : (
          <PokemonCard
            id={counter}
            name={data.name}
            sprites={[
              data.sprites.front_default,
              data.sprites.back_default
            ]} />
        )
      }

      {/* <h2>ID: {data?.id}</h2>
      <h2>Nombre: {data?.name}</h2>
      <img src={data?.sprites.font_default} alt="" />
      <img src={data?.sprites.back_default} alt="" /> */}

      <hr />

      <button className="btn btn-primary" onClick={() => counter > 1 ? decrement() : null}>Anterior</button>
      <button className="btn btn-primary" onClick={() => increment()}>Siguiente</button>
    </>
  )
}
