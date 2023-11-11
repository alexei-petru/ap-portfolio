# AP Portfolio

Welcome to the AP Portfolio, a dynamic and modern portfolio website built with Next.js, TypeScript, and emotion/styled. This portfolio is a showcase of my projects and a demonstration of modern web development practices and integration with various APIs and tools.

## Features

- **Next.js Framework**: Leveraging the power of Next.js for server-side rendering and static site generation to ensure fast load times and optimal performance.
- **TypeScript Integration**: Utilizing TypeScript to enforce type safety and improve the maintainability of the codebase.
- **Styled-Components**: Implementing styled-components for writing CSS in JavaScript, providing a seamless styling experience without leaving the JS environment.
- **APOD API Integration**: Featuring daily astronomical photographs from NASA's Astronomy Picture of the Day (APOD) API, adding an engaging and educational element to the portfolio.
- **Contact Form with Nodemailer**: A functional contact form integrated with Nodemailer for easy communication.

## Live Demo https://ap-portfolio-ten.vercel.app/

--- Devs Note ---

### Documentation

`Styled-components`

- error "React does not recognize the `isMessageSended` prop on a DOM element",
  solution : custom atributes need to be passed with $ prefix to not be passed to DOM or in some cases, "styling NextJs Image component" atribute needs to be extracted from component.

- incorect type inheritance for Mantine components styled with emotion/styled
  solution :
  export const ButtonShowForm* = styled(Button)``;
  export const ButtonShowForm = createPolymorphicComponent<"button", ButtonProps>(ButtonShowForm*,);

### _To Do_

#### High-Priority

#### Medium-Priority

- about me section with clockify api and some description
- 404 page

#### Low-Priority

- form animation ufo start:fligh in, formSend:fligh out
