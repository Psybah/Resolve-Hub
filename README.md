# ResolveHub – Customer Complaint Resolution Platform

ResolveHub is a modern, modular web application for managing and resolving customer complaints efficiently. Designed with a Figma-inspired aesthetic, Unbounded font, and custom gradients, it features a responsive landing page and a scalable, template-based structure ready for Java backend integration.

## Features

- **Figma-style Landing Page:** Eye-catching hero section, custom gradients, and professional branding.
- **Responsive Design:** Fully adaptive layout for desktop, tablet, and mobile devices.
- **Modular Architecture:** Reusable HTML, CSS, and JS templates for rapid development and easy maintenance.
- **Dashboard Preview:** Live dashboard hero image with smooth scaling and cut-off effect.
- **Navigation:** Transparent header, sidebar navigation, and context-aware action menus.
- **Pages:**
  - **Landing Page:** Introduction and call-to-action.
  - **Dashboard:** Metrics, data table, and quick actions.
  - **Tasks:** Paginated task table with avatars and status.
  - **Processes:** Process cards with avatars, status, and action dropdowns.
- **Dicebear Avatars:** Unique, identicon-style avatars for customers and assignees.
- **Accessible & Modern UI:** Compact layouts, clear active/hover states, and scalable components.

## Project Structure

```
Customer-Complaint-Resolution/
│
├── index.html              # Landing page
├── dashboard.html          # Dashboard page
├── tasks.html              # Tasks page
├── processes.html          # Processes page
│
├── assets/                 # Images, logos, and icons
│   ├── logo.png
│   ├── logo-tab.png
│   ├── dashboard-hero.png
│   └── hero-bg.png
│
├── css/                    # Modular CSS files
│   ├── variables.css
│   ├── main.css
│   ├── layout.css
│   ├── buttons.css
│   ├── header.css
│   ├── hero.css
│   ├── dashboard-preview.css
│   ├── dashboard/          # Dashboard-specific styles
│   └── processes/          # Processes-specific styles
│
├── js/
│   ├── main.js             # App entry and event handling
│   └── templates/          # Modular JS templates
│       ├── header.js
│       ├── hero.js
│       ├── dashboardPreview.js
│       ├── shared/
│       │   ├── header.js
│       │   └── sidebar.js
│       ├── dashboard/
│       │   ├── metrics.js
│       │   └── table.js
│       └── processes/
│           └── card.js
│
└── README.md               # Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Customer-Complaint-Resolution.git
   cd Customer-Complaint-Resolution
   ```

2. **Open `index.html` in your browser**  
   No build step is required. All assets and scripts are ready to use.

3. **Development Workflow:**
   - Edit modular CSS/JS files for rapid prototyping.
   - Update demo data in JS templates as needed.
   - Integrate with your Java backend by connecting API endpoints in `main.js` and template files.

## Customization

- **Branding:** Replace images in `assets/` with your own logos and backgrounds.
- **Colors & Fonts:** Adjust `css/variables.css` for theme changes.
- **Components:** Extend or modify templates in `js/templates/` for new features.

## Responsive Design

- The landing page and all main pages are fully responsive.
- Dashboard preview and hero content scale smoothly for all device sizes.
- No horizontal scrolling or overflow on mobile.

## License

This project is licensed under the MIT License.

---

**Questions or feedback?**  
Open an issue or contact the maintainer. 