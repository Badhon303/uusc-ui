const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<div className="absolute[^>]+bg-\[radial-gradient[^>]+"\s*\/>\s*/g, '');
  content = content.replace(/<div className="absolute[^>]+bg-gradient-to-b from-transparent via-(?:primary|accent)[^>]+"\s*\/>\s*/g, '');
  fs.writeFileSync(filePath, content);
});
console.log('Removed glow overlays from components.');
