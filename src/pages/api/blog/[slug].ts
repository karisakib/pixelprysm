import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';
import * as path from 'path';

type BlogPost = {
  slug: string;
  date: string;
  title: string;
  description: string;
  body: string;
  // Add other properties if needed
};

export default function handler(req: NextApiRequest, res: NextApiResponse<BlogPost | { message: string }>) {
  if (req.method === 'GET') {
    const { slug } = req.query;

    try {
      const blogDir = path.join(process.cwd(), '/content/blog');
      const filePath = path.join(blogDir, `${slug}.json`);
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const blogPost = JSON.parse(fileContent) as BlogPost;
        res.status(200).json(blogPost);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
