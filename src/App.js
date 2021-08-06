import React, { Suspense, useState } from 'react';
import './App.css';

const ComponentA = React.lazy(() => import('./ComponentA'));

function App() {

  const [showComponent, setShowComponent] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn React.Lazy
        </p>
      </header>
      <div className='App-body'>
        <button onClick={() => setShowComponent(true)}>Show Component</button>
        <Suspense fallback={<div>Loading...</div>}>
          {showComponent && <ComponentA />}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
