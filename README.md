# The Space Industry in 2040 - Scenario Planning

A modern, responsive single-page web application presenting strategic scenario planning for the space industry in 2040.

## 🚀 Features

- **Dark Space Theme**: Deep blues, blacks, and glowing accents for an immersive experience
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Interactive Scenario Matrix**: Visual 2x2 grid for exploring alternative futures
- **Dynamic Routing**: Navigate between overview and detailed scenario pages
- **Detailed Scenario Pages**: In-depth exploration of each future scenario with stats and insights
- **Responsive Design**: Optimized for all devices with Tailwind CSS
- **Rich Content**: Comprehensive analysis of trends, scenarios, and strategic implications

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Design System

- **Theme**: Dark mode with deep space aesthetic
- **Colors**: Deep blues (`slate-950`), blacks, cyan and blue accents
- **Typography**: Inter font family
- **Effects**: Glassmorphism with backdrop blur and subtle borders

## 📁 Project Structure

```
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Router configuration
    ├── HomePage.jsx    # Main overview page with all scenarios
    ├── NewFrontier.jsx # Detailed "New Frontier" scenario page
    └── index.css       # Global styles and Tailwind imports
```

## 📊 Sections

1. **Hero Section**: Stunning full-viewport introduction
2. **Introduction & Scope**: Analysis framework and methodology
3. **Key Trends**: Six major trends shaping the industry
4. **Scenario Matrix**: Visual 2x2 framework
5. **Four Scenarios**: Interactive exploration of alternative futures
   - New Frontier (Cooperation + Breakthrough)
   - Star Rivals (Fragmentation + Breakthrough)
   - Orbital Commons (Cooperation + Stagnation)
   - Cold Orbit (Fragmentation + Stagnation)
6. **Implications & Challenges**: Risks and cross-scenario dynamics
7. **Strategic Preparation**: Key questions and action items

## 🎯 Technologies Used

- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icon set
- **React Router DOM**: Client-side routing

## 🌟 Credits

Created by Group D for The Space Industry in 2040 Scenario Planning presentation.

## 📄 License

This project is for educational and presentation purposes.
