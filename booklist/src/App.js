import React from 'react';
import './App.css';
import BookContextProvider from './contexts/bookContext';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
