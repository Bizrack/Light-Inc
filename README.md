# LiGHT Incorporation

Next.js website for **LiGHT Incorporation** — a diversified engineering and technology group.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (section / hover animations)
- Zustand + persist (localStorage)
- React Toastify
- React Loading Skeleton

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Persist note

Contact drafts, quote drafts, visited pages, preferred company, and newsletter email are stored in `localStorage` via Zustand persist (`light-inc-store`), so they survive browser close and machine restart.
