const fs = require('fs');
const path = require('path');

const blogDir = "./content/blog/";
const files = fs.readdirSync(blogDir);
const slugs = [];

files.forEach((file, err) => {
 if (file && path.extname(file) === ".json") {
  const slug = file.split(".json")[0]
  slugs.push(slug)
  // const filePath = path.join(blogDir, file);
  // const fileContent = fs.readFileSync(filePath, "utf-8");
  // let data = JSON.parse(fileContent)
  // console.log(data);
  // slugs.push(data)
 }
 else {
  // console.log(err);
 }
});

console.log(slugs);