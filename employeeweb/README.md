# 🏢 Employee Management Web App

A modern, fully-functional Employee Management System built with React and Vite. Features a beautiful glassmorphic design, user authentication, and employee CRUD operations with local storage persistence.

## ✨ Features

- **🔐 Authentication** - Secure login system with demo credentials
- **👥 Employee Management** - Create, read, and delete employee records
- **🔍 Smart Filtering** - Filter employees by department
- **📊 Statistics** - View total employees, salary info, and department breakdown
- **💾 Data Persistence** - All data saved to browser localStorage
- **📱 Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **🎨 Modern UI** - Glassmorphic design with smooth animations
- **⚡ Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/harivasan1/empolyment-hr.git
cd employeeweb

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173/`

### Demo Credentials
```
Username: admin
Password: 1234
```

## 🛠 Available Scripts

```bash
# Development server (with HMR)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
employeeweb/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── EmployeeForm.jsx  # Form to add employees
│   │   ├── EmployeeList.jsx  # Employee list container
│   │   ├── EmployeeItem.jsx  # Individual employee card
│   │   └── Navbar.jsx        # Navigation bar
│   │
│   ├── pages/               # Page components
│   │   ├── LoginPage.jsx    # Authentication page
│   │   └── DashboardPage.jsx # Main dashboard
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── App.css              # App-level styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
│
├── package.json             # Project dependencies
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint rules
└── index.html              # HTML entry point
```

## 🎨 Tech Stack

- **Frontend:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Routing:** React Router DOM 7.12.0
- **Styling:** Pure CSS with variables
- **Linting:** ESLint 9.39.1

## 📖 Documentation

For detailed information about the project, including:
- Issues fixed and solutions
- Component explanations
- Design system details
- Testing guide
- Learning resources

See [DOCUMENTATION.md](./DOCUMENTATION.md)

## 🎯 Core Features Explained

### Authentication
- Simple login page with form validation
- Demo credentials for testing
- User state management with React hooks
- Logout functionality

### Employee Management
- **Add Employees:** Form with validation for name, department, and salary
- **View Employees:** List view with employee details
- **Filter Employees:** Filter by department in real-time
- **Delete Employees:** Remove employees with confirmation
- **Statistics:** View total count, total salary, and averages

### Data Storage
- All data stored in browser's localStorage
- Persists across browser sessions
- Data loaded automatically on app startup
- Updates in real-time

## 🎨 Design System

### Color Palette
- Primary: #2563eb (Blue)
- Primary Dark: #1e40af (Dark Blue)
- Success: #10b981 (Green)
- Danger: #ef4444 (Red)
- Warning: #f97316 (Orange)

### Design Features
- Glassmorphic cards with blur effects
- Animated gradient background
- Smooth hover animations
- Professional shadows and depth
- Mobile-responsive layouts

## 🔄 User Flow

1. **Login** → User enters credentials (admin/1234)
2. **Dashboard** → View statistics and employee list
3. **Add Employee** → Fill form and submit
4. **Filter** → Select department to filter
5. **Delete** → Remove employees as needed
6. **Logout** → Return to login page

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 1024px

## 🧪 Testing

### Test the App
1. Open http://localhost:5173/
2. Login with admin / 1234
3. Add sample employees
4. Test filtering by department
5. Test deletion
6. Refresh page to verify data persistence

### Test Data
```javascript
Name: John Doe
Department: Engineering
Salary: 75000

Name: Jane Smith
Department: Finance
Salary: 65000
```

## 🐛 Known Issues & Solutions

### Issue: File naming inconsistency
**Status:** ✅ FIXED
- Renamed `EmployeeFrom.jsx` → `EmployeeForm.jsx`

### Issue: Empty component
**Status:** ✅ FIXED
- Implemented `EmployeeList.jsx` component

### Issue: No styling
**Status:** ✅ FIXED
- Added comprehensive CSS styling with glassmorphic design

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop dist folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

- Created: January 15, 2026
- Framework: React 19 + Vite 7
- Styling: Modern CSS with Glassmorphism

## 📞 Support

For questions or issues:
1. Check [DOCUMENTATION.md](./DOCUMENTATION.md)
2. Open an issue on GitHub
3. Review code comments in components

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** January 15, 2026
