import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hello! I'm exploring the exciting realm of frontend development, 
          equipped with React, Angular, and Redux for crafting dynamic web apps. 
          I style with finesse using SCSS and styled-components, and TypeScript 
          ensures my code is both clean and reliable. Version control with Git is 
          part of my daily routine, and I'm no stranger to building responsive designs 
          with a sprinkle of UI libraries like Mantine and Angular Material for that sleek finish.
          Based in the tech heart of Germany, I'm actively seeking a role where 
          I can contribute to a team with my skills and grow as a developer. 
          My portfolio showcases my journey so far. If you're looking for someone enthusiastic
          and ready to dive into frontend challenges, let's connect and discuss how I can help your team succeed!"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
