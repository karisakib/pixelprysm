const fs = require('fs'); 
const path = require('path'); 
  
const blogPostPath = "./content/blog"
const files = fs.readdirSync(blogPostPath); 

let markdownPosts = [];
let jsonPosts = [];
let otherFiles = [];

files.forEach(file => { 
  if (path.extname(file) === ".md") 
    markdownPosts.push(file)
   else if (path.extname(file) === ".json") 
    jsonPosts.push(file)
   else
    otherFiles.push(file)
});

console.log(`Markdown Posts (${markdownPosts.length}):`, markdownPosts);
console.log(`JSON Posts (${jsonPosts.length}):`, jsonPosts);
console.log(`Other Files (${otherFiles.length}):`, otherFiles);