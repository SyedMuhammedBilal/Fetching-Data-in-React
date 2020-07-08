import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  
  const [repos, setRepos] = useState([{}]); 
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/SyedMuhammedBilal/repos")
      const data = await response.json();
      console.log(data)
      setRepos(data)
    }
    fetchData()
  }, [])

  //useEffect(() => {
  //fetch("https://jsonplaceholder.typicode.com/posts/1")
  //    .then(response => response.json())
  //    .then(json => {
  //      setData(json)
  //    })
  //}, [])

  return (
    <div className="App">
      <h2>hello from React</h2>
      <h3>showing API data</h3>
      <ul>
        {
          repos.map((repoObj, index) => {
            return(<li key={index}>{repoObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;