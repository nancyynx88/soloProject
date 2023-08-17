import React, { useState } from 'react';
import ReactDom from 'react-dom';

const App = () => {
  const [feedEntries, setFeedEntries] = useState([]);
  console.log('Update newFeed = ' + feedEntries);
  // useEffect(() => {
  //   console.log('updated newFeed = ' + newFeed);
  // }, [newFeed]);

  const createFeed = () => {
    const currentDate = new Date().toLocaleString();
    console.log('currentData =' + currentDate);
    setFeedEntries([...feedEntries, currentDate]);
  };
  // console.log('Update newFeed = ' + newFeed);
  // const feedArr = [];
  // feedArr.push(newFeed);
  return (
    <div id='app'>
      <h1>Feed your dog?</h1>

      <button onClick={createFeed}>Morning</button>
      <button onClick={createFeed}>Evening</button>

      <h4>Feeding log</h4>
      <ul id = 'log'>
        {feedEntries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
  //render database data to client
const body = document.querySelector('body');
const log = document.querySelector('#log');
log.onchange = () =>{
  const feedLog = log.value;
  fetch('http://localhost:3000', {
    method: 'POST',
    
    //body: JSON.stringify({  :  }),
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    body.log = data;
  })
  .catch(err => console.log(err))
};
};

export default App;
