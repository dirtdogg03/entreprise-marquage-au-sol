'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Article, getCategoryById } from '@/lib/data/articles';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const category = getCategoryById(article.categoryId);

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href={`/blog/${category?.slug}/${article.slug}`}
          className="group grid md:grid-cols-2 gap-8 rounded-2xl bg-secondary-900 p-6 lg:p-8 ring-1 ring-secondary-800 hover:ring-primary-500/50 transition-all duration-300"
        >
          {/* Image placeholder */}
          <div className="aspect-video rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
            <svg className="w-16 h-16 text-primary-500/50" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            {category && (
              <span className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-400 ring-1 ring-inset ring-primary-500/30 w-fit mb-4">
                {category.name}
              </span>
            )}
            <h3 className="text-2xl font-bold text-white group-hover:text-primary-500 transition-colors">
              {article.title}
            </h3>
            <p className="mt-4 text-secondary-400 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-secondary-500">
                {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-sm text-secondary-500">
                {article.readTime} min de lecture
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={`/blog/${category?.slug}/${article.slug}`}
        className="group flex flex-col h-full rounded-2xl bg-secondary-900/50 ring-1 ring-secondary-800 hover:ring-primary-500/50 overflow-hidden transition-all duration-300"
      >
        {/* Image placeholder */}
        <div className="aspect-video bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center">
          <svg className="w-12 h-12 text-primary-500/30" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          {category && (
            <span className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-400 ring-1 ring-inset ring-primary-500/30 w-fit mb-3">
              {category.name}
            </span>
          )}
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-500 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-secondary-400 line-clamp-2 flex-grow">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between text-xs text-secondary-500">
            <span>
              {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
            <span>{article.readTime} min</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
