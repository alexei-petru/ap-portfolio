export const HERO_APP_DESCRIPTION = {
  text: "Hello my name is Alexei Petru and i am a self-taught frontend developer",
};

export const apodLocalImage = {
  title: "The Cygnus Wall of Star Formation",
  url: "/headerBackground.jpg",
  copyright: "Johan Bogaerts",
  hdurl: "https://apod.nasa.gov/apod/image/2208/CygnusWall_Bogaerts_4143.jpg",
};

export const cardsDevStatus = {
  inProgress: {
    text: "In progress",
    backgroundColor: "rgb(115 115 255 / 89%)",
    textColor: "black",
  },
  prerelease: {
    text: "Prerelease",
    backgroundColor: "rgb(217 217 0 / 85%)",
    textColor: "black",
  },
  release: {
    text: "Release",
    backgroundColor: "rgba(0, 255, 0, 0.65)",
    textColor: "black",
  },
  nextProject: {
    text: "Next Project",
    backgroundColor: "rgb(245 80 80)",
    textColor: "black",
  },
};
export const CARDS_DATA = [
  {
    title: "AI Crossplatform App",
    description:
      "A crossplatform comercial app using AI, *links will be available when app will be published in store",
    tags: [
      "Next.js",
      "Typescript",
      "Capacitor",
      "ionic",
      "OpenAI",
      "Prisma",
      "Tailwind",
      "tRPC",
      "NextAuth.js",
    ],
    thumbnail: "/ai-app.jpg",
    urlGit: "#",
    urlLive: "#",
    devStatus: {
      text: cardsDevStatus.inProgress.text,
      colors: {
        textColor: cardsDevStatus.inProgress.textColor,
        backgroundColor: cardsDevStatus.inProgress.backgroundColor,
      },
    },
  },
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
      text: cardsDevStatus.prerelease.text + "v0.4",
      colors: {
        textColor: cardsDevStatus.prerelease.textColor,
        backgroundColor: cardsDevStatus.prerelease.backgroundColor,
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
      text: cardsDevStatus.release.text + "v1",
      colors: {
        textColor: cardsDevStatus.release.textColor,
        backgroundColor: cardsDevStatus.release.backgroundColor,
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
      text: cardsDevStatus.prerelease.text + "v0.7",
      colors: {
        textColor: cardsDevStatus.prerelease.textColor,
        backgroundColor: cardsDevStatus.prerelease.backgroundColor,
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
      text: cardsDevStatus.release.text + "v1.0",
      colors: {
        textColor: cardsDevStatus.release.textColor,
        backgroundColor: cardsDevStatus.release.backgroundColor,
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
      text: cardsDevStatus.release.text + "v1.0",
      colors: {
        textColor: cardsDevStatus.release.textColor,
        backgroundColor: cardsDevStatus.release.backgroundColor,
      },
    },
  },
];
