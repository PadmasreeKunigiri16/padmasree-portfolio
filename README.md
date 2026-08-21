# Padmasree Kunigiri | Premium Portfolio

Welcome to the source code for my personal portfolio — an editorial, highly interactive, and premium web experience built to showcase my journey, projects, and philosophy in software engineering and AI/ML.

## 🌟 Vision & Design Philosophy

This portfolio departs from the standard web layout to deliver an **"Art Exhibit" experience**. It features massive typography, smooth horizontal snap-scrolling interfaces, and deliberate whitespace. It is designed not just to be read, but to be *experienced*. 

Every detail — from clean architecture to pixel-perfect UI — is aimed at turning ambitious ideas into products people can trust.

## 🚀 Tech Stack

This project is built using modern, reliable technologies:

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Library:** [React 18](https://reactjs.org/)
- **Styling:** Vanilla CSS (Global Tokens, CSS Grid, Flexbox)
- **Security:** Strict HTTP Headers (CSP, X-Frame-Options, HSTS)

### Why this stack?
I don't use technologies just because they're trendy. This stack was selected because it is perfectly suited for modern development — offering SSR (Server-Side Rendering) for SEO, flawless performance, and deep ecosystem support without relying on bloated dependency trees.

## 🛡️ Security Hardening

Security is treated as a first-class citizen. The application is locked down via `next.config.mjs` with:
- **Strict Content-Security-Policy (CSP)** to prevent XSS.
- **X-Frame-Options (DENY)** to eliminate Clickjacking.
- **Strict-Transport-Security (HSTS)** to enforce HTTPS.
- **Permissions-Policy** to block unauthorized access to hardware.

## 🛠️ Local Development

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaiDheeraj-19/padmasree-portfolio.git
   cd padmasree-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

- `/src/app` - Next.js App Router pages (`/about`, `/certificates`, `/projects`, etc).
- `/src/components` - Reusable React components (`Navbar`, `Hero`, `About`, `Journey`, etc).
- `/public` - Static assets and media.

## 📫 Let's Connect

I'm actively seeking opportunities in Full Stack Development, Software Testing, and AI/ML integrations. Let's connect and create something great.

- **LinkedIn:** [Padmasree Kunigiri](https://www.linkedin.com/in/padmasree-kunigiri-19859630a/)
- **Email:** kunigiripadmasri16@gmail.com

---
*Designed & Engineered by Padmasree Kunigiri.*
