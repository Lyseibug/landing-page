const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight text-indigo-900"
        >
          Lyseibug
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.slice(0, 5).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More pages
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.118l3.71-3.887a.75.75 0 111.08 1.04l-4.24 4.44a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
          </div>
        </nav>

        {/* CTA button (desktop) */}
        <div className="hidden md:block">
          <a
            href="#get-started"
            className="rounded-full border border-indigo-900 px-5 py-2 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-50"
          >
            Get started
          </a>
        </div>
      </div>

      {/* Mobile menu (no-JS, details/summary) */}
      <div className="md:hidden">
        <details className="group">
          <summary
            className="absolute right-4 top-4 flex cursor-pointer list-none items-center p-2 sm:right-6 lg:right-8"
            aria-label="Toggle menu"
          >
            <span className="inline-flex items-center">
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6 group-open:hidden"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
              {/* Close icon */}
              <svg
                className="hidden h-6 w-6 group-open:block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </summary>
          <div className="mx-auto max-w-7xl px-4 pb-6 pt-2 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#get-started"
              className="mt-2 block w-full rounded-full border border-indigo-900 px-5 py-3 text-center font-semibold text-indigo-900 hover:bg-indigo-50"
            >
              Get started
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
