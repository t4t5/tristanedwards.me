var ghpages = require("gh-pages")

ghpages.publish(
  "__sapper__/export",
  {
    branch: "gh-pages",
    repo: "https://github.com/t4t5/tristanedwards.me.git",
    user: {
      name: "Tristan Edwards",
      email: "tristan.edwards@me.com",
    },
  },
  () => {
    console.log("Deploy Complete!")
  },
)
