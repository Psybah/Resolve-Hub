function renderProcessCard(process) {
  const statusColors = {
    'in-progress': '#3B82F6',
    'opened': '#F59E0B',
    'completed': '#10B981'
  };
  const getAvatarUrl = (name) => `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(name)}`;
  const statusText = {
    'in-progress': 'In Progress',
    'opened': 'Opened',
    'completed': 'Completed'
  }[process.status] || process.status;
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
      <div class="process-card-eye">
        <span class="process-eye-icon" data-processid="${process.id}" style="cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="#888"><path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg>
        </span>
      </div>
    </div>
  `;
} 