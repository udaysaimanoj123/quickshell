import React from 'react';

function ControlPanel({ onGroupByChange, onSortByChange, groupBy, sortBy }) {
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
  
  return (
    <div className="control-panel">
      <label>Group by:</label>
      <select value={groupBy} onChange={(e) => onGroupByChange(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>

      <label>Sort by:</label>
      <select value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default ControlPanel;
