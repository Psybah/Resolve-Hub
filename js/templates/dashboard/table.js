function renderComplaintsTable({ data, page = 1, pageSize = 10, total = 0 } = {}) {
  // Demo data for legal case management
  const cases = data || [
    { id: 'LC1001', title: 'Land Dispute Resolution', startDate: '2024-05-01', dueDate: '2024-06-01', assignee: 'Kemi Adeleke', status: 'in-progress' },
    { id: 'LC1002', title: 'Contract Breach', startDate: '2024-04-15', dueDate: '2024-05-20', assignee: 'Ibrahim Musa', status: 'opened' },
    { id: 'LC1003', title: 'Divorce Settlement', startDate: '2024-03-10', dueDate: '2024-04-10', assignee: 'Grace Okonkwo', status: 'completed' },
    { id: 'LC1004', title: 'Intellectual Property Dispute', startDate: '2024-05-10', dueDate: '2024-07-01', assignee: 'Olamide Badoo', status: 'in-progress' },
    { id: 'LC1005', title: 'Fraud Allegation', startDate: '2024-04-01', dueDate: '2024-05-15', assignee: 'Chinedu Obi', status: 'opened' },
    { id: 'LC1006', title: 'Property Inheritance', startDate: '2024-02-20', dueDate: '2024-03-20', assignee: 'Mercy Johnson', status: 'completed' },
    { id: 'LC1007', title: 'Employment Dispute', startDate: '2024-05-05', dueDate: '2024-06-10', assignee: 'Fatima Al-Zahra', status: 'in-progress' },
    { id: 'LC1008', title: 'Personal Injury Claim', startDate: '2024-03-15', dueDate: '2024-04-15', assignee: 'Big Wiz', status: 'completed' },
    { id: 'LC1009', title: 'Business Registration', startDate: '2024-04-10', dueDate: '2024-05-10', assignee: 'Oladolami Asake', status: 'opened' },
    { id: 'LC1010', title: 'Debt Recovery', startDate: '2024-05-12', dueDate: '2024-06-12', assignee: 'Machala', status: 'in-progress' }
  ];

  const getStatusText = (status) => {
    const statusMap = {
      'in-progress': 'In Progress',
      'opened': 'Opened',
      'completed': 'Completed'
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-progress': return '#3B82F6'; // blue
      case 'opened': return '#F59E0B'; // orange
      case 'completed': return '#10B981'; // green
      default: return '#888';
    }
  };

  const getAvatarUrl = (name) => {
    return `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(name)}`;
  };

  const getMenuOptions = (status) => {
    switch (status) {
      case 'in-progress':
        return [
          { action: 'Continue', label: 'Continue' },
          { action: 'Mark as Completed', label: 'Mark as Completed' },
          { action: 'View Details', label: 'View Details' }
        ];
      case 'opened':
        return [
          { action: 'Start', label: 'Start' },
          { action: 'Claim', label: 'Claim' },
          { action: 'View Details', label: 'View Details' }
        ];
      case 'completed':
        return [
          { action: 'Reopen', label: 'Reopen' },
          { action: 'View Details', label: 'View Details' }
        ];
      default:
        return [
          { action: 'View Details', label: 'View Details' }
        ];
    }
  };

  const totalPages = pageSize && total ? Math.ceil(total / pageSize) : 1;

  return `
    <div class="table-container" style="display: flex; flex-direction: column; align-items: center; padding-top: 1em;">
      <div class="table-header" style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 0 2em 1em 2em; box-sizing: border-box;">
        <div class="table-controls" style="display: flex; gap: 1em;">
          <div class="control-icon" title="Add">
            <svg viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
          </div>
          <div class="control-icon" title="Filter">
            <svg viewBox="0 0 24 24"><path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-.293.707l-6.414 6.414A1 1 0 0 0 14 13.414V19a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 8 17v-3.586a1 1 0 0 0-.293-.707L1.293 6.707A1 1 0 0 1 1 6V4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="control-icon" title="Sort">
            <svg viewBox="0 0 24 24"><path d="M3 16h18M3 12h12M3 8h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
          </div>
        </div>
        <div class="table-search" style="margin-left: auto; display: flex; align-items: center;">
          <svg viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <table class="complaints-table" style="margin: 0 auto;">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Case ID</th>
            <th>Case Title</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>Assignee</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${cases.map((c, index) => `
            <tr>
              <td><input type="checkbox" /></td>
              <td>#${c.id}</td>
              <td>${c.title}</td>
              <td>${c.startDate}</td>
              <td>${c.dueDate}</td>
              <td>
                <div class="customer-info">
                  <img class="customer-avatar-img" src="${getAvatarUrl(c.assignee)}" alt="${c.assignee}" />
                  ${c.assignee}
                </div>
              </td>
              <td>
                <div class="status-indicator" style="color: ${getStatusColor(c.status)};">
                  <div class="status-dot" style="background:${getStatusColor(c.status)};"></div>
                  ${getStatusText(c.status)}
                </div>
              </td>
              <td style="position:relative;">
                <div class="action-menu-trigger" data-rowid="${c.id}">
                  <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: rgba(255,255,255,0.5); cursor: pointer;">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
                <div class="action-menu" id="action-menu-${c.id}" style="display:none;">
                  ${getMenuOptions(c.status).map(option => `<div class="action-menu-item" data-action="${option.action}" data-rowid="${c.id}">${option.label}</div>`).join('')}
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div style="height: 2em;"></div>
      ${totalPages > 1 ? `
      <div class="pagination">
        <div class="page-number" data-page="prev">‹</div>
        ${Array.from({ length: totalPages }, (_, i) => `
          <div class="page-number${i + 1 === page ? ' active' : ''}" data-page="${i + 1}">${i + 1}</div>
        `).join('')}
        <div class="page-number" data-page="next">›</div>
      </div>
      ` : `<button class=\"btn-gradient\" style=\"margin: 0 auto 2em auto; display: block;\" onclick=\"window.location.href='tasks.html'\">View More</button>`}
    </div>
  `;
} 