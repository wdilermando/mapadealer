const withImages = require('next-images');
module.exports = withImages({
  images: {
    domains: ['localhost:3000', 'res.cloudinary.com', 'www.datocms-assets.com'],
  },
  esModule: true,
});
