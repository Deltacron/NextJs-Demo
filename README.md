# Next.js 14+, Tailwind CSS 3.4, and TypeScript.


🚀 Next.js project with App Router support, Tailwind CSS, and TypeScript ⚡️ Prioritizing clean code: Next.js, TypeScript, ESLint, Prettier, Cypress, Commitlint, PostCSS, Tailwind CSS Error Monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)

This project is accessible at [nextjs-staging](https://nextjs-staging.netlify.app/)


### Features

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default Next.js, Next.js Core Web Vitals and Tailwind CSS)
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Testing with [Cypress](https://docs.cypress.io/guides/getting-started/opening-the-app)
- 🚨 Error Monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)

### Requirements

- Node.js 18+ and npm

### Getting started

Run the following command on your local environment:

```shell
npm install
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.


### Project structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── cypress
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── fixtures                    # fixtures for testing
│   └── support                     # Custom commands
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── assets                      # All the assets used in the project including dummy data.
│   ├── components                  # React components
│   ├── pages                       # As document file for adding links to head inside html tag
│   ├── store                       # Zustand stores
│   ├── styles                      # Styles
│   ├── theme                       # Theme configuration
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Testing

All tests are located with the source code inside the same directory. So, it makes it easier to find them. The project uses Cypress for testing. You can run the tests with:

```shell
npx cypress open
```
Then select the test that you want to execute.

### Deploy to production

You can generate a production build with:

```shell
$ npm run build
```

It generates an optimized production build of the boilerplate. For testing the generated build, you can run:

```shell
$ npm run start
```

The command starts a local server with the production build. Then, you can now open http://localhost:3000 with your favorite browser to see the project.

### Error Monitoring

The project uses [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) to monitor errors.



### License

Licensed under the MIT License, Copyright © 2024
