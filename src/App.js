
import React from 'react'
import './App.css';
import BooksList from './BookList';

function App() {
    const books =[{name:"React"},{name:'Redux'}]
  return (
    <div className="App">
      <h1>Library</h1>
     <BooksList books ={books}/>
    </div>
  );
}

export default App;
