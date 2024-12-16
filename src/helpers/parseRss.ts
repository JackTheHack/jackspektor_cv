import { parseString } from 'xml2js';

export interface Article {
  title: string;
  pubDate: string;
  link: string;
}

export async function parseRssFeed(url: string): Promise<Article[]> {
  const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
  const xml = await response.text();

  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const articles = result.rss.channel[0].item.map((item: any) => ({
          title: item.title[0],
          pubDate: new Date(item.pubDate[0]).toLocaleDateString(),
          link: item.link[0],
        }));
        resolve(articles);
      }
    });
  });
}
