# Portfolio - Kasia Żukowska

A modern portfolio website showcasing product design work, built with React 18.

## Technology Stack

- **React**: 18.3.1
- **React DOM**: 18.3.1
- **React Router DOM**: 5.3.4
- **React Scripts**: 4.0.3
- **Styling**: SCSS/Sass
- **Animations**: React Transition Group 4.4.5
- **Video**: Video React
- **Data Visualization**: D3-geo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Recent Updates (2025)

### React 18 Migration

The portfolio has been upgraded to React 18 with the following changes:

- **React & ReactDOM**: Updated from 16.14.0 to 18.3.1
- **React Router**: Updated to 5.3.4 (maintained v5 for compatibility)
- **React Transition Group**: Migrated from v1 to v4
  - Replaced deprecated `CSSTransitionGroup` with `TransitionGroup` and `CSSTransition`
- **React Scripts**: Updated to 4.0.3 with OpenSSL legacy provider for Node 17+
- **Build System**: Replaced deprecated `node-sass` with modern `sass`
- **Index.js**: Migrated to React 18's `createRoot` API
- **Dependencies**: Updated all major dependencies to latest compatible versions

### Key Technical Changes

1. **Rendering**: Migrated from `ReactDOM.render()` to `createRoot().render()`
2. **Transitions**: Updated all home components to use new TransitionGroup API
3. **Strict Mode**: Wrapped app in `React.StrictMode` for better development warnings
4. **Legacy Support**: Added `NODE_OPTIONS=--openssl-legacy-provider` for Node.js 17+ compatibility

### Installation

```bash
npm install --legacy-peer-deps
```

Note: The `--legacy-peer-deps` flag is required due to some packages not yet fully supporting React 18 peer dependencies.
