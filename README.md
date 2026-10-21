# Vishal Bairwa Portfolio — React + Java Spring Boot Monorepo

A modern full-stack portfolio and CMS application built with **React** (Vite + Tailwind CSS + Framer Motion) and **Java Spring Boot** (Spring Data JPA + H2 In-Memory Database).

---

## 🏗️ Architecture Overview

The repository is structured as a clean, modular Monorepo:

```
Portfolio/
├── frontend/                     # React Single Page Application (SPA)
│   ├── src/
│   │   ├── components/ui/        # Preserved UI components (Header, FadeIn, AnimatedToolset,
│   │   │                         # AmbientBackground, ScrollProgress, ThemeToggle, ContactForm)
│   │   ├── context/              # ThemeContext (Light, Dark, and System mode)
│   │   ├── hooks/                # usePortfolioData (Spring Boot REST API hook with fallback)
│   │   ├── App.tsx               # Main portfolio page with dynamic sections
│   │   └── main.tsx              # React entry point
│   ├── public/                   # Static logos, favicon, and resume PDF
│   ├── package.json
│   └── vite.config.ts            # Vite config with Tailwind v4 & Spring Boot proxy (/api -> :8082)
│
├── backend/                      # Java Spring Boot 3 REST API Backend
│   ├── src/main/java/com/vishalbairwa/portfolio/
│   │   ├── config/               # CorsConfig & DataInitializer (auto-seeds portfolio data)
│   │   ├── controller/           # PortfolioController, ContactController, ResumeController
│   │   ├── dto/                  # PortfolioResponseDto, ContactRequestDto
│   │   ├── model/                # JPA Entities (Profile, Stat, Experience, Education, CaseStudy, Article, ContactMessage)
│   │   ├── repository/           # Spring Data JPA Repositories
│   │   └── PortfolioApplication.java
│   ├── src/main/resources/
│   │   ├── application.yml       # Port 8082, H2 in-memory DB & console config
│   │   └── static/               # Vishal_Bairwa_Product.pdf for download API
│   ├── pom.xml                   # Maven dependencies
│   └── mvnw                      # Maven wrapper
│
└── package.json                  # Root runner scripts for both frontend and backend
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18+ recommended)
- **Java** (JDK 17 or higher)
- **Maven** (included via `./backend/mvnw`)

---

### Running Locally

You can run the backend and frontend independently:

#### 1. Start the Spring Boot Backend (Port 8082)
```bash
# From repository root:
npm run dev:backend

# Or directly in backend folder:
cd backend
./mvnw spring-boot:run
```

#### 2. Start the React Frontend (Port 3000)
```bash
# From repository root:
npm run dev:frontend

# Or directly in frontend folder:
cd frontend
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔌 REST API Endpoints

The Spring Boot backend exposes modular endpoints and an aggregated CMS payload:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/portfolio` | Full aggregated portfolio payload (profile, stats, experiences, case studies, articles, education) |
| `GET` | `/api/profile` | Profile information & headline |
| `PUT` | `/api/profile` | Update profile information |
| `GET` | `/api/stats` | Performance and experience metrics |
| `POST` | `/api/stats` | Add a new stat |
| `GET` | `/api/experiences` | Timeline of experiences and detailed achievements |
| `POST` | `/api/experiences` | Add a new experience entry |
| `GET` | `/api/education` | Education history |
| `GET` | `/api/case-studies` | Case studies (approach, impact, metrics) |
| `POST` | `/api/case-studies` | Add a new case study |
| `GET` | `/api/articles` | Publications & Medium articles |
| `POST` | `/api/articles` | Add a new article |
| `POST` | `/api/contact` | Submit contact form inquiry (saved into DB) |
| `GET` | `/api/contact/messages` | Inspect received contact inquiries |
| `GET` | `/api/resume` | Download Vishal's product resume PDF |

---

## 🗄️ H2 Database Console

The embedded H2 database console is enabled for easy inspection during development:

- **URL**: `http://localhost:8082/h2-console`
- **JDBC URL**: `jdbc:h2:mem:portfoliodb`
- **User Name**: `sa`
- **Password**: *(leave blank)*

---

## 🧪 Testing

### Backend Integration Tests
```bash
npm run test:backend
# or
cd backend && ./mvnw test
```

### Frontend Production Build
```bash
npm run build:frontend
# or
cd frontend && npm run build
```
