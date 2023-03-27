import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}

const Planets = () => {
    const { data, status } = useQuery('planets', fetchPlanets, {
        staleTime: 5000,//data will be old in 5 second
        cacheTime: 1000,//data will be cache for 1 second,for 1 second it will use data from cache doesn't reload it
        onSuccess: () => console.log('data fetched with no problems'),
    });

    return (
        <div>
            <h2>Planets</h2>

            {status === 'loading' && (
                <div>Loading data</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    {data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
                </div>
            )}
        </div>
    );
}

export default Planets;