import React from 'react';
import PropTypes from 'prop-types';

function KanbanCard({ ticket, groupBy }) {
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

  const shouldShowIcon = groupBy === 'user' || (groupBy === 'status' && titleIconMap[ticket.status]);

  return (
    <div className="kanban-card">
      <h4>
        {shouldShowIcon && titleIconMap[ticket.status] && (
          <img 
            src={titleIconMap[ticket.status]} 
            alt={`${ticket.status} icon`} 
            style={{ marginRight: '8px', verticalAlign: 'middle' }} 
          />
        )}
        {ticket.title}
      </h4>

      <p>Status: {ticket.status}</p>
      <p>Assigned to: {ticket.user || 'Unassigned'}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
}

// PropTypes for type checking
KanbanCard.propTypes = {
  ticket: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    user: PropTypes.string,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  groupBy: PropTypes.string.isRequired, // Added prop for grouping
};

export default KanbanCard;
