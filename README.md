# Star Wars Frontend App

A character browsing app for Star Wars fans. Built with Nuxt 3 and styled with Tailwind.

## Tech Stack

Started with Nuxt 4 because it handles routing and SSR out of the box. Added Tailwind for quick styling without writing tons of CSS.

**Modules installed:**
- `@nuxtjs/tailwindcss` - utility-first styling
- `@nuxtjs/google-fonts` - loaded Cinzel and Poppins for that space opera vibe
- `@nuxt/image` - optimized image loading
- `@nuxt/icon` - easy icon management

## Features

- Browse all Star Wars characters
- Search by name
- Pagination (20 characters per page)
- Responsive design

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
│   ├── characters.vue     # Character listing with search/filter
│ 
├── components/
│   └── AppHeader.vue      # Navigation header

```

