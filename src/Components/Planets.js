import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

const Planets = () => {
    const [page, setPage] = useState(1);
    const { resolvedData, latestData, status } = usePaginatedQuery(['planets', page], fetchPlanets);
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
                <>
                    <div>
                        <button onClick={() => setPage(resolvedData.previous && (page-1))} disabled={!resolvedData.previous}>Previous</button>
                        <button>{page}</button>
                        <button onClick={() => setPage(resolvedData.next && (page+1))} disabled={!resolvedData.next}>Next</button>
                        {resolvedData.results.map(planet => <Planet key={planet.name} planet={planet} />)}
                    </div>
                </>
            )
            }
        </div >
    );
}

export default Planets;
