# Technical Test — Responsive Blog Editorial Layout

## 🚀 Live Demo

[https://blogtest-dun-delta.vercel.app](https://blogtest-dun-delta.vercel.app)

---

## 🛠️ Tech Stack & Rationale

| Technology | Why |
|---|---|
| **React 19** (via Vite) | Component-based architecture for clean separation of concerns. Vite provides lightning-fast HMR and build times. |
| **TypeScript** | Static typing catches bugs at compile time, improves IDE support, and makes the codebase more maintainable. |
| **Tailwind CSS v4** | Utility-first CSS with CSS-first configuration (`@theme`). Enables rapid styling while keeping a consistent design system. |
| **Custom React Hooks** | `useDarkMode`, `useActiveSection`, `useToast` — encapsulate reusable logic cleanly without extra dependencies. |
| **Google Fonts** | Inter (body) + Playfair Display (headings) for professional editorial typography. |

---

## 📁 Architecture

```
src/
├── App.tsx                    # Main layout — Grid container
├── main.tsx                   # React entry point
├── index.css                  # Tailwind config + theme tokens + typography
├── components/
│   ├── Header.tsx             # Sticky header + dark mode toggle
│   ├── Footer.tsx             # Site footer with newsletter + share
│   ├── Article.tsx            # Full blog post content + comments
│   ├── Sidebar.tsx            # Sidebar container (sticky on desktop)
│   ├── AuthorCard.tsx         # Author profile card
│   ├── TableOfContents.tsx    # ToC with active section highlighting
│   ├── TagList.tsx            # Colorful tag pills
│   ├── Modal.tsx              # Reusable modal component
│   └── Toast.tsx              # Toast notification hook + component
└── hooks/
    ├── useDarkMode.ts         # Dark/light theme toggle + localStorage
    └── useActiveSection.ts    # IntersectionObserver scroll sync
```

### Key Design Decisions

- **CSS Grid for layout**: `grid-cols-[280px_1fr]` on desktop, single column on mobile — clean and performant.
- **Mobile-first**: Article has `order-1` on mobile so it appears before sidebar.
- **CSS Custom Properties for theming**: All colors defined as tokens, overridden in `.dark` class for dark mode.
- **`@custom-variant dark`**: Tailwind v4 requires explicit config for class-based dark mode instead of default `prefers-color-scheme`.
- **TypeScript strict mode**: All components typed with interfaces, no implicit `any`.

### Trade-offs

- **No state management library** (no Redux/Zustand): State is simple enough to live in component-level `useState`. Adding a global store would be over-engineering for this scale.
- **No routing library** (no React Router): Single-page blog with no navigation needs. Would add React Router if the app expanded to multiple pages.
- **Mock data in component**: Comments and article content are hardcoded. In production these would come from an API/CMS.
- **Vercel token in git remote URL**: Acceptable for local dev but should use SSH or environment secrets in a real team setup.

---

## ▶️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/tntn245/blog-editorial.git
cd blog-editorial

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open `http://localhost:5173/` in your browser.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ✅ Features Implemented

### Core Requirements
- ✅ **Grid/Flexbox Layout** — CSS Grid 2-column layout on desktop
- ✅ **Mobile-First Responsive** — Sidebar stacks below article on mobile
- ✅ **Typography & Visual Polish** — Editorial fonts, proper line-heights, vertical rhythm
- ✅ **Media Handling** — Cover image with `object-cover`, preserved aspect ratio
- ✅ **Clean Code** — Semantic HTML, modular TypeScript components, well-organized CSS

### Bonus Features
- ✅ **TypeScript** — Full strict-mode TypeScript across all components and hooks
- ✅ **Sticky Sidebar & Scroll Sync** — Sidebar stays fixed on scroll, ToC highlights active section via `IntersectionObserver`
- ✅ **Dark Mode Toggle** — CSS variables + localStorage persistence
- ✅ **Share Button** — Copies current URL to clipboard with toast notification
- ✅ **Newsletter Subscribe** — Email input with success modal popup
- ✅ **Comments Section** — Anonymous comment posting with live UI update
- ✅ **Like Button** — Toggle like with count tracking
- ✅ **Accessibility** — Semantic HTML5 elements, ARIA landmarks, keyboard navigation

---

## 🔮 What I'd Prioritize Next

1. **Routing** — React Router for multi-page support (article list, individual posts)
2. **CMS / API integration** — Replace mock data with real content from a headless CMS
3. **Search functionality** — Full-text search across blog posts
4. **Reading progress bar** — Visual indicator of scroll progress
5. **PWA support** — Offline reading capability
