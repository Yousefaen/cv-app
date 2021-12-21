import React from 'react';
import {BrowserRouter, Route , Routes} from 'react-router-dom';


import HomeScreen from './HomeScreen';
import Projects from './Projects';

function App() {
  return (

<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<HomeScreen />} />
    <Route exact path="/projects" element={<Projects />} ></Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
      />
  </Routes>
</BrowserRouter>

  );
}

export default App;
