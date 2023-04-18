This is my attempt at the Barstool Sports BoxScore Full Stack challenge using [Typescript](https://www.typescriptlang.org/docs/), [Next.js](https://nextjs.org/) project using [Prisma ORM](https://www.prisma.io/) with [MongoDB](https://www.mongodb.com/) and a self built front-end library using [React](https://react.dev/) with [Styled Components](https://styled-components.com/).

## Getting Started

First, make a copy of .env.example and add the necessary database credentials.

Secondly, install dependencies.

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

## Notable features

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The home page shows to buttons, each button opens a page corresponding to one of the two api feeds listed in the original challenge spec. 

These buttons are mapped to `game/[uuid]` which will take the user to a screen where the custom BoxScore component is loaded nicely withing a wrapped card on a page.

This game page contains a button that maps to the `maps/[uuid]` route which is a standalone embeddable version of the custom component. 

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Every time the api route to get a game's data `api/game/[uuid]` is hit, the controller will check when last that specific game's data was cached in the database. 

If the time is less than 15 seconds, we simply return the cached JSON data. Otherwise, we fetch new data from the endpoint and cache it before returning it to the user.

## Nice to have

The app supports your system's light and dark mode and will automatically change based on what state your device is in. 

The table is scalable and displays clearly on desktop and mobile.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

This works greatly in our favour. Since we are using Next.js and Prisma we have a single full-stack executable, and we are using a serverless database - deployment only takes a couple of seconds. 

Check out the live version of the app hosted [on Vercel](https://hennas-box-score-gkbwge86p-hendrikkels1.vercel.app/).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
