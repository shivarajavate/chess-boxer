import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1);
    }

    return (
        <>
            <div>
                Result: {count}
            </div>
            <button onClick={increment}>+</button>
        </>
    );

}

export default Counter