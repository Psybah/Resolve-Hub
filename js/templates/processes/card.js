function renderProcessCard(process) {
  const statusColors = {
    'in-progress': '#3B82F6',
    'complete': '#10B981',
    'pending': '#F59E0B',
    'approved': '#F59E0B',
    'rejected': '#EF4444'
  };
  const getAvatarUrl = (name) => `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(name)}`;
  const statusText = {
    'in-progress': 'In Progress',
    'complete': 'Complete',
    'pending': 'Pending',
    'approved': 'Approved',
    'rejected': 'Rejected'
  }[process.status] || process.status;
  const getMenuOptions = (status) => {
    switch (status) {
      case 'in-progress': return ['Mark as Complete', 'Suspend', 'Reject'];
      case 'pending': return ['Approve', 'Reject'];
      case 'approved': return ['Reopen', 'Reject'];
      case 'rejected': return ['Reopen'];
      case 'complete': return ['Reopen'];
      default: return [];
    }
  };
  return `
    <div class="process-card">
      <div class="process-card-header">
        <div>
          <div class="process-id">#${process.id}</div>
          <div class="process-title">${process.title}</div>
        </div>
        <img class="process-avatar" src="${getAvatarUrl(process.assignee)}" alt="${process.assignee}" />
      </div>
      <div class="process-card-body">
        <div class="process-row-flex">
          <div class="process-assignee">Assignee:<br/><span>${process.assignee}</span></div>
          <div class="process-status" style="color: ${statusColors[process.status]}"><span class="status-dot" style="background:${statusColors[process.status]}"></span> ${statusText}</div>
        </div>
        <div class="process-time">Time: ${process.time}</div>
      </div>
      <div class="process-card-menu">
        <div class="process-action-menu-trigger" data-processid="${process.id}">
          <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; fill: #888; cursor: pointer;"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
        </div>
        <div class="process-action-menu" id="process-action-menu-${process.id}" style="display:none;">
          ${getMenuOptions(process.status).map(option => `<div class="process-action-menu-item" data-action="${option}" data-processid="${process.id}">${option}</div>`).join('')}
        </div>
      </div>
    </div>
  `;
} 