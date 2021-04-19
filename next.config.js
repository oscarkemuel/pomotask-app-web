const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  future: {
    webpack5: true,
  },
})
