const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      const original = content;

      // Text gradients
      content = content.replace(/text-transparent bg-clip-text bg-gradient-to-[a-z]+ from-white(?: via-white\/[0-9]+)? to-white\/[0-9]+/g, 'text-white');
      content = content.replace(/text-transparent bg-clip-text bg-gradient-to-[a-z]+ from-primary(?: via-primary\/[0-9]+)? to-primary\/[0-9]+/g, 'text-primary');
      content = content.replace(/text-transparent bg-clip-text bg-gradient-[^"'\s]*/g, 'text-white');
      
      // Simple background gradients (lines)
      content = content.replace(/bg-gradient-to-[a-z]+ from-white\/20 to-transparent/g, 'bg-white/20');
      
      // Radial and specific complex backgrounds
      content = content.replace(/bg-\[radial-gradient\([^\]]+\)\] from-[^\s]+ via-transparent to-transparent/g, 'bg-white/5');
      content = content.replace(/bg-gradient-to-[a-z]+ from-[^\s]+ to-transparent/g, 'bg-white/5');
      content = content.replace(/bg-gradient-to-[a-z]+ from-[^\s]+ via-[^\s]+ to-transparent/g, 'bg-white/5');
      content = content.replace(/bg-gradient-to-[a-z]+ \$\{.*?\.color\} opacity-0/g, 'bg-white/5 opacity-0');

      // Catch-all for lingering gradient-related utility classes that don't look right anymore
      // e.g. text-transparent bg-clip-text
      content = content.replace(/text-transparent bg-clip-text/g, '');

      // Sometimes multiple spaces might appear
      content = content.replace(/  +/g, ' ');

      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src/pages'));
processDir(path.join(__dirname, 'src/components'));
console.log('Done.');
