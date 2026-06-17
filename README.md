# 🚀 Mohammad Farhan - Junior Web Developer Portfolio

A dynamic, vibrant, and interactive web portfolio built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS 4**. The design features a bold **Neo-Brutalist** aesthetic characterized by high contrast, thick black borders, hard drop shadows, and lively animations.

## ✨ Features
- **Neo-Brutalist Design System**: Reusable custom components (`<NeoButton>`, `<NeoToast>`, `<HomeWorkCard>`, etc.) featuring "pop out" hover and "deep press" active interactive effects.
- **Dynamic Scroll Animations**: Utilizes `IntersectionObserver` for staggered, smooth entrance animations across sections and project cards.
- **Centralized Data Management**: Clean and maintainable project data mapping from a single source of truth (`app/utils/data.ts`).
- **Serverless Contact Form**: Integrated with **EmailJS** for direct client-side email delivery without needing a custom backend.
- **Responsive Architecture**: Fully responsive layouts tailored for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack
- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3, Composition API)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: Nuxt Icon (`@nuxt/icon`)
- **Contact Form**: EmailJS (`@emailjs/browser`)
- **Deployment**: Netlify

## 📁 Project Structure
```text
├── app/
│   ├── components/       # Reusable UI components (NeoButton, NeoToast, Page Sections)
│   ├── pages/            # Application routes (index.vue, about.vue, projects.vue)
│   └── utils/            # Shared utilities and centralized data (data.ts)
├── public/               # Static assets (images, icons)
├── nuxt.config.ts        # Nuxt configuration and environment variables map
└── package.json          # Project dependencies and scripts
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/mohamadfarhannn/han-web-porto.git
cd han-web-porto
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add your EmailJS configuration:
```env
NUXT_PUBLIC_IS_MAINTENANCE=false

NUXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Run the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` to view the application in your browser.

## 📦 Deployment (Netlify)
This project is optimized for seamless deployment on **Netlify**.
1. Connect your GitHub repository to Netlify.
2. In the Netlify Dashboard, navigate to **Site configuration > Environment variables**.
3. Click **Add variable > Import from a .env file** and paste your variables.
4. **Important**: Ensure the "Contains secret values" option is **unchecked** because these variables use the `NUXT_PUBLIC_` prefix and need to be accessible on the client-side.
5. Trigger a **Clear cache and deploy site**.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
