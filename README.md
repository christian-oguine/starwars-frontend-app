# Star Wars Frontend App

A character browsing app for Star Wars fans. Built with Nuxt 3 and styled with Tailwind.

## Tech Stack

Started with Nuxt 4 because it handles routing and SSR out of the box. Added Tailwind for quick styling without writing tons of CSS. Used Pinia for state management to handle the team feature.

**Modules installed:**
- `@nuxtjs/tailwindcss` - utility-first styling
- `@nuxtjs/google-fonts` - loaded Cinzel and Poppins for that space opera vibe
- `@nuxt/image` - optimized image loading
- `@nuxt/icon` - easy icon management with Phosphor icons
- `@pinia/nuxt` - state management for team functionality

## Features

- **Browse Characters** - View all Star Wars characters with images
- **Search** - Find characters by name with real-time filtering
- **Pagination** - 12 characters per page with page navigation
- **Character Details** - Full character info including stats, affiliations, masters, and apprentices
- **Team Builder** - Add up to 5 characters to your team (saved in localStorage)
- **Prev/Next Navigation** - Quick navigation between character details
- **Evil Detection** - Characters affiliated with the dark side are flagged
- **Responsive Design** - Works on mobile, tablet, and desktop

## API

Using the [Star Wars API](https://akabab.github.io/starwars-api/) for character data.

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Run locally at `http://localhost:3000`:

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
app/
├── pages/
│   ├── index.vue          # Homepage
│   ├── characters.vue     # Character listing with search & pagination
│   ├── team.vue           # Team management page
│   └── details/
│       └── [id].vue       # Dynamic character detail page
├── components/
│   └── AppHeader.vue      # Navigation header
|
stores/
└── team.ts                # Pinia store for team management
```

## Pages

### Characters Page
- Search characters by name
- 12 characters per page with pagination controls
- Click "View Details" to see full character info

### Character Details
- Complete character information
- Physical stats (height, mass, birth/death)
- Affiliations, masters, and apprentices
- Add/remove from team (max 5 members)
- Navigate to previous/next character
- Link to Wookieepedia

### Team Page
- View all team members (max 5)
- Remove members individually or clear all
- Persisted in localStorage
- Empty state with link to browse characters

## State Management

Using Pinia for team functionality:
- `useMyTeamStore` - manages team members with add/remove/toggle actions
- Max team size: 5 characters
- Data persists in localStorage
- Team counter visible on detail pages

