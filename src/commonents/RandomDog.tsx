import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomDog = () => {
    const [dog, setDog] = useState()
    useEffect(() => {
        getDog()

      }, [null]);

    console.log("data", {dog})

    const getDog = () => {
        axios.get("https://random.dog/woof.json")
        .then(res => {
            setDog(res.data.url);
        })
    }

    const handleClick = () => {
        getDog()
    }

    return (
        <img src={dog} className="DogImg" onClick={handleClick}/>
    )
}

export default RandomDog