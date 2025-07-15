function renderComplaintsTable({ data, page = 1, pageSize = 10, total = 0 } = {}) {
  // If no data is passed, use default dashboard demo data (first 10 rows)
  const complaints = data || [
    { id: 'CM9801', customer: 'Adebayo Kayode', title: 'Delayed delivery of online order', assignee: 'Kemi Adeleke', date: 'Just now', status: 'in-progress' },
    { id: 'CM9802', customer: 'Leslie Young', title: 'Incorrect billing charges', assignee: 'Ibrahim Musa', date: 'A minute ago', status: 'complete' },
    { id: 'CM9803', customer: 'Mufutau Umar', title: 'Poor customer service', assignee: 'Grace Okonkwo', date: '1 hour ago', status: 'pending' },
    { id: 'CM9804', customer: 'Ahmed Mayowa', title: 'Defective product received', assignee: 'Unassigned', date: 'Yesterday', status: 'approved' },
    { id: 'CM9805', customer: 'Akinride Kazeem', title: 'Account access issues', assignee: 'Machala', date: 'Feb 2, 2025', status: 'rejected' },
    { id: 'CM9806', customer: 'Sarah Johnson', title: 'Payment processing error', assignee: 'Kemi Adeleke', date: 'Feb 1, 2025', status: 'in-progress' },
    { id: 'CM9807', customer: 'Michael Chen', title: 'Website login problems', assignee: 'Ibrahim Musa', date: 'Jan 31, 2025', status: 'complete' },
    { id: 'CM9808', customer: 'Fatima Al-Zahra', title: 'Order cancellation request', assignee: 'Grace Okonkwo', date: 'Jan 30, 2025', status: 'pending' },
    { id: 'CM9809', customer: 'David Rodriguez', title: 'Product quality complaint', assignee: 'Unassigned', date: 'Jan 29, 2025', status: 'approved' },
    { id: 'CM9810', customer: 'Lisa Thompson', title: 'Refund not processed', assignee: 'Machala', date: 'Jan 28, 2025', status: 'rejected' }
  ];
  const totalPages = Math.ceil((total || complaints.length) / pageSize);

  const getStatusText = (status) => {
    const statusMap = {
      'in-progress': 'In Progress',
      'complete': 'Complete',
      'pending': 'Pending',
      'approved': 'Approved',
      'rejected': 'Rejected'
    };
    return statusMap[status] || status;
  };

  const getMenuOptions = (status) => {
    switch (status) {
      case 'in-progress':
        return ['Mark as Complete', 'Suspend', 'Reject'];
      case 'pending':
        return ['Approve', 'Reject'];
      case 'approved':
        return ['Reopen', 'Reject'];
      case 'rejected':
        return ['Reopen'];
      case 'complete':
        return ['Reopen'];
      default:
        return [];
    }
  };

  // Dicebear avatar URL 
  const getAvatarUrl = (name) => {
    return `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(name)}`;
  };

  return `
    <div class="table-container">
      <div class="table-header">
        <div class="table-controls">
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
        <div class="table-search">
          <svg viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <table class="complaints-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Complaint ID</th>
            <th>Customer</th>
            <th>Title</th>
            <th>Assignee</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${complaints.map((complaint, index) => `
            <tr>
              <td><input type="checkbox" /></td>
              <td>#${complaint.id}</td>
              <td>
                <div class="customer-info">
                  <img class="customer-avatar-img" src="${getAvatarUrl(complaint.customer)}" alt="${complaint.customer}" />
                  ${complaint.customer}
                </div>
              </td>
              <td>${complaint.title}</td>
              <td>${complaint.assignee}</td>
              <td>${complaint.date}</td>
              <td>
                <div class="status-indicator status-${complaint.status}">
                  <div class="status-dot"></div>
                  ${getStatusText(complaint.status)}
                </div>
              </td>
              <td style="position:relative;">
                <div class="action-menu-trigger" data-rowid="${complaint.id}">
                  <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: rgba(255,255,255,0.5); cursor: pointer;">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
                <div class="action-menu" id="action-menu-${complaint.id}" style="display:none;">
                  ${getMenuOptions(complaint.status).map(option => `<div class="action-menu-item" data-action="${option}" data-rowid="${complaint.id}">${option}</div>`).join('')}
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="pagination">
        <div class="page-number" data-page="prev">‹</div>
        ${Array.from({ length: totalPages }, (_, i) => `
          <div class="page-number${i + 1 === page ? ' active' : ''}" data-page="${i + 1}">${i + 1}</div>
        `).join('')}
        <div class="page-number" data-page="next">›</div>
      </div>
    </div>
  `;
} 