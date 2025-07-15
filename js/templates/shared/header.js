function renderDashboardHeader() {
  return `
    <div class="dashboard-header">
      <div style="display: flex; align-items: center;">
        <div class="sidebar-toggle" onclick="toggleSidebar()">
          <svg viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </div>
      </div>
      <div class="header-search">
        <svg viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input type="text" placeholder="Search" />
      </div>
      <div class="header-actions">
        <div class="header-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 3.1A9 9 0 1 0 21 12c0-4.97-4.03-9-9-8.9zm0 16.8A7.8 7.8 0 0 1 4.2 12c0-4.3 3.5-7.8 7.8-7.8V19.9z"/>
          </svg>
        </div>
        <div class="header-icon">
          <svg viewBox="0 0 24 24">
            <path d="M17.65 6.35A7.95 7.95 0 0 0 12 4V1L7 6l5 5V7c3.31 0 6 2.69 6 6 0 1.3-.42 2.5-1.13 3.47l1.46 1.46A7.97 7.97 0 0 0 20 13c0-2.21-.9-4.21-2.35-5.65zM6.35 17.65A7.95 7.95 0 0 0 12 20v3l5-5-5-5v3c-3.31 0-6-2.69-6-6 0-1.3.42-2.5 1.13-3.47L4.67 6.07A7.97 7.97 0 0 0 4 11c0 2.21.9 4.21 2.35 5.65z"/>
          </svg>
        </div>
        <div class="header-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </div>
      </div>
    </div>
  `;
}

function toggleSidebar() {
  const sidebar = document.querySelector('.dashboard-sidebar');
  sidebar.classList.toggle('collapsed');
} 