module.exports = {
  siteTitle: "Darian Lio | Software Engineer",
  description: "Darian Lio is a software engineer based in Toronto, CA",
  siteKeywords:
    "Darian Lio, Darian, Lio, darianlio, darianlio97, software engineer, software developer, web developer, developer, javascript, canadian",
  siteUrl: "https://darianlio.com",
  siteLanguage: "en_US",

  name: "Darian Lio",
  location: "Toronto, CA",
  email: "darianlio97@gmail.com",
  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/darianlio/",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/darianlio/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/notdurian/",
    },
  ],

  googleAnalyticsID: "UA-138972191-1",

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
