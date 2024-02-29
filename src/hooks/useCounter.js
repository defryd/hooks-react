import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        // if ( counter === 0 ) return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    const increment2 = (value = 2) => {
        setCounter(counter + value);
    }

    const increment3 = (value = 3) => {
        setCounter(counter + value);
    }

    const increment5 = (value = 5) => {
        setCounter(counter + value);
    }


    return {
        counter,
        increment,
        decrement,
        reset,
        increment2,
        increment3,
        increment5
    }

}