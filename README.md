# SoundSphere Headphone Store

SoundSphere is a responsive single-page shopping cart application for browsing and purchasing headphones. It presents a curated headphone catalogue, lets visitors add or remove items from their cart, and keeps the cart count and total price up to date.

**Live demo:** [soundspehere.netlify.app](https://soundspehere.netlify.app/)

## Features

- Browse six headphone products with images and prices.
- Add products to the shopping cart.
- Remove products from the shopping cart.
- See the current cart item count and total price.
- Navigate between the Home and Cart pages without a full page reload.
- Page titles update for each route.

## Technology used

| Technology | Purpose |
| --- | --- |
| React 19 | Builds the user interface with reusable components. |
| React Router 7 | Provides client-side routes for the Home and Cart pages. |
| React Context and `useReducer` | Manages shared cart state, including items and total price. |
| CSS | Styles the layout, navigation, product cards, and cart. |
| Create React App / React Scripts | Runs the development server and creates production builds. |
| npm | Installs and runs project dependencies and scripts. |

## Prerequisites

Install [Node.js](https://nodejs.org/) 20 or later. npm is included with Node.js.

## Run locally

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser. The app reloads automatically when you save a change.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Starts the app in development mode at `http://localhost:3000`. |
| `npm run build` | Creates an optimized production build in the `build` directory. |
| `npm test` | Starts the test runner in watch mode. |

## Project structure

```text
src/
|- components/        Reusable Header, ProductCard, and CartCard components
|- context/           Cart context and cart actions
|- hooks/             Custom page-title hook
|- pages/             Home catalogue and Cart page
|- reducer/           Cart state reducer
|- routes/            Application route definitions
|- assets/            App logo and visual assets
|- App.js             Root application layout
`- index.js           React, router, and cart-provider setup

public/
`- assets/images/     Headphone product images
```

## Cart state

`CartProvider` wraps the application and exposes the cart list, total price, and add/remove actions to components. The reducer updates the cart list after each action, while the total is recalculated from the products currently in the cart.

## Production build

Before deployment, run:

```bash
npm run build
```

Deploy the generated `build` folder to any static hosting provider.
