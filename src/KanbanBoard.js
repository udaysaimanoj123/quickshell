import React from 'react';
import KanbanColumn from './KanbanColumn';

function KanbanBoard({ tickets = [], groupBy, sortBy }) {
  console.log("Tickets in KanbanBoard:", tickets);
  if (!tickets || tickets.length === 0) {
    return <div>Loading tickets...</div>;
  }

  const groupTickets = (groupBy, tickets) => {
    switch (groupBy) {
      case 'status':
        return groupByStatus(tickets);
      case 'user':
        return groupByUser(tickets);
      case 'priority':
        return groupByPriority(tickets);
      default:
        return [];
    }
  };

  const sortGroupedTickets = (groupedTickets, sortBy) => {
    const sortedGroups = {};
    Object.entries(groupedTickets).forEach(([group, tickets]) => {
      sortedGroups[group] = sortTickets(tickets, sortBy);
    });
    return sortedGroups;
  };

  const groupedTickets = groupTickets(groupBy, tickets);
  const sortedGroupedTickets = sortGroupedTickets(groupedTickets, sortBy);
  console.log("Sorted Grouped Tickets:", sortedGroupedTickets);

  return (
    <div className="kanban-board">
      {Object.entries(sortedGroupedTickets).map(([group, tickets]) => (
        <KanbanColumn key={group} title={group} tickets={tickets} />
      ))}
    </div>
  );
}

const groupByStatus = (tickets) => {
  return tickets.reduce((acc, ticket) => {
    const status = ticket.status || 'No Status';
    if (!acc[status]) acc[status] = [];
    acc[status].push(ticket);
    return acc;
  }, {});
};

const groupByUser = (tickets) => {
  return tickets.reduce((acc, ticket) => {
    const user = ticket.userId || 'Unassigned'; // Ensure ticket.user exists
    if (!acc[user]) acc[user] = [];
    acc[user].push(ticket);
    return acc;
  }, {});
};

const groupByPriority = (tickets) => {
  const priorities = ['Urgent', 'High', 'Medium', 'Low', 'No priority'];
  return tickets.reduce((acc, ticket) => {
    const priority = priorities[ticket.priority] || 'No priority';
    if (!acc[priority]) acc[priority] = [];
    acc[priority].push(ticket);
    return acc;
  }, {});
};

// Updated sorting logic
const sortTickets = (tickets, sortBy) => {
  return [...tickets].sort((a, b) => {
    if (sortBy === 'priority') {
      return b.priority - a.priority; // Sort by priority in descending order
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title); // Sort by title in ascending order
    }
    return 0;
  });
};

export default KanbanBoard;
