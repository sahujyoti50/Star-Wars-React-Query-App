import { useQuery } from "react-query";
import Person from "./Person";
const fetchPeople = async () => {
    const data = await fetch("http://swapi.dev/api/people/");
    return data.json();
}

const People = () => {
    const { data, status } = useQuery('peoples', fetchPeople);
    return (
        <div>
            <h2>People</h2>
            {status === 'error' && (<div>Error occured while fetching Data</div>)}
            {status === 'loading' && (<div>Loading Data...</div>)}
            {status === 'success' && (<div>{data.results.map((person) => <Person key={person.name} Person={person} />
            )}</div>)}
        </div>

    )
}
export default People;