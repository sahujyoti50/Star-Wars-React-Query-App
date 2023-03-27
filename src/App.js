import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Planets from './Components/Planets';
import People from './Components/People';
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  const [page, setPage] = useState('planets');
  return (
    <>
      <div className="App">
        <h1>Star wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
