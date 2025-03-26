require('mock-css-modules');
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'], // Enable Babel to process JSX and ES6 code
});

const Sitemap = require('react-sitemap-generator').default;
const router = require('./src/routes');  // import your router file
const path = require('path');

function generateSitemap() {
  const sitemap = new Sitemap(router)
    .build('https://www.dsp5-archi-f24a-15m-g2.com')  // Replace with your actual domain
    .save(path.resolve(__dirname, 'public', 'sitemap.xml'));
}

generateSitemap();
