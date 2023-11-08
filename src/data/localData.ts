export const HERO_AP_DESCRIPTION: string[] = [
  "Hello ",
  "my ",
  "name ",
  "is ",
  "Alexei ",
  "Petru ",
  "and ",
  "i ",
  "am ",
  "self-taught",
  "frontend ",
  "developer.",
];

export const apodLocalImage = {
  title: "The Cygnus Wall of Star Formation",
  url: "/headerBackground.jpg",
  copyright: "Johan Bogaerts",
  hdurl: "https://apod.nasa.gov/apod/image/2208/CygnusWall_Bogaerts_4143.jpg",
};

export const cardsDevStatusColors = {
  justStarted: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    textColor: "black",
  },
  prerelease: {
    backgroundColor: "rgb(217 217 0 / 85%)",
    textColor: "black",
  },
  release: {
    backgroundColor: "rgba(0, 255, 0, 0.65)",
    textColor: "black",
  },
  nextProject: {
    backgroundColor: "rgb(245 80 80)",
    textColor: "black",
  },
  pending: {
    backgroundColor: "rgb(115 115 255 / 89%)",
    textColor: "black",
  },
};

export const CARDS_DATA = [
  {
    title: "VersoMart",
    description: "Eshop SSR App",
    tags: [
      "Angular",
      "Typescript",
      "angular-material",
      "ngx-translate",
      "angular-universal",
      "scss",
    ],
    thumbnail: "/versomart.jpg",
    urlGit: "https://github.com/alexei-petru/VersoMart",
    urlLive: "https://versomart-dd427b87b213.herokuapp.com/en/auth/sign-up",
    devStatus: {
      text: "Prerelease v0.4",
      colors: {
        textColor: cardsDevStatusColors.prerelease.textColor,
        backgroundColor: cardsDevStatusColors.prerelease.backgroundColor,
      },
    },
  },
  {
    title: "A.P portfolio",
    description: "First version of personal portfolio",
    tags: [
      "NextJS",
      "Typescript",
      "Nodemailer",
      "Hcaptcha",
      "Backend",
      "Styled-Components",
    ],
    thumbnail: "/ap-portfolio.jpg",
    urlGit: "https://github.com/Allex191/ap-portfolio",
    urlLive: "#",
    devStatus: {
      text: "Release v1",
      colors: {
        textColor: cardsDevStatusColors.release.textColor,
        backgroundColor: cardsDevStatusColors.release.backgroundColor,
      },
    },
  },

  {
    title: "A.P Skills Snake",
    description: "My Dev Story in a snake game format",
    tags: ["NextJs", "Typescript", "React", "Redux", "Styled-Components"],
    thumbnail: "/ap-skills-snake.jpg",
    urlGit: "https://github.com/Allex191/ap-skills-snake-game",
    urlLive: "https://ap-skills-snake-game.vercel.app",
    devStatus: {
      text: "Prerelease v0.7",
      colors: {
        textColor: cardsDevStatusColors.prerelease.textColor,
        backgroundColor: cardsDevStatusColors.prerelease.backgroundColor,
      },
    },
  },

  {
    title: "Real Idea",
    description:
      "Landing Page created after 300hours of learning web development.",
    tags: ["Html", "Css", "Bem", "StyleLint", "Sccs"],
    thumbnail: "/real-idea.jpg",
    urlGit: "https://github.com/Allex191/real-idea-landing-page",
    urlLive: "https://allex191.github.io/real-idea-landing-page/",
    devStatus: {
      text: "Release v1.0",
      colors: {
        textColor: cardsDevStatusColors.release.textColor,
        backgroundColor: cardsDevStatusColors.release.backgroundColor,
      },
    },
  },
  {
    title: "Encryptor",
    description:
      "Mini project based on a simple encrypt algorythm created after starting learning dom manipulations",
    tags: ["Html", "Css", "JavaScript"],
    thumbnail: "/encryptor.jpg",
    urlGit:
      "https://github.com/Allex191/javascript-tutorials/tree/main/message-encryptor",
    urlLive: "#",
    devStatus: {
      text: "Release v1.0",
      colors: {
        textColor: cardsDevStatusColors.release.textColor,
        backgroundColor: cardsDevStatusColors.release.backgroundColor,
      },
    },
  },
  {
    title: "*Warehouse App",
    description:
      "A  cross platform mobile app for warehouse with useful statistics",
    tags: [
      "Html",
      "Css",
      "Typescript",
      "NextJs",
      "Redux-Toolkit",
      "Firebase",
      "Capacitor",
      "Ionic",
    ],
    thumbnail: "/warehouse-app.jpg",
    urlGit: "#",
    urlLive: "#",
    devStatus: {
      text: "Next project",
      colors: {
        textColor: cardsDevStatusColors.nextProject.textColor,
        backgroundColor: cardsDevStatusColors.nextProject.backgroundColor,
      },
    },
  },
];
