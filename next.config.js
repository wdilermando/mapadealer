const withImages = require('next-images');
module.exports = withImages({
  images: {
    domains: ['localhost:3000', 'atlabox.com', 'res.cloudinary.com'],
  },
  esModule: true,
});
