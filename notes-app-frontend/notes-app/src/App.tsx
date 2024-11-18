import React from 'react';

import './App.css';
import AllRoutes from './routes/AllRoutes';
import MainNav from './components/global-components/MainNav';

function App() {
  return (
    <div className="App">
        <MainNav />
        <AllRoutes />
    </div>
  );
}

export default App;
