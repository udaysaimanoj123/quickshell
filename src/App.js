import React, { useState, useEffect } from 'react';
import KanbanBoard from './KanbanBoard';
import ControlPanel from './ControlPanel';
import './App.css';
import axios from 'axios';

function App() {
  const [tickets, setTickets] = useState([]);
  

  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    // Fetch tickets from API
    axios
      .get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => {
        setTickets(response.data.tickets); // Ensure you're accessing the tickets array
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const savedGroupBy = localStorage.getItem('groupBy');
    const savedSortBy = localStorage.getItem('sortBy');
    
    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  const handleGroupByChange = (group) => {
    setGroupBy(group);
    localStorage.setItem('groupBy', group); 
  };

  const handleSortByChange = (sort) => {
    setSortBy(sort);
    localStorage.setItem('sortBy', sort); 
  };

  return (
    <div className="App">
      <ControlPanel 
        onGroupByChange={handleGroupByChange} 
        onSortByChange={handleSortByChange} 
        groupBy={groupBy}  // Pass current groupBy state
        sortBy={sortBy}    // Pass current sortBy state
      />
      <KanbanBoard 
        tickets={tickets} 
        groupBy={groupBy} 
        sortBy={sortBy} 
      />
    </div>
  );
}

export default App;
