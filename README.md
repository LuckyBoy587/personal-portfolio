# Personal Portfolio

A modern, responsive personal portfolio website built with React 19 and Vite. Showcases skills, projects, and professional background with smooth animations and a glassmorphism design aesthetic.

![Portfolio Preview](https://via.placeholder.com/1200x600/1a1a2e/ffffff?text=Personal+Portfolio)

## 🚀 About This Project

This portfolio is designed to present work, experience, and accomplishments in software development. It features a clean, modern interface with smooth animations, a projects showcase, resume section, and theme support (light/dark mode).

## 🛠️ Tech Stack

- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React, FontAwesome (via CDN)
- **UI Components:** Custom components with glassmorphism effects

## ✨ Features

- **Responsive Design:** Mobile-first approach with breakpoints for all screen sizes
- **Theme Support:** Light and dark mode with smooth transitions
- **Smooth Animations:** Page transitions and hover effects using Framer Motion and GSAP
- **Glassmorphism UI:** Modern glass-like design elements
- **Projects Showcase:** Interactive project cards with tech stack badges
- **Tabbed Navigation:** About, Resume, and Projects sections

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LuckyBoy587/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📁 Project Structure

```
personal-portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── BlurText.jsx     # Text blur animation component
│   │   ├── GlareHover.jsx   # Glare hover effect component
│   │   ├── GradientText.jsx # Gradient text effect
│   │   ├── ShinyText.jsx    # Shiny text animation
│   │   ├── TextType.jsx     # Typewriter effect component
│   │   └── ui/              # Atomic UI elements
│   │       └── animated-theme-toggler.jsx
│   ├── lib/
│   │   └── utils.js         # Utility functions (cn helper)
│   ├── utility/             # Layout/Logic helpers
│   │   ├── context-box.jsx  # Glassmorphic container
│   │   └── scrolling-tech.jsx
│   ├── AboutMe.jsx          # About section component
│   ├── App.jsx              # Main application component
│   ├── Branding.jsx         # Personal branding component
│   ├── Resume.jsx           # Resume section component
│   ├── navbar.jsx           # Navigation component
│   ├── projects.jsx         # Projects showcase component
│   └── main.jsx             # Application entry point
├── index.html
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

## 🎨 Design System

### Color Palette

- **Primary:** Accent colors for highlights and interactions
- **Secondary:** Background and card colors
- **Text:** Bright text for headings, gray text for body

### Typography

- **Heading Font:** Playfair Display
- **Body Font:** Inter or Open Sans

### Animations

- **Framer Motion:** Used for simple entry animations and hover effects
- **GSAP:** Used for complex timeline-based sequences

## 🧩 Key Components

### ContextBox

A glassmorphic container component used throughout the portfolio:
```jsx
import ContextBox from "./utility/context-box.jsx";

<ContextBox>
  <p>Content goes here</p>
</ContextBox>
```

### AnimatedThemeToggler

Light/dark mode toggle button:
```jsx
import { AnimatedThemeToggler } from "./components/ui/animated-theme-toggler.jsx";

<AnimatedThemeToggler />
```

### cn Utility

Class name merger for Tailwind CSS:
```jsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class")}>
```

## 📝 Available Scripts

| Script | Description |
| ------ | ----------- |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

## 🔧 Configuration

### Path Alias

The project uses `@` as an alias for `src/`:
```jsx
import MyComponent from "@/components/MyComponent";
```

### Theme Support

Theme is controlled via CSS classes on `document.documentElement`:
- Default: Dark mode
- `.light`: Light mode

## 📧 Contact

- **Email:** kowshi587@gmail.com
- **GitHub:** [@LuckyBoy587](https://github.com/LuckyBoy587)
- **LinkedIn:** [Kowshik Baskaran](https://linkedin.com/in/kowshik-baskaran)

## 📄 License

This project is open source and available under the MIT License.
