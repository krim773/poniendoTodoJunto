import React, { useState } from 'react';

const PersonCard = (props) => {
    //desestructurar de los props y crear nuevas constantes
    //con diferencia a la tarea "apoyalo" en este caso al desestructurar se cambiara la edad a "edadInicial" para usar en el useState
    const { firstName, lastName, age: edadInicial, hairColor } = props;

    //se utilizara 
    const [age, setAge] = useState(edadInicial)

    const cumple = () => {
        setAge( parseInt(age) + 1)
    }
    return (
        // en este div se renderizaran los datos con los respectvos ordenes dados en la tarea de "apoyalos"
        <div>
            <h2>{lastName},{''} {firstName}</h2>
            <p>Age: {''}{age}</p>
            <p>Hair Color: {''} {hairColor}</p>
            <button onClick={cumple}>Birthday Button for {firstName} {lastName}! </button>
        </div>
    );
};

export default PersonCard;
