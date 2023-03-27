import React from 'react';

const Person = ({ Person }) => {
    return (
        <div className="card">
            
            <h3>{Person.name}</h3>
            <p>Gender - {Person.gender}</p>
            <p>Birth year - {Person.birth_year}</p>
        </div>
    );
}

export default Person;