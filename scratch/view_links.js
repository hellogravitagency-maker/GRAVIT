const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/**/*.{tsx,ts}');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('to="/contact"')) {
    console.log('--- FILE:', file);
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      if (line.includes('to="/contact"')) {
        console.log('Line ' + (i+1) + ':');
        console.log(lines.slice(Math.max(0, i-2), i+4).join('\n'));
        console.log('...');
      }
    });
  }
});
