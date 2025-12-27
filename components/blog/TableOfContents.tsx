'use client';

import { useState, useEffect, useCallback } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const MAX_VISIBLE_ITEMS = 6;

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);

  // Extract H2 headings only from markdown content (not H3)
  useEffect(() => {
    const headingRegex = /^(#{2})\s+(.+)$/gm;
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].replace(/\*\*/g, '').trim();
      // Generate slug from heading text
      const id = text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Remove consecutive hyphens
        .substring(0, 60);

      items.push({ id, text, level });
    }

    setTocItems(items);
    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, [content]);

  // Determine visible items for desktop
  const visibleItems = isDesktopExpanded ? tocItems : tocItems.slice(0, MAX_VISIBLE_ITEMS);
  const hasMoreItems = tocItems.length > MAX_VISIBLE_ITEMS;

  // Setup IntersectionObserver for active section highlighting
  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    // Observe all headings
    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      tocItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [tocItems]);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
      setIsExpanded(false); // Close mobile menu after click
    }
  }, []);

  if (tocItems.length < 3) {
    return null; // Don't show TOC for short articles
  }

  return (
    <>
      {/* Desktop TOC - Sticky sidebar */}
      <nav
        className="hidden xl:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto"
        aria-label="Table des matieres"
      >
        <div className="bg-white border border-asphalt-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-bold text-asphalt-900 mb-4 flex items-center gap-2">
            <svg
              className="w-4 h-4 text-route-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Sommaire
          </h3>
          <ul className="space-y-1">
            {visibleItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToHeading(item.id)}
                  className={`w-full text-left text-sm py-1.5 transition-all duration-200 border-l-2 hover:text-route-600 pl-3 ${
                    activeId === item.id
                      ? 'text-route-600 font-medium border-route-500 bg-route-50'
                      : 'text-asphalt-600 border-transparent hover:border-asphalt-300'
                  }`}
                >
                  <span className="line-clamp-2">{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
          {hasMoreItems && (
            <button
              onClick={() => setIsDesktopExpanded(!isDesktopExpanded)}
              className="w-full mt-2 pt-2 border-t border-asphalt-200 text-xs text-asphalt-500 hover:text-route-600 transition-colors flex items-center justify-center gap-1"
            >
              {isDesktopExpanded ? (
                <>
                  <span>Réduire</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Voir les {tocItems.length - MAX_VISIBLE_ITEMS} autres</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile TOC - Collapsible */}
      <div className="xl:hidden mb-8">
        <div className="bg-asphalt-50 border border-asphalt-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-4 text-left"
            aria-expanded={isExpanded}
          >
            <span className="flex items-center gap-2 text-sm font-bold text-asphalt-900">
              <svg
                className="w-4 h-4 text-route-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Sommaire ({tocItems.length} sections)
            </span>
            <svg
              className={`w-5 h-5 text-asphalt-500 transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="px-4 pb-4 space-y-1 border-t border-asphalt-200 pt-3">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={`w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                      activeId === item.id
                        ? 'text-route-600 font-medium bg-route-100'
                        : 'text-asphalt-600 hover:bg-asphalt-100 hover:text-asphalt-900'
                    }`}
                  >
                    <span className="line-clamp-2">{item.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
