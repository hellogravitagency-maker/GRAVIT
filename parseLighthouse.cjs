const fs = require('fs');
const data = JSON.parse(fs.readFileSync('report.json', 'utf8'));
const c = data.categories;
console.log(`Performance: ${c.performance.score*100}\nAccessibility: ${c.accessibility.score*100}\nBest Practices: ${c['best-practices'].score*100}\nSEO: ${c.seo.score*100}`);
