# Smart Water Monitoring and Management System for Aquatic Environments

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

> A comprehensive research project website showcasing an IoT and Machine Learning-driven solution for sustainable aquaculture

## 🌊 Project Overview

This website presents the **Smart Water Monitoring and Management System** - a B.Tech final year project developed by 10 students from the Department of Computer Science & Engineering (IoT, CS, BT) at the University of Engineering & Management, Kolkata.

### Key Highlights

- 🎯 **90%+ ML Prediction Accuracy** - Advanced Random Forest and Neural Network models
- 📡 **Real-time IoT Monitoring** - pH, temperature, dissolved oxygen, turbidity, and ammonia tracking
- ⚡ **Automated Control Systems** - Smart feeding, waste management, and emergency response
- ☀️ **Solar-Powered** - 40% energy cost reduction with sustainable operation
- 📱 **Remote Monitoring** - GPS, GSM, and LoRa communication up to 5 km range
- 💧 **Water Quality Improvement** - 20% better water conditions, 30% feed waste reduction

## 🚀 Features

### Website Sections

1. **Hero Section** - Eye-catching introduction with key metrics
2. **Project Summary** - Institution details and project overview
3. **Executive Summary** - Comprehensive innovation highlights
4. **Problem Statement** - 10 key challenges addressed with icon-based design
5. **Literature Survey** - Comparison with 5 international projects
6. **Live Metrics** - Real-time data visualization
7. **Key Features** - Detailed technology capabilities
8. **System Architecture** - Technical component breakdown
9. **Technology Stack** - Hardware, software, and protocols used
10. **Results & Impact** - Performance metrics and achievements
11. **Research Team** - All 10 team members with enrollment numbers
12. **Supervisors & Future Scope** - Academic guidance and roadmap
13. **Downloads & Contact** - Resources and collaboration opportunities

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom ocean-themed design system
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner toast notifications

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/SumanMishra2004/aqua.git

# Navigate to project directory
cd aqua

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Project Structure

```
aqua/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with custom CSS variables
│   │   ├── layout.tsx            # Root layout with SEO metadata
│   │   └── page.tsx              # Main page with all sections
│   ├── components/
│   │   ├── HeroSection.tsx       # Landing hero with CTAs
│   │   ├── ProjectSummary.tsx    # Project overview card
│   │   ├── ExecutiveSummary.tsx  # Key innovations grid
│   │   ├── ProblemStatement.tsx  # 10 problems addressed
│   │   ├── LiteratureSurvey.tsx  # Comparative analysis
│   │   ├── LiveMetrics.tsx       # Real-time data display
│   │   ├── KeyFeatures.tsx       # Feature highlights
│   │   ├── SystemArchitecture.tsx # Technical breakdown
│   │   ├── TechnologyStack.tsx   # Technologies used
│   │   ├── ResultsImpact.tsx     # Performance metrics
│   │   ├── ResearchTeam.tsx      # Team member cards
│   │   ├── SupervisorsFutureScope.tsx # Supervisors & roadmap
│   │   ├── DownloadsContact.tsx  # Resources & contact form
│   │   ├── Footer.tsx            # Site footer
│   │   └── DockNavigation.tsx    # Sticky navigation
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🎨 Design System

### Color Palette

- **Ocean Deep**: `#0A4D8C` - Primary dark blue
- **Ocean Primary**: `#1E88E5` - Main brand color
- **Ocean Cyan**: `#00ACC1` - Secondary accent
- **Ocean Aqua**: `#26C6DA` - Tertiary accent
- **Ocean Light**: `#4FC3F7` - Light highlights
- **Ocean Pale**: `#E1F5FE` - Backgrounds

### Custom CSS Classes

- `.gradient-text` - Blue-to-cyan gradient text
- `.glass-blue` - Frosted glass effect with blue tint
- `.smooth-transition` - Consistent transition timing

## 👥 Research Team

**Students** (10 members):
1. Anup Dutta (12022002029086)
2. Debanjan Karmakar (12022002029097)
3. Kiran Das (12022002029104)
4. Muskan Parvin (12022002029105)
5. Poulami Sinha (12022002029108)
6. Pranati Mondal (12022002029061)
7. Sarmistha Pal (12022002029131)
8. Soumyojit Sen Gupta (12022002029127)
9. Subhajit Santra (12022002029115)
10. Suman Mishra (12022002029031)

**Supervisors**:
- Prof. (Dr.) Arijeet Ghosh
- Prof. Apurba Nandi
- Prof. (Dr.) Avik Kr. Das

**HOD**: Prof. (Dr.) Sandip Mandal

## 📊 Project Metrics

| Metric | Value |
|--------|-------|
| ML Prediction Accuracy | 90%+ |
| Water Quality Improvement | 20% |
| Feed Waste Reduction | 30% |
| Energy Cost Savings | 40% |
| Emergency Response Time | <5 seconds |
| Communication Range | 5 km |
| pH Accuracy | ±0.05 |
| Temperature Accuracy | ±0.1°C |

## 🔮 Future Enhancements

- 🔗 Blockchain integration for supply chain transparency
- 🧠 Advanced AI models for species-specific health monitoring
- 🌊 Expansion to ocean-based aquaculture
- 📱 AR mobile app with underwater visualization
- 🏛️ Government fisheries database integration
- 🎯 Precision aquaculture with individual fish tracking

## 📄 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📝 SEO Optimization

The website includes comprehensive SEO metadata:
- Custom page titles and descriptions
- Open Graph tags for social media
- Twitter Card support
- Author information
- Relevant keywords for aquaculture and IoT

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔒 License

This project is part of academic research at UEM Kolkata. All rights reserved.

## 📧 Contact

For inquiries about collaboration or research:
- **Email**: aquasmart@uem.edu.in
- **Institution**: University of Engineering & Management, New Town, Kolkata

## 🙏 Acknowledgments

Special thanks to:
- University of Engineering & Management, Kolkata
- Department of Computer Science & Engineering
- All supervising faculty members
- Research collaborators and supporters

---

**Developed with ❤️ by the AquaSmart Research Team**

*Sustainable Aquaculture Through Smart Technology*
