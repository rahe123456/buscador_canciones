import React  from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';

function App() {
  return (
    <div>
      <h1>Ejercicios Con React</h1>
      <CrudApi/>
      <hr/>
      <CrudApp/>
    </div>
  );
}

export default App;
