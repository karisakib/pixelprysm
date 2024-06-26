import type { NextApiRequest, NextApiResponse } from 'next'
// import data from "../../../content/blog/testing-slug.json"
import * as fs from "fs";
import * as path from "path";


type ResponseData = {
 data: Array<object>
}

export default function handler(
 req: NextApiRequest,
 res: NextApiResponse<ResponseData>
) {
 try {
  const blogDir = path.join(process.cwd() + "/content/blog")
  const files = fs.readdirSync(blogDir);
  const posts: object[] = [];

  files.forEach((file, err) => {
   if (file && path.extname(file) === ".json") {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    let blog = JSON.parse(fileContent)
    console.log(blog);
    posts.push(blog)
   }
  });

  res.status(200).json({ data: posts });
 } catch (error) {
  console.error(error);
  res.status(500).json({ data: [] });
 }
}