import React from 'react';
import KanbanCard from './KanbanCard';

// Update paths to match your file structure
const titleIconMap = {
    'Todo': require('./icons_FEtask/To-do.svg').default,
    'In progress': require('./icons_FEtask/in-progress.svg').default,
    'Done': require('./icons_FEtask/Done.svg').default,
    'Cancelled': require('./icons_FEtask/Cancelled.svg').default,
    'Backlog': require('./icons_FEtask/Backlog.svg').default,
    'No priority': require('./icons_FEtask/No-priority.svg').default,
    'High': require('./icons_FEtask/Img - High Priority.svg').default,
    'Medium': require('./icons_FEtask/Img - Medium Priority.svg').default,
    'Low': require('./icons_FEtask/Img - Low Priority.svg').default,
    'Urgent': require('./icons_FEtask/SVG - Urgent Priority colour.svg').default,
  };
  

function KanbanColumn({ title, tickets }) {
  const icon = titleIconMap[title] || null; // Get the icon based on title

  return (
    <div className="kanban-column">
      <h3>
        {icon && <img src={icon} alt={`${title} icon`} style={{ marginRight: '8px', verticalAlign: 'middle' }} />}
        {title}
        {/* Display the count of tickets next to the title */}
        <span style={{ marginLeft: '8px', fontWeight: 'normal', fontSize: '14px', color: '#555' }}>
          ({tickets.length})
        </span>
      </h3>
      {tickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} groupBy={title} />

      ))}
    </div>
  );
}

export default KanbanColumn;
