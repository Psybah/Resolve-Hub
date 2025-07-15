function renderSidebar(activePage = 'dashboard') {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' },
    { id: 'tasks', label: 'Tasks', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' },
    { id: 'processes', label: 'Process Instances', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' },
    { id: 'reports', label: 'Reports', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' }
  ];

  return `
    <div class="dashboard-sidebar">
      <div class="sidebar-logo">
        <img src="assets/logo.png" alt="ResolveHub Logo" />
      </div>
      <nav class="sidebar-nav">
        ${navItems.map(item => `
          <a href="${item.id}.html" class="nav-item ${item.id === activePage ? 'active' : ''}" data-tooltip="${item.label}">
            <svg viewBox="0 0 24 24">
              <path d="${item.icon}"/>
            </svg>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </nav>
    </div>
  `;
} 