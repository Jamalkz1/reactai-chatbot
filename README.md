This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Summary of Project 

Hello , I am currently making it a habit to self reflect on projects I have completed as a way of improving myself as a programmer . So here it goes : 

1. Building my form with react

This part I developed my chatbotai form using React. This involved creating React components to manage form inputs, validation, and submission. Using React allowed for a more dynamic and responsive user experience. In comparison to my last project where I just used HTML/CSS using React was a lot easier and faster to use when creating the front end for this project .

2. API

Before connecting my ChatGPT API Key from the open ai website to my project . I added a '.gitignore' file  project repository to exclude unnecessary or sensitive files . The addition of a '.gitignore' file helps keep the repository clean and reduces the risk of accidentally exposing sensitive information, such as API keys or configuration details. After , I added a '.env' file , this project was configured to manage sensitive information, such as my API keys , using a '.env' file. This file stores environment-specific variables that can be loaded into the application at runtime. By using environment variables, the project separates sensitive information from the codebase, enhancing security and making it easier to manage configurations across different environments (e.g., development, testing, production). This setup also facilitates better security practices by preventing accidental exposure of sensitive information.

3. Further security

I implemented Dependabot and Gitguardian . Dependabot was used to automatically manage and update dependencies, ensuring that the project uses the latest and most secure versions of its libraries. This helps prevent vulnerabilities that could arise from outdated packages. Git Guardian was set up to monitor the repository for any accidental exposure of sensitive data, such as API keys and to alert myself for immediate action. Together, these tools enhance the project's security and maintenance.

4. E2E (Using Cypress)

I used End-to-end testing using Cypress, a powerful testing framework for web applications. These tests allowed me to test my chatbot components such as the 'send button' , input fields, and user message handling. The comprehensive tests ensured that the entire flow, from user input to bot response, functioned correctly under various scenarios. This approach helped in identifying and fixing bugs that could impact the user experience. Implementing Cypress tests not only provided confidence in the application's reliability but also facilitated continuous integration and deployment practices by ensuring that new changes did not introduce regressions. The main reason on why I used e2e testing was to help, catch integration issues and provides confidence that the application performs correctly from the end user's perspective.

5. Converting backend to nodejs/Sentry 

I converted my project's backend to Node.js, which is a JavaScript runtime known for its known for its efficiency in handling non-blocking operations which is where a system can initiate a task and continue executing other tasks before the initial task completes. The transition aimed to enhance the application's scalability, speed, and ease of maintenance. 

Sentry was integrated into the Node.js application to provide real-time error tracking and monitoring. This setup allowed to quickly identify, diagnose, and fix errors, improving the overall reliability and stability of the application. The implementation involved configuring the Sentry SDK in the application and ensuring that it captured relevant error data.

6. Creating github action pipeline

This sectioned focused on setting up a CI/CD (Continuous Integration/Continuous Deployment) pipeline using GitHub Actions. The pipeline will automate the process of building, testing, and deploying the Node.js application. Specifically, it will run end-to-end tests each time a new pull request is created in the repository.

7. Running my nodejs using Docker

The goal of this section was to containerise my Node.js application using Docker. Docker allows applications to run in isolated environments called containers, ensuring consistency across different development, testing, and production environments.

8. CodeCov

This task involved me integrating CodeCov, a tool for measuring and reporting code coverage. Integrating CodeCov provided me with insights into the test coverage of the project's code, helping to identify untested areas and improve overall code quality.

