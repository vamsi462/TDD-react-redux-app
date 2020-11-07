
import React from 'react'
import './App.css';

const renderBooks= (books)=>{
    return (<div className="books">
      {
        books.map(book => {
          return (<div className="book">
            <h2 className="title">{book.name}</h2>
          </div>)
        })
      }
    </div>)
  }

function App() {
    const books =[{name:"React"},{name:'Redux'}]
  return (
    <div className="App">
      <h1>Library</h1>
      {renderBooks(books)}
    </div>
  );
}

export default App;
