import React  from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <div>
      <h1>Ejercicios Con React</h1>
      {/*<CrudApi/>
      <hr/>
      <CrudApp/>*/}
      <hr/>
      <SongSearch/>
    </div>
  );
}

export default App;
