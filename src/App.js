import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState("")

  useEffect(() => {
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.content);  
      }
    )
  }, [])


  const handleClick = () => {
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.content);  
      }
    )
  }

  return (
    <div className="App">
      <div className='quoteCard'>
        <p>"{quote}"</p>
        <button onClick={handleClick} className='quoteButton'>Get new Quote</button>
      </div>
    </div>
  );
}

export default App;
