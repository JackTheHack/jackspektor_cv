import BlogLanding from '@/components/BlogLanding/BlogLanding';
import { Article, parseRssFeed } from '@/helpers/parseRss';

export default async function BlogPage() {
  let articles: Article[] = [];
  let error: string | null = null;

  try {
    articles = await parseRssFeed('https://jackspektor.medium.com/feed');
  } catch (err) {
    error = 'Failed to fetch articles';
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Blog</h1>
      <BlogLanding articles={articles} />
    </div>
  );
}
