/* import logo from './logo.svg'; */
import './App.css';
/* import Hello from './Hello'; */
/* import { robots } from './robots'; */
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import React, { useState, useEffect } from 'react';
import Scroll from './components/Scroll';


function App() {

  const [robotsArray, setRobots] = useState([]);
  const [serachfield, setSearch] = useState('');

  const onSearchChange = (event) => {
    setSearch(event.target.value);

  }

  const fetchList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    setRobots(data);
  };

  useEffect(() => {
    fetchList();
    /* console.log(fetchList()); */
  }, [])

  const filteredRobots = robotsArray.filter(robot => {
    return robot.name.toLowerCase().includes(serachfield.toLowerCase());
  })
  console.log(filteredRobots);

  return (
    <div className="App tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      {/* <Hello greeting={'oppaiiiii suki desu'}/> */}
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
