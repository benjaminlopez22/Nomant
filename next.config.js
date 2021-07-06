
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['ryEtSBppJKxqEmwYp1EDbQ'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  