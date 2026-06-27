# Technical Test — Responsive Blog Editorial Layout

## 🚀 Live Demo

Run the project locally (see instructions below) and open `http://localhost:5173/`

---

## 🛠️ Tech Stack & Rationale

| Technology | Why |
|---|---|
| **React 19** (via Vite) | Component-based architecture for clean separation of concerns. Vite provides lightning-fast HMR and build times. |
| **Tailwind CSS v4** | Utility-first CSS with CSS-first configuration (`@theme`). Enables rapid styling while keeping a consistent design system. |
| **Vanilla JS Hooks** | Custom React hooks (`useDarkMode`, `useActiveSection`) for clean state management without additional dependencies. |
| **Google Fonts** | Inter (body) + Playfair Display (headings) for professional editorial typography. |

---

## 📁 Architecture

```
src/
├── App.jsx                    # Main layout — Grid container
├── main.jsx                   # React entry point
├── index.css                  # Tailwind config + theme tokens + typography
├── components/
│   ├── Header.jsx             # Sticky header + dark mode toggle
│   ├── Footer.jsx             # Site footer with newsletter
│   ├── Article.jsx            # Full blog post content
│   ├── Sidebar.jsx            # Sidebar container (sticky on desktop)
│   ├── AuthorCard.jsx         # Author profile card
│   ├── TableOfContents.jsx    # ToC with active section highlighting
│   └── TagList.jsx            # Colorful tag pills
└── hooks/
    ├── useDarkMode.js         # Dark/light theme toggle + localStorage
    └── useActiveSection.js    # IntersectionObserver scroll sync
```

### Key Design Decisions

- **CSS Grid for layout**: `grid-cols-[1fr_300px]` on desktop, single column on mobile — clean and performant.
- **Mobile-first**: Article has `order-1` on mobile so it appears before sidebar, sidebar stacks below.
- **CSS Custom Properties for theming**: All colors defined as tokens, overridden in `.dark` class for dark mode.
- **`@custom-variant dark`**: Tailwind v4 requires explicit config for class-based dark mode instead of default `prefers-color-scheme`.

---

## ▶️ How to Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Then open `http://localhost:5173/` in your browser.

---

## ✅ Features Implemented

### Core Requirements
- ✅ **Grid/Flexbox Layout** — CSS Grid 2-column layout on desktop
- ✅ **Mobile-First Responsive** — Sidebar stacks below article on mobile
- ✅ **Typography & Visual Polish** — Editorial fonts, proper line-heights, vertical rhythm
- ✅ **Media Handling** — Cover image with `object-cover`, preserved aspect ratio
- ✅ **Clean Code** — Semantic HTML, modular components, well-organized CSS

### Bonus Features
- ✅ **Component Framework (React)** — Clean, reusable component architecture
- ✅ **Sticky Sidebar & Scroll Sync** — Sidebar stays fixed on scroll, ToC highlights active section via `IntersectionObserver`
- ✅ **Dark Mode Toggle** — CSS variables + localStorage persistence + respects `prefers-color-scheme`
- ✅ **Accessibility** — Semantic HTML5 elements, ARIA landmarks, keyboard navigation, proper contrast

---

## 🔮 What I'd Prioritize Next

If I had more time, I would focus on:

1. **Animated page transitions** — Smooth enter/exit animations for content sections
2. **Search functionality** — Full-text search across blog posts
3. **Comments section** — Interactive comment system with nested replies
4. **Related posts** — "You might also like" section at the bottom
5. **Reading progress bar** — Visual indicator of scroll progress through the article
6. **PWA support** — Offline reading capability
