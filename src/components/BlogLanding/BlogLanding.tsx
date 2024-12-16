'use client';

import { Article } from '@/helpers/parseRss';

interface BlogArticleGridProps {
  articles: Article[];
}

export default function BlogArticleGrid({ articles }: BlogArticleGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
        >
          <div className="p-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {article.title}
              </a>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {article.pubDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
