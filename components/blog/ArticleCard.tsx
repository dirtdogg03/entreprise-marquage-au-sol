'use client';

import Link from 'next/link';
import Image from 'next/image';
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
          className="group grid md:grid-cols-2 gap-8 rounded-2xl bg-white ring-1 ring-asphalt-200 p-6 hover:ring-route-500 hover:shadow-lg transition-all duration-300"
        >
          {/* Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-asphalt-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            {category && (
              <span className="inline-flex items-center rounded-full bg-primary-500 px-3 py-1 text-xs font-medium text-secondary-900 w-fit mb-4">
                {category.name}
              </span>
            )}
            <h3 className="text-2xl font-bold text-asphalt-900 group-hover:text-route-600 transition-colors">
              {article.title}
            </h3>
            <p className="mt-4 text-asphalt-600 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-asphalt-500">
                {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-sm text-asphalt-500">
                {article.readTime} min
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
        className="group flex flex-col h-full rounded-2xl bg-white ring-1 ring-asphalt-200 overflow-hidden hover:ring-route-500 hover:shadow-lg transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-asphalt-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          {category && (
            <span className="inline-flex items-center rounded-full bg-primary-500 px-3 py-1 text-xs font-medium text-secondary-900 w-fit mb-3">
              {category.name}
            </span>
          )}
          <h3 className="text-lg font-semibold text-asphalt-900 group-hover:text-route-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-asphalt-600 line-clamp-2 flex-grow">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between text-sm text-asphalt-500">
            <span>
              {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
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
