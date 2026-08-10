# Gauhar Alam — Personal Portfolio Website

Modern, highly animated personal portfolio website built with **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion**, **Three.js Canvas**, and an **Express Node.js backend** for contact form dispatches.

---

## 🚀 Features

- **Dark-Mode-First Aesthetics**: Deep charcoal `#0a0a0f` canvas with glowing electric blue / cyan / violet gradients.
- **Interactive 3D Particle Hero Canvas**: Real-time particle constellation with smooth cursor tracking and node physics.
- **Micro-Interactions**: Magnetic buttons, glowing cursor follow effect, animated stat counters, text scramble role switcher, and glassmorphic panels.
- **Featured Project Cards**: Comprehensive showcases for **Wappify** (Multi-tenant WhatsApp SaaS), **AlgoForge** (AI Coding Platform), and **Qaleenkaar** (Luxury Carpet Care).
- **Express Contact Backend**: REST API `/api/contact` connected with Nodemailer and fallback development logging.
- **Responsive & Accessible**: Mobile-first layout with smooth navigation drawer and keyboard navigation support.

---

## 📦 Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, Three.js / Canvas, Lucide React
- **Backend:** Node.js, Express, Nodemailer, CORS
- **Deployment:** Vercel (Frontend), Render / Railway (Backend)

---

## 🛠️ Local Setup & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Frontend & Backend Development Servers
```bash
# Start both Vite (Port 3000) & Express (Port 5000)
npm run dev:all

# Or run frontend only
npm run dev

# Or run backend only
npm run server
```

### 3. Contact Form Setup (Optional)
To send live emails to `gauhar54995@gmail.com`:
1. Create a `.env` file in the project root or `server/` directory:
   ```env
   PORT=5001
   EMAIL_USER=gauhar54995@gmail.com
   EMAIL_PASS=your_gmail_app_password
   ```
2. If `EMAIL_PASS` is omitted, the server will safely run in mock development mode and log submissions to the console.

---

## 🚀 Deployment Instructions

### Vercel (Frontend)
1. Push repository to GitHub.
2. Import project into Vercel dashboard.
3. Build command: `npm run build`
4. Output directory: `dist`

### Render / Railway (Backend Server)
1. Deploy `server/index.js`.
2. Add Environment Variables (`EMAIL_USER`, `EMAIL_PASS`, `PORT`).
