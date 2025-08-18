# 🌟 Srijan Prakash - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a unique multilingual typing animation that greets visitors in multiple languages.

## ✨ Features

### 🎯 Core Features
- **Multilingual Greeting Animation**: Dynamic typing effect that cycles through greetings in multiple languages
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling between sections
- **Resume Download**: Direct download link for resume

### 🌍 Supported Languages
- English (Hi)
- Hindi (नमस्ते)
- French (Bonjour)
- Tamil (வணக்கம்)
- Malayalam (നമസ്കാരം)
- Telugu (నమస్కారం)
- Punjabi (ਸਤ ਸ੍ਰੀ ਅਕਾਲ)
- Urdu (السلام علیکم)

### 📱 Sections
- **Hero**: Dynamic greeting with typing animation and role showcase
- **About**: Personal introduction and core values
- **Experience**: Professional work history with detailed descriptions
- **Education**: Academic background and achievements
- **Projects**: Showcase of key projects with technologies used
- **Contact**: Multiple ways to get in touch

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Tools & Libraries
- **Lucide React** - Beautiful, customizable icons
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

### Development
- **Hot Module Replacement** - Fast development experience
- **TypeScript Support** - Full type checking
- **Modern ES6+** - Latest JavaScript features

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaMaRoN123/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Srijan_Prakash_Resume.docx
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── Projects.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Updating Personal Information
1. **Hero Section**: Edit `src/components/Hero.tsx`
   - Update name, roles, and description
   - Modify greeting languages in the `greetings` array

2. **About Section**: Edit `src/components/About.tsx`
   - Update personal description
   - Modify skills and values

3. **Experience**: Edit `src/components/Experience.tsx`
   - Add/remove work experiences
   - Update job descriptions and technologies

4. **Projects**: Edit `src/components/Projects.tsx`
   - Add your projects with descriptions
   - Update technology stacks and links

5. **Contact**: Edit `src/components/Contact.tsx`
   - Update contact information
   - Modify social media links

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Animations**: Adjust timing and effects in component files
- **Layout**: Update responsive breakpoints and spacing

## 🌐 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Srijan Prakash**
- Portfolio: [Your Live Portfolio URL]
- GitHub: [@SaMaRoN123](https://github.com/SaMaRoN123)
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

## 🙏 Acknowledgments

- Thanks to the React and TypeScript communities
- Tailwind CSS for the amazing utility classes
- Lucide React for beautiful icons
- Vite for the lightning-fast development experience

---

⭐ Star this repository if you found it helpful!
