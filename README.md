# SoundSphere Headphone Store

SoundSphere is a responsive single-page shopping cart application for browsing and purchasing headphones. It lets users explore a curated catalogue, add or remove products, and track the cart count and total price.

This branch contains the **Redux implementation** of the application. The original Context/useReducer implementation remains on the `main` branch.

**Live demo:** [soundspehere.netlify.app](https://soundspehere.netlify.app/)

## Features

- Browse six headphone products with images and prices.
- Add products to the shopping cart.
- Remove products from the shopping cart.
- View the current cart item count and total price.
- Navigate between Home and Cart pages without a full page reload.
- Update page titles for each route.
- Manage shared cart state with Redux Toolkit.

## Technology

| Technology | Purpose |
| --- | --- |
| React 18 | Builds the user interface with reusable components. |
| React Router 6 | Provides client-side routing for the Home and Cart pages. |
| Redux Toolkit | Defines the cart slice and reducer logic. |
| React Redux | Provides the Redux store to the React component tree. |
| CSS | Styles the layout, navigation, product cards, and cart. |
| Create React App | Runs the development server and creates production builds. |

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm, included with Node.js

## Run locally

Clone the Redux branch directly:

```bash
git clone --branch redux --single-branch https://github.com/DarkLightningProject/Shopmate-React.git
cd Shopmate-React
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000/) in your browser. The development server reloads automatically when files change.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server at `http://localhost:3000`. |
| `npm run build` | Creates an optimized production build in the `build` directory. |
| `npm test` | Starts the test runner in watch mode. |

## Project structure

```text
src/
├── components/        Reusable Header, ProductCard, and CartCard components
├── hooks/              Custom page-title hook
├── pages/              Home catalogue and Cart page
├── routes/             Application route definitions
├── store/              Redux cart slices and store configuration
├── assets/             Application assets
├── App.js              Root application layout
└── index.js            React, Redux Provider, and router setup

public/
└── assets/images/      Headphone product images
```

## Redux cart state

The Redux store is configured in `src/store/store.js` and provided to the application with React Redux's `Provider` in `src/index.js`.

Cart state and actions are defined in `src/store/cartSlice.js`:

- `add` adds a product to the cart and updates the total.
- `remove` removes a product and updates the total.
- `cartItems` stores the products currently in the cart.
- `total` stores the current cart total.

## Production build and deployment

Create a production build with:

```bash
npm run build
```

The generated `build` directory can be deployed to any static hosting provider, such as Netlify, Vercel, or GitHub Pages.

## Branches

- `main` — Context and `useReducer` implementation.
- `redux` — Redux Toolkit implementation.
