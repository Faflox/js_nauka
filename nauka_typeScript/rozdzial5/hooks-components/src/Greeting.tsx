import { useState, useEffect} from "react";

interface GreetingProps{
    name?: string
}

const Greeting = ({name}:GreetingProps) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (name){
            setMessage(`Witaj z Greeting, ${name}`);
        }
    }, [name])

    if(!name) {
        return<div>Nie podano imienia</div>;
    }

    return <div>{message}</div>;
}

export default Greeting;