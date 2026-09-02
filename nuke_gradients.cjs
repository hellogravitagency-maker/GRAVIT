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

      // Only operate on className strings to avoid hitting "to='/path'"
      // However, dealing with JSX classNames can be complex.
      // A safer regex for tailwind classes: they are always preceded by a space, quote, or backtick.
      
      content = content.replace(/(['"`\s])bg-gradient-to-[a-brtl]{1,2}\b/g, '$1');
      content = content.replace(/(['"`\s])from-[a-zA-Z0-9-\[\]#]+(?:\/[0-9]+)?\b/g, '$1');
      content = content.replace(/(['"`\s])via-[a-zA-Z0-9-\[\]#]+(?:\/[0-9]+)?\b/g, '$1');
      content = content.replace(/(['"`\s])to-[a-zA-Z0-9-\[\]#]+(?:\/[0-9]+)?\b/g, '$1');
      
      content = content.replace(/(['"`\s])group-hover:bg-gradient-to-[a-brtl]{1,2}\b/g, '$1');
      content = content.replace(/(['"`\s])group-hover:from-[a-zA-Z0-9-\[\]#]+(?:\/[0-9]+)?\b/g, '$1');
      content = content.replace(/(['"`\s])group-hover:via-[a-zA-Z0-9-\[\]#]+(?:\/[0-9]+)?\b/g, '$1');
      content = content.replace(/(['"`\s])group-hover:to-[a-zA-Z0-9-\[\]#]+(?:\/[0-9]+)?\b/g, '$1');

      content = content.replace(/(['"`\s])bg-clip-text\b/g, '$1');
      content = content.replace(/(['"`\s])text-transparent\b/g, '$1');
      content = content.replace(/(['"`\s])group-hover:bg-clip-text\b/g, '$1');
      content = content.replace(/(['"`\s])group-hover:text-transparent\b/g, '$1');

      // Replace dynamic variable gradients with a solid neutral block
      content = content.replace(/\$\{.*?\.color\}/g, 'bg-white/5');
      content = content.replace(/\$\{activeTool\.color\}/g, 'bg-white/5');
      content = content.replace(/\$\{activeStage\.color\}/g, 'bg-white/5');
      content = content.replace(/\$\{stage\.color\}/g, 'bg-white/5');
      content = content.replace(/\$\{score >.*?\}'/g, "bg-white/5'");
      content = content.replace(/\$\{score >.*?\}\`/g, "bg-white/5`");

      // Replace multiple spaces left behind
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
console.log('Gradient nuke complete.');
