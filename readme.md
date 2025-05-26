# Todo Application

A simple, responsive todo application built with vanilla HTML, CSS, and JavaScript. This application allows users to create, manage, and persist their tasks using browser local storage.

## 🚀 Live Demo

[View Live Application](https://mountstack.github.io/todo-app/)

## ✨ Features

- ✅ Add new tasks 
- ✅ Delete tasks
- ✅ Persistent storage using localStorage 
- ✅ Clean, intuitive user interface

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Interactive functionality and local storage
- **Font Awesome** - Icons for enhanced UI

## 📦 Font Awesome Integration

This project uses Font Awesome icons for a better user experience. For deployment on GitHub Pages, we've implemented a local Font Awesome setup instead of npm dependencies.

### Why Local Font Awesome?

- **Static Hosting Compatibility**: GitHub Pages serves static files only, making npm dependencies unavailable at runtime
- **Performance**: Eliminates external CDN dependencies and potential loading delays
- **Reliability**: Ensures icons are always available regardless of third-party service status
- **Offline Support**: Application works completely offline once loaded

### Implementation Approach

Instead of including `node_modules` files (which would bloat the repository), we've extracted only the necessary Font Awesome assets:

1. **CSS File**: `fontawesome/css/all.min.css` - Contains all icon definitions and styling
2. **Web Fonts**: `fontawesome/webfonts/` directory - Contains the actual font files (woff, woff2 formats) 

This approach provides:
- ✅ Minimal file footprint
- ✅ No build process required
- ✅ Direct deployment compatibility
- ✅ Professional project structure

## 🏗️ Project Structure

```
todo-app/ 
├── index.html                   # Main HTML file 
├── styles.css                   # Application styles and Font Awesome import 
├── app.js                       # Application logic and functionality 
├── fontawesome 
│   ├── css/ 
│   │   ├── all.min.css          # Font Awesome CSS (path-modified) 
│   ├── webfonts/                # Font Awesome web fonts 
│   │   ├── fa-brands-400.woff2 
│   │   ├── fa-regular-400.woff2 
│   │   ├── fa-solid-900.woff2 
|   |   └── ... 
└── README.md                    # Project documentation 

```

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [GitHub Pages](https://pages.github.com/) for free static hosting

---

**Built with ❤️ using vanilla web technologies**