const fs = require('fs');
const path = require('path');

const blogDir = "./content/blog/";
const files = fs.readdirSync(blogDir);
const posts = [];

files.forEach((file, err) => {
 if (file) {
  if (path.extname(file) === ".md")
   console.log(file);
  else if (path.extname(file) === ".json") {
   const filePath = path.join(blogDir, file);
   const fileContent = fs.readFileSync(filePath, "utf-8");
   let data = JSON.parse(fileContent)
   console.log(data);
   posts.push(data)
  }
  else {
   // console.log(file);
  }
 }
 else {
  console.log(err);
 }
});

// const blogs = files.map((file) => {
//   const filePath = path.join(blogDir, file);
//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   let data = JSON.parse(fileContent)
//   posts.push(data)
// });

console.log(posts);