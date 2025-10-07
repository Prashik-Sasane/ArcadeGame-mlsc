# ArcadeGame-mlsc

Overview
GEN AI ARCADE is an interactive event landing page and arcade-style game web application developed for the MLSC VIT Pune event. The app features a futuristic AI-themed design using neon blues and dark cosmic background colors, integrating a classic spaceship shooter game experience. It is built with React, TypeScript, React Router DOM, and Tailwind CSS for a modern, responsive, and visually immersive user experience.

Features
Landing Page: Showcases event details with futuristic neon styling, featuring speaker info, event highlights, date/time, and registration button linking to Google Forms.

Arcade Game: "Spaceship Destruction" arcade game built with HTML5 Canvas and React hooks, where the player controls a spaceship to shoot alien invaders.

Final Page: Gamified access unlock page listing official WhatsApp group, registration form, and MLSC social media links in a neon style.

Consistent Neon Theme: Dark navy background with neon blue, cyan, gold, and purple accents to provide a unified arcade vibe.

Responsive Design: Works across desktop and mobile viewports with fluid grid and flex layouts.

Accessible and Interactive: Includes keyboard controls, focus-visible states, hover animations, and glowing effects.

Technologies Used
React 18 with TypeScript

React Router DOM v6 for multi-page SPA navigation

Tailwind CSS (OKLCH custom color palettes for neon effects)

HTML5 Canvas for game rendering

Vite as the build tool and development server

Project Structure
/src/pages: Contains all React page components (Landing, Game, Final, NotFound)

/src/components: Shared UI components like Nav, GlitchText, reusable UI elements

/src/hooks: Custom React hooks (e.g., keyboard input)

/src/assets: Static image assets including event poster and speaker photo

/src/main.tsx: Entry point with router configuration

Getting Started
Prerequisites
Node.js 18+

npm or yarn

Installation
bash
git clone https://github.com/yourusername/gen-ai-arcade.git
cd gen-ai-arcade

npm install
# or yarn install
Development
bash
npm run dev
# or yarn dev
Open http://localhost:5173 in your browser to view the app live.

Build for Production
bash
npm run build
# or yarn build
Production-ready static assets will be generated in /dist.

Deployment
Deploy the contents of /dist to any static hosting like Vercel, Netlify, GitHub Pages.

Customization
Update Google Form and WhatsApp group URLs in the config constants.

Add or replace assets in /src/assets as needed.

Update colors using the Tailwind CSS theme config for branding consistency.

Extend game logic in /src/pages/Game.tsx with new enemies, scoring, or UI enhancements.

Contributing
Contributions are welcome! Please fork the repository and create PRs for new features, bug fixes, or improvements.

License
This project is open-source under the MIT license.

© 2025 MLSC VIT Pune | GEN AI ARCADE Team