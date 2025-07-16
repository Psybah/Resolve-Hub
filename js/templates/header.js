function renderHeader() {
  return `
    <header class="main-header">
      <img src="assets/logo.png" alt="Taskify Logo" class="logo"/>
      <nav>
        <a href="dashboard.html">Dashboard</a>
        <a href="tasks.html">Tasks</a>
        <a href="processes.html">Process Instances</a>
        <a href="#">Reports</a>
      </nav>
      <div class="header-actions">
        <button class="btn-gradient outline">Log In</button>
        <button class="btn-gradient">Sign Up</button>
      </div>
    </header>
  `;
} 