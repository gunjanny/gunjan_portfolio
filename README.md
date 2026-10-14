# 🚀 Gunjan Yadav — Personal Portfolio Website

A modern, high-performance, and visually captivating developer portfolio crafted for **Gunjan Yadav** (B.Tech Student in Electronics & Communication Engineering at **JECRC University**, Jaipur, India).

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. 100% responsive, accessible, dark/light theme enabled, and ready for instant continuous deployment to **Vercel**.

---

## 🌟 Key Features

- **Futuristic & Clean UI/UX**: Designed with glassmorphism panels, glowing ambient gradients, subtle hover effects, and modern typography.
- **Dynamic Theme Switcher**: Instant Dark Mode and Light Mode toggle with local storage persistence and system preference detection.
- **Interactive Hero Section**: Displays personal title (*B.Tech Student | AI & Technology Enthusiast*), location, live status badge, and an interactive code terminal card.
- **Comprehensive Sections**:
  - **Hero / Home**: Greeting, tagline, quick call-to-actions, and social links.
  - **About Me**: Professional student-friendly story, core values, and analytical background from Sophia School (82% PCM).
  - **Education**: Detailed timelines for B.Tech ECE at JECRC University (2026–2030) and Class XII (PCM) from Sophia School, Jaipur with relevant coursework chips.
  - **Skills**: Interactive skill cards with category filters (Frontend, Languages, AI & Tech, Tools & Workflow) and proficiency indicators for:
    - HTML
    - CSS
    - JavaScript
    - Python
    - Artificial Intelligence
    - Generative AI
    - Web Development
    - Digital Productivity
  - **Projects**: Dedicated project cards for:
    1. *Personal Portfolio Website*
    2. *AI Website Project*
    3. *Student Productivity Project*
    - Includes interactive **"View Project" modal**, tech stack badges, and GitHub links.
  - **Achievements**: Extensible milestone showcase featuring Certifications, Hackathons, Courses, Awards, and an extensible placeholder card.
  - **Contact**: Direct communication suite featuring 1-click **Copy Email** with confetti celebration, LinkedIn and GitHub external links, and an interactive contact form.
- **Mobile Friendly**: Smooth hamburger navigation drawer and responsive grids across all viewport sizes.
- **SEO & Social Share Ready**: Configured with Open Graph meta tags, semantic HTML5 structure, and custom favicon.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment Platform**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
my-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── Navbar.jsx      # Navigation bar with theme toggle & mobile menu
│   │   ├── Hero.jsx        # Hero section with interactive terminal card
│   │   ├── About.jsx       # Personal narrative, highlights, and values
│   │   ├── Education.jsx   # JECRC University & Sophia School cards
│   │   ├── Skills.jsx      # Categorized skill cards with animated bars
│   │   ├── Projects.jsx    # Project showcase cards with modal triggers
│   │   ├── ProjectModal.jsx# Accessible project preview modal
│   │   ├── Achievements.jsx# Milestones, certifications & awards
│   │   ├── Contact.jsx     # Copy email, social links & contact form
│   │   └── Footer.jsx      # Professional footer with back-to-top button
│   ├── data/
│   │   └── portfolioData.js# Centralized content for easy editing
│   ├── App.jsx             # Main application orchestrator & theme provider
│   ├── index.css           # Tailwind directives, custom utilities & scrollbar
│   └── main.jsx            # Application entry point
├── index.html              # HTML shell with fonts and metadata
├── package.json            # Scripts & dependencies
├── postcss.config.js       # PostCSS plugins
├── tailwind.config.js      # Custom theme colors and keyframes
├── vercel.json             # Vercel SPA routing and build configuration
└── vite.config.js          # Vite configuration
```

---

## ⚡ Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🚢 Deploying to Vercel (1-Click)

This portfolio is fully optimized for **Vercel** with the included `vercel.json` configuration file.

### Option A: Via GitHub (Recommended)
1. Push this folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete modern portfolio website"
   git branch -M main
   git remote add origin https://github.com/gunjanny/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select the `portfolio` repository.
4. Vercel will automatically detect **Vite** as the framework:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**! Your site will be live on a fast, global edge network with a free `.vercel.app` URL and free SSL certificate.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## ✏️ How to Update Your Information

All your personal details, education, skills, projects, and achievements are organized in a single file:
👉 **`src/data/portfolioData.js`**

- **To add a project**: Add an item to the `projects` array.
- **To add an achievement / certificate**: Add an item to the `achievements` array.
- **To add a new skill**: Add an item to the `skills` array.

---

## 📄 License
This project is open-source under the MIT License. Feel free to customize and expand it!
