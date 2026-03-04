# Development Setup

## Prerequisites
- Node.js >= 20
- npm >= 9
- Git

## Installation
```bash
git clone https://github.com/maitamdev/DHV-GUIDING-LIGHT.git
cd dhv
npm install
```

## Environment Variables
Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```

## Running
```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Firebase Setup
1. Create a Firebase project at console.firebase.google.com
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Copy config values to .env file
