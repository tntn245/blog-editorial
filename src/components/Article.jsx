import { useState } from 'react';
import { useToast } from './Toast';

const Article = () => {
  const { showToast, ToastComponent } = useToast();
  const [likesCount, setLikesCount] = useState(124);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Sarah Chen',
      content: 'This article is incredibly detailed and helpful! I\'m applying Tailwind v4 to my new project and the build speed improvement is noticeable.',
      date: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop'
    },
    {
      id: 2,
      author: 'James Rodriguez',
      content: 'The Component Architecture section is explained really clearly. The Atom/Molecule breakdown helps manage code in large systems much better.',
      date: '1 day ago',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
    },
    {
      id: 3,
      author: 'Alex Kim',
      content: 'The blog\'s dark mode interface looks incredibly polished and smooth. Looking forward to your article on CSS Container Queries!',
      date: '5 hours ago',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop'
    }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  // Handle like button toggle
  const handleLike = () => {
    if (hasLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setHasLiked(!hasLiked);
  };

  // Handle adding new comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    const newComment = {
      id: Date.now(),
      author: 'Anonymous',
      content: newCommentText.trim(),
      date: 'Just now',
      avatar: null
    };
    setComments(prev => [...prev, newComment]);
    setNewCommentText('');
  };

  // Scroll to comments section
  const scrollToComments = () => {
    document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <article className="order-1 lg:order-none animate-slide-up" aria-label="Blog post">
      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20">
            Design Systems
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-surface-tertiary text-text-secondary border border-border-primary">
            Featured
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-primary leading-tight mb-4 tracking-tight">
          Building Scalable Design Systems with Modern CSS and React
        </h1>

        <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl">
          A deep dive into creating maintainable, themeable, and performant design systems that scale with your team and product.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-tertiary">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=120&h=120&fit=crop"
              alt=""
              className="h-6 w-6 rounded-full ring-2 ring-brand-500/20 object-cover"
              loading="lazy"
            />
            <span className="font-medium text-text-secondary">Trần Ngọc Tố Như</span>
          </div>
          <span className="hidden sm:inline text-border-secondary">·</span>
          <time dateTime="2026-06-27">June 27, 2026</time>
          <span className="hidden sm:inline text-border-secondary">·</span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            12 min read
          </span>
        </div>
      </header>

      {/* Cover Image */}
      <figure className="mb-10 -mx-4 sm:mx-0">
        <div className="section-image !rounded-none sm:!rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop"
            alt="Code on a dark screen representing modern web development"
            className="w-full h-auto aspect-[2/1] object-cover"
            loading="eager"
          />
        </div>
        <figcaption className="mt-3 px-4 sm:px-0 text-xs text-text-tertiary text-center italic">
          Building modern web experiences requires modern tooling and thoughtful architecture
        </figcaption>
      </figure>

      {/* Article Body */}
      <div className="article-content">
        {/* Introduction */}
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            In today's rapidly evolving web landscape, the need for consistent, reusable, and scalable UI components has never been greater. Design systems have emerged as the cornerstone of modern frontend development, bridging the gap between design and engineering teams while ensuring a cohesive user experience across products.
          </p>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=450&fit=crop"
              alt="Wireframe sketches and design planning on paper"
              loading="lazy"
            />
          </div>
          <p>
            This article explores the principles, patterns, and practical techniques for building a design system that not only looks great but is also maintainable, performant, and accessible. We'll leverage the power of modern CSS features like custom properties and container queries alongside React's component model to create something truly robust.
          </p>
        </section>

        {/* Design Tokens */}
        <section id="design-tokens">
          <h2>Design Tokens</h2>
          <p>
            Design tokens are the atomic building blocks of a design system. They represent the smallest design decisions — colors, typography scales, spacing values, border radii, and shadows — as named entities that can be consumed across platforms and tools.
          </p>
          <blockquote>
            "Design tokens are a methodology for expressing design decisions in a platform-agnostic way so that they can be shared across different disciplines, tools, and technologies."
            — W3C Design Tokens Community Group
          </blockquote>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop"
              alt="Color palette swatches representing design token colors"
              loading="lazy"
            />
          </div>
          <p>
            Using CSS custom properties as our token layer gives us several advantages: they cascade naturally, can be overridden at any level of the DOM tree (perfect for theming), and they're natively understood by the browser without any build step.
          </p>
          <pre><code>{`:root {
  /* Color Tokens */
  --color-primary: #6366f1;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  
  /* Spacing Scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
}`}</code></pre>
          <p>
            The key insight is that tokens should be <code>semantic</code> rather than literal. Instead of naming a token <code>--blue-500</code>, name it <code>--color-primary</code>. This abstraction layer means you can completely rebrand your application by changing a handful of token values.
          </p>
        </section>

        {/* Component Architecture */}
        <section id="component-architecture">
          <h2>Component Architecture</h2>
          <p>
            A well-structured component library follows the principle of composition over inheritance. Small, focused components combine to create complex interfaces while remaining individually testable and maintainable.
          </p>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=450&fit=crop"
              alt="Component architecture design wireframe"
              loading="lazy"
            />
          </div>
          <h3>Atomic Design Methodology</h3>
          <p>
            Brad Frost's Atomic Design methodology provides an excellent mental model. We organize our components into five distinct levels:
          </p>
          <ul>
            <li><strong>Atoms</strong> — Basic HTML elements: buttons, inputs, labels, icons</li>
            <li><strong>Molecules</strong> — Simple groups of atoms: search bars, form fields with labels</li>
            <li><strong>Organisms</strong> — Complex UI sections: headers, sidebars, card grids</li>
            <li><strong>Templates</strong> — Page-level layouts defining content structure</li>
            <li><strong>Pages</strong> — Specific instances of templates with real content</li>
          </ul>
          <p>
            Each level builds upon the previous one, creating a clear dependency graph that makes it easy to understand how changes at one level affect the rest of the system.
          </p>
          <pre><code>{`// Button atom — composable and reusable
function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors';
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700',
    secondary: 'bg-surface-tertiary text-text-primary hover:bg-border-primary',
    ghost: 'text-text-secondary hover:bg-surface-tertiary',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button className={\`\${baseStyles} \${variants[variant]} \${sizes[size]}\`} {...props}>
      {children}
    </button>
  );
}`}</code></pre>
        </section>

        {/* Responsive Patterns */}
        <section id="responsive-patterns">
          <h2>Responsive Patterns</h2>
          <p>
            Modern responsive design goes far beyond simple breakpoint-based media queries. With the advent of CSS Container Queries, Flexbox, and Grid, we can create layouts that are intrinsically responsive — components that adapt to their available space rather than the viewport width.
          </p>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop"
              alt="Multiple devices showing responsive design across different screen sizes"
              loading="lazy"
            />
          </div>
          <h3>The Grid Layout</h3>
          <p>
            CSS Grid is the ideal tool for page-level layout. Our blog uses a two-column grid on desktop that gracefully collapses to a single column on mobile:
          </p>
          <pre><code>{`.blog-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .blog-layout {
    grid-template-columns: 1fr 300px;
  }
}`}</code></pre>
          <p>
            The beauty of this approach is that content reordering on mobile is handled purely through CSS <code>order</code> properties — the article always appears first on mobile, even if the sidebar comes first in the DOM for accessibility reasons.
          </p>
        </section>

        {/* Dark Mode */}
        <section id="dark-mode">
          <h2>Dark Mode Implementation</h2>
          <p>
            Dark mode is no longer a nice-to-have — it's an expected feature. A well-implemented dark theme reduces eye strain in low-light environments, saves battery on OLED displays, and gives users control over their reading experience.
          </p>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=450&fit=crop"
              alt="Dark mode code editor with syntax highlighting"
              loading="lazy"
            />
          </div>
          <p>
            Our approach uses CSS custom properties for all color values, making theme switching as simple as updating a set of variables:
          </p>
          <pre><code>{`// React hook for dark mode with localStorage persistence
function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return { isDark, toggle: () => setIsDark(prev => !prev) };
}`}</code></pre>
          <p>
            By checking <code>prefers-color-scheme</code> as the default, we respect the user's system preference on their first visit. Subsequent visits use their explicit choice stored in <code>localStorage</code>.
          </p>
        </section>

        {/* Performance */}
        <section id="performance">
          <h2>Performance Considerations</h2>
          <p>
            A beautiful design system means nothing if it makes your site slow. Performance should be baked into every decision, from how you load fonts to how you structure your CSS.
          </p>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
              alt="Analytics dashboard showing performance metrics and loading times"
              loading="lazy"
            />
          </div>
          <h3>Font Loading Strategy</h3>
          <p>
            Web fonts are one of the biggest sources of layout shift and perceived slowness. We use the <code>font-display: swap</code> strategy combined with preloading critical font files to ensure text is always visible:
          </p>
          <ol>
            <li>Preload the most critical font weight (usually Regular 400)</li>
            <li>Use <code>font-display: swap</code> so text renders immediately with a fallback</li>
            <li>Match fallback font metrics to minimize layout shift when the web font loads</li>
            <li>Subset fonts to only include the characters you actually use</li>
          </ol>
          <h3>CSS Performance</h3>
          <p>
            Modern CSS is remarkably performant, but there are still patterns to be mindful of. Avoid deeply nested selectors, minimize use of expensive properties like <code>filter</code> and <code>backdrop-filter</code> on frequently animating elements, and leverage <code>will-change</code> judiciously for elements that will be animated.
          </p>
        </section>

        {/* Accessibility */}
        <section id="accessibility">
          <h2>Accessibility</h2>
          <p>
            Accessibility isn't an afterthought — it's a fundamental quality metric of any good design system. Building accessible components from day one is significantly easier and less expensive than retrofitting them later.
          </p>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=450&fit=crop"
              alt="Person using assistive technology to browse a website on a laptop"
              loading="lazy"
            />
          </div>
          <p>
            Key principles we follow in every component:
          </p>
          <ul>
            <li><strong>Semantic HTML first</strong> — Use the right element for the job. A button should be a <code>&lt;button&gt;</code>, not a styled <code>&lt;div&gt;</code></li>
            <li><strong>Keyboard navigation</strong> — Every interactive element must be reachable and operable via keyboard</li>
            <li><strong>Color contrast</strong> — Maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)</li>
            <li><strong>ARIA landmarks</strong> — Use appropriate roles like <code>navigation</code>, <code>main</code>, <code>complementary</code></li>
            <li><strong>Focus indicators</strong> — Never remove focus outlines without providing an alternative visual indicator</li>
          </ul>
          <blockquote>
            "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." — Tim Berners-Lee
          </blockquote>
        </section>

        {/* Conclusion */}
        <section id="conclusion">
          <h2>Conclusion</h2>
          <p>
            Building a design system is a journey, not a destination. It requires ongoing collaboration between designers and developers, continuous refinement based on real-world usage, and a commitment to quality at every level.
          </p>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop"
              alt="Team of developers collaborating around a table with laptops"
              loading="lazy"
            />
          </div>
          <p>
            The techniques we've explored — design tokens, component composition, responsive patterns, dark mode theming, performance optimization, and accessibility — form a solid foundation. But the most important ingredient is a shared understanding within your team of why these patterns matter and how to apply them consistently.
          </p>
          <p>
            Start small, iterate often, and always keep your end users at the center of every decision. Happy building! 🚀
          </p>
        </section>
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-border-primary">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 active:scale-95 ${
                hasLiked
                  ? 'border-red-500/30 bg-red-500/10 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                  : 'border-border-primary text-text-secondary hover:bg-surface-tertiary hover:text-text-primary hover:border-brand-500/30'
              }`}
            >
              <svg
                className="h-4 w-4 transition-transform duration-200"
                fill={hasLiked ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {likesCount} Likes
            </button>
            <button
              onClick={scrollToComments}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border-primary text-sm font-medium text-text-secondary hover:bg-surface-tertiary hover:text-text-primary hover:border-brand-500/30 transition-all duration-200 active:scale-95"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {comments.length} Comments
            </button>
          </div>
          <button
            onClick={() => {
              // Copy article link to clipboard
              navigator.clipboard.writeText(window.location.href);
              showToast('Copy link successfully');
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 text-white text-sm font-medium hover:from-brand-500 hover:to-purple-500 transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
        </div>
      </footer>

      {/* Interactive Comments Section */}
      <section id="comments-section" className="mt-12 pt-8 border-t border-border-primary">
        <h3 className="text-xl font-serif font-bold text-text-primary flex items-center gap-2 mb-6">
          <svg className="h-5 w-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Comments ({comments.length})
        </h3>

        <form onSubmit={handleAddComment} className="bg-surface-elevated/40 backdrop-blur-sm p-4 rounded-2xl border border-border-primary shadow-card">
          <label className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">Comment anonymously</label>
          <textarea
            rows={3}
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            placeholder="Share your thoughts anonymously..."
            className="w-full mt-2 px-3.5 py-2.5 text-sm rounded-xl border border-border-primary bg-surface-secondary text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500/50 transition-all duration-200 resize-none"
          />
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
            >
              Post Comment
            </button>
          </div>
        </form>

        <div className="mt-8 space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex gap-4 p-4 rounded-2xl border border-border-primary bg-surface-elevated/20 backdrop-blur-sm transition-all duration-200 hover:border-brand-500/10"
            >
              {comment.avatar ? (
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="h-10 w-10 rounded-full object-cover border border-border-primary"
                  loading="lazy"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-surface-tertiary border border-border-primary flex items-center justify-center text-text-tertiary shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-text-primary truncate">{comment.author}</span>
                  <span className="text-xs text-text-tertiary shrink-0">{comment.date}</span>
                </div>
                <p className="mt-1.5 text-sm text-text-secondary whitespace-pre-wrap leading-relaxed">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Toast notification */}
      <ToastComponent />
    </article>
  );
};

export default Article;
