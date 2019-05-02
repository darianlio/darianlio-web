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
    {
      name: "Facebook",
      url: "https://www.facebook.com/liodarian",
    },
  ],

  googleVerification: "yHS7wU-3_8OA2xlKHxAZvODeazbFXfMineP-7ePNBqA",
  googleAnalyticsID: "UA-138972191-1",

  srConfig: () => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 100,
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

  particleConfig: {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 2500,
        },
      },
      color: {
        value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
    },
    retina_detect: true,
  },
}
