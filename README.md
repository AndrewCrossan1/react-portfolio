# Andrew Crossan — Developer Portfolio

A modern, high-performance, and minimalist developer portfolio built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. This portfolio showcases engineering projects, an interactive CV and career roadmap, technical stack preferences, and architecture case studies with clean animations and accessibility in mind.

---

## ✨ Features

- **Modular Feature Architecture**: Organized by domain-driven feature directories (`src/features/*`) with isolated components, hooks, assets, and types.
- **Project Showcase & Spotlight**: Highlights featured applications and deep-dive engineering case studies with interactive carousels and metrics.
- **Interactive CV & Roadmap**: Chronological timeline of academic background, engineering roles, and technical achievements.
- **Tech Stack Overview**: Categorized breakdown of programming languages, frameworks, and tooling (daily drivers, favorites, and exploratory tools).
- **Dark / Light Mode**: Full theme switching support with persistent preferences.
- **Privacy & Consent Management**: Built-in Cookie Consent banner integrated with Google Consent Mode v2 and Google Analytics.
- **Smooth Page Transitions**: Animated route navigation powered by Framer Motion, with lazy-loaded routes and error boundary fallbacks.
- **Automated Feature Scaffolding**: Built-in CLI generator (`generate-feature.js`) to scaffold new feature modules with boilerplate types, hooks, and SEO-ready pages.
- **Modern Tooling & DX**: Ultra-fast linting and formatting with Oxlint and Oxfmt, backed by Husky pre-commit hooks.

---

## 🛠️ Tech Stack

### Core Framework & Runtime

- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Strict type safety across the entire codebase
- **[Vite](https://vite.dev/)** — Next-generation frontend tooling and bundler
- **[React Router v7](https://reactrouter.com/)** — Client-side routing with lazy loading and scroll restoration

### Styling & UI Components

- **[Tailwind CSS v4](https://tailwindcss.com/)** — Modern utility-first CSS framework
- **[Base UI](https://base-ui.com/) / [shadcn/ui](https://ui.shadcn.com/)** — Accessible, customizable component primitives
- **[Framer Motion](https://www.framer.com/motion/)** — Production-ready animations and transitions
- **[Lucide React](https://lucide.dev/)** — Clean, consistent icons

### Tooling & Quality

- **[Oxlint](https://oxc.rs/docs/guide/usage/linter.html)** & **[Oxfmt](https://oxc.rs/)** — High-performance Rust-based JavaScript/TypeScript linter and formatter
- **[Husky](https://typicode.github.io/husky/)** & **[lint-staged](https://github.com/lint-staged/lint-staged)** — Pre-commit automated code checks and formatting

---

## 📂 Project Structure

```text
portfolio/
├── generate-feature.js       # CLI script to scaffold new feature modules
├── index.html                # Main HTML entry with Google Tag & Consent Mode v2
├── package.json              # Project dependencies and npm scripts
├── vite.config.ts            # Vite configuration with path aliases
├── public/                   # Static public assets
└── src/
    ├── main.tsx              # Application entry point
    ├── App.tsx               # Root router definition with lazy-loaded pages
    ├── assets/               # Shared media and brand assets
    ├── components/           # Shared reusable components
    │   ├── analytics/        # Analytics tracker and integration
    │   ├── forms/            # Form controls and inputs
    │   ├── layout/           # Global Navbar, Footer, Header, NotFound
    │   ├── ui/               # Base UI / shadcn primitives (Button, Modal, etc.)
    │   └── theme-provider.tsx# Theme context and provider
    ├── context/              # Global React contexts (CookieConsent context)
    ├── features/             # Feature-specific modules
    │   ├── experience/       # Experience roadmap & interactive CV
    │   ├── home/             # Landing page & Hero section
    │   ├── projects/         # Projects showcase, carousels, spotlights
    │   └── stack/            # Tech stack breakdowns & commentary
    ├── layouts/              # Main, Terms, and Privacy page layouts
    ├── lib/                  # Shared utilities and helper functions
    └── styles/               # Global stylesheet (main.css with Tailwind v4)
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18 or higher recommended)
- **npm** (or yarn / pnpm)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/andrewcrossan1/react-portfolio.git
    cd portfolio
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

Build the application for production:

```bash
npx vite build
```

Preview the production build locally:

```bash
npx vite preview
```

---

## 💻 Available Scripts

| Command                           | Description                                                               |
| --------------------------------- | ------------------------------------------------------------------------- |
| `npm run dev`                     | Starts the Vite development server with host exposure.                    |
| `npm run check`                   | Runs Oxlint, Oxfmt checks, and TypeScript type-checking (`tsc --noEmit`). |
| `npm run lint`                    | Lints the codebase with Oxlint.                                           |
| `npm run lint:fix`                | Lints and automatically fixes issues with Oxlint.                         |
| `npm run format`                  | Formats all code files using Oxfmt.                                       |
| `npm run format:check`            | Checks formatting across the codebase without writing changes.            |
| `npm run generate:feature <name>` | Scaffolds a new feature module under `src/features/<name>`.               |

---

## 🧩 Scaffolding New Features

To quickly create a standardized, modular feature folder structure:

```bash
npm run generate:feature <feature-name>
```

This creates `src/features/<feature-name>/` with:

- `types/index.ts` — Type definitions
- `hooks/use<FeatureName>.ts` — State and data hook
- `<FeatureName>Page.tsx` — SEO-integrated page component
- `assets/` and `components/` directories

---

## 📜 License & Copyright

Copyright (c) 2026 Andrew Crossan. All rights reserved.

This repository is publicly accessible for portfolio demonstration, educational, and code review purposes.

### Rules & Permitted Use:

- **Permitted**: Viewing, browsing, and referencing the code for educational and personal review.
- **Prohibited**: Copying, reproducing, modifying, distributing, publishing, sublicensing, selling, or creating derivative works of this codebase, branding, or design without prior written consent from the author.
- **Disclaimer**: The software and materials are provided "as is", without warranty of any kind.

See the full [LICENSE](LICENSE) file for complete details.
