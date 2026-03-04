# Architecture Overview

## Project Structure
```
src/
  components/     # Reusable UI components
    ui/           # Base UI primitives
    layout/       # Layout components
    seo/          # SEO components
  pages/          # Route-level page components
  hooks/          # Custom React hooks
  services/       # API and Firebase services
  stores/         # Zustand state stores
  context/        # React context providers
  types/          # TypeScript type definitions
  constants/      # Application constants
  utils/          # Utility functions
  data/           # Static data and mock data
  config/         # App configuration
```

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, SCSS
- **State**: Zustand, React Context
- **Backend**: Firebase Auth, Firestore
- **AI**: Google Gemini API
- **Animations**: Framer Motion

## Data Flow
1. User interacts with UI components
2. Components dispatch actions to stores/context
3. Services handle Firebase/API communication
4. State updates trigger re-renders
