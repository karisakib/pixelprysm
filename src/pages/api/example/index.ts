import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
 data: Array<object>
}

const data = [
 {
  id: 1,
  title: "Introduction to Next.js",
  content: "Next.js is a React framework for production. It makes building full-stack React apps easy and enjoyable.",
  author: "Jane Doe",
  date: "2023-01-01",
  slug: "introduction-to-nextjs"
 },
 {
  id: 2,
  title: "Getting Started with React",
  content: "React is a JavaScript library for building user interfaces. Learn how to get started with React in this comprehensive guide.",
  author: "John Smith",
  date: "2023-02-15",
  slug: "getting-started-with-react"
 },
 {
  id: 3,
  title: "Understanding JavaScript Closures",
  content: "Closures are an important concept in JavaScript. This article explains what closures are and how to use them effectively.",
  author: "Alice Johnson",
  date: "2023-03-10",
  slug: "understanding-javascript-closures"
 },
 {
  id: 4,
  title: "CSS Grid Layout: A Comprehensive Guide",
  content: "CSS Grid Layout is a powerful tool for creating complex layouts on the web. This guide covers everything you need to know about CSS Grid.",
  author: "Bob Brown",
  date: "2023-04-05",
  slug: "css-grid-layout-comprehensive-guide"
 },
 {
  id: 5,
  title: "Introduction to TypeScript",
  content: "TypeScript is a strongly typed superset of JavaScript. This article introduces TypeScript and its key features.",
  author: "Charlie Davis",
  date: "2023-05-20",
  slug: "introduction-to-typescript"
 },
 {
  id: 6,
  title: "Building RESTful APIs with Express.js",
  content: "Express.js is a fast, unopinionated, minimalist web framework for Node.js. Learn how to build RESTful APIs with Express.js in this tutorial.",
  author: "Dana Lee",
  date: "2023-06-15",
  slug: "building-restful-apis-with-expressjs"
 },
 {
  id: 7,
  title: "Understanding Asynchronous JavaScript",
  content: "Asynchronous JavaScript can be tricky to understand. This article explains the concepts of async programming and how to work with Promises and async/await.",
  author: "Evan Harris",
  date: "2023-07-01",
  slug: "understanding-asynchronous-javascript"
 },
 {
  id: 8,
  title: "A Guide to Modern JavaScript Features",
  content: "JavaScript has evolved significantly over the years. This guide covers the modern features of JavaScript that you should be aware of.",
  author: "Fiona Green",
  date: "2023-08-10",
  slug: "guide-to-modern-javascript-features"
 },
 {
  id: 9,
  title: "Introduction to GraphQL",
  content: "GraphQL is a query language for your API. This article introduces GraphQL and explains how it differs from REST.",
  author: "George White",
  date: "2023-09-05",
  slug: "introduction-to-graphql"
 },
 {
  id: 10,
  title: "Building Static Sites with Next.js",
  content: "Next.js can be used to build static sites with ease. This tutorial shows you how to create a static site using Next.js.",
  author: "Helen Black",
  date: "2023-10-15",
  slug: "building-static-sites-with-nextjs"
 }
];

export default function handler(
 req: NextApiRequest,
 res: NextApiResponse<ResponseData>
) {
 res.status(200).json(data)
}