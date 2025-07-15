document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (typeof renderHeader === 'function' && typeof renderHero === 'function' && typeof renderDashboardPreview === 'function') {
    app.innerHTML = `
      ${renderHeader()}
      ${renderHero()}
      ${renderDashboardPreview()}
    `;
  }

  // Action menu event delegation for dashboard tables
  document.body.addEventListener('click', function (e) {
    // Close all menus if clicking outside
    if (!e.target.closest('.action-menu') && !e.target.closest('.action-menu-trigger')) {
      document.querySelectorAll('.action-menu').forEach(menu => menu.style.display = 'none');
    }
    // Open menu if clicking trigger
    if (e.target.closest('.action-menu-trigger')) {
      e.stopPropagation();
      const trigger = e.target.closest('.action-menu-trigger');
      const rowId = trigger.getAttribute('data-rowid');
      document.querySelectorAll('.action-menu').forEach(menu => menu.style.display = 'none');
      const menu = document.getElementById('action-menu-' + rowId);
      if (menu) menu.style.display = 'block';
    }
    // Handle action menu item click
    if (e.target.classList.contains('action-menu-item')) {
      e.stopPropagation();
      const action = e.target.getAttribute('data-action');
      const rowId = e.target.getAttribute('data-rowid');
      handleAction(action, rowId);
      document.querySelectorAll('.action-menu').forEach(menu => menu.style.display = 'none');
    }
    // Process card action menu
    if (e.target.closest('.process-action-menu-trigger')) {
      e.stopPropagation();
      const trigger = e.target.closest('.process-action-menu-trigger');
      const processId = trigger.getAttribute('data-processid');
      document.querySelectorAll('.process-action-menu').forEach(menu => menu.style.display = 'none');
      const menu = document.getElementById('process-action-menu-' + processId);
      if (menu) menu.style.display = 'block';
      document.addEventListener('click', closeProcessMenus, { once: true });
    }
    if (e.target.classList.contains('process-action-menu-item')) {
      e.stopPropagation();
      const action = e.target.getAttribute('data-action');
      const processId = e.target.getAttribute('data-processid');
      alert(`Action: ${action}\nProcess ID: ${processId}`);
      document.querySelectorAll('.process-action-menu').forEach(menu => menu.style.display = 'none');
    }
  });
});

function handleAction(action, rowId) {
  alert(`Action: ${action}\nComplaint ID: ${rowId}`);
}

function closeProcessMenus() {
  document.querySelectorAll('.process-action-menu').forEach(menu => menu.style.display = 'none');
} 