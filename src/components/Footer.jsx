import { useState } from 'react';
import Modal from './Modal';
import { useToast } from './Toast';

const Footer = () => {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const { showToast, ToastComponent } = useToast();

  // Handle share button - copy link and show toast
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Copy link successfully');
  };

  // Handle subscribe button - show modal
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribeOpen(true);
      setEmailInput('');
    }
  };

  return (
    <>
      <footer className="border-t border-border-primary bg-surface-primary/50 backdrop-blur-sm transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 text-white font-serif font-bold text-lg">
                  B
                </div>
                <span className="text-xl font-semibold text-text-primary tracking-tight">
                  Blog<span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">Editorial</span>
                </span>
              </div>
              <p className="text-sm text-text-tertiary leading-relaxed max-w-xs">
                A beautifully crafted editorial blog exploring the latest in web development, design systems, and modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {['Articles', 'Topics', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="text-sm text-text-secondary hover:text-brand-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                Stay Updated
              </h4>
              <p className="text-sm text-text-tertiary mb-4">
                Subscribe to get the latest articles delivered to your inbox.
              </p>
              <form className="flex gap-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-sm rounded-xl border border-border-primary bg-surface-tertiary/50 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500/50 transition-all duration-200"
                  id="newsletter-email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 text-white hover:from-brand-500 hover:to-purple-500 transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                  id="newsletter-submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-border-primary flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-tertiary">
              © 2026 BlogEditorial. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
                aria-label="Share"
                title="Share"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              {/* GitHub */}
              <a
                href="https://github.com/tntn245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/trntnhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for subscribe success */}
      <Modal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        title="Subscribed Successfully!"
        message="Thank you for subscribing. We'll send the latest articles to your inbox soon. Stay tuned for exciting content!"
      />

      {/* Toast notification */}
      <ToastComponent />
    </>
  );
};

export default Footer;
