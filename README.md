# React + Hooks

This project is build with both React Hooks and Class Components. These two implementations can live side by side so it is likely you will come across both in your future careers. It will be important to know both, though neither takes priority over the other! This repo should be paired with the react documentation found here: https://reactjs.org/docs/hooks-intro.html

## To Run
`npm install`
`npm start`

## Key Files
- `./src/App.js` => comment in/out hook & class components
- `./components/AuthClass` + `./components/AuthHook` => review side by side
- `./components/ColorsClass` + `./components/ColorsHook` => review side by side

## Key Takeaways
- You do not need to install any special packages to use Hooks
- `useState` + `useEffect` are packaged into React.
- `constructor`, `componentDidMount`, `componentDidUpdate`, `render`, etc. are NOT available when using a functional component. 

## Challenge
- Build a frontend only Twitter Clone using Hooks ONLY
- MVP 1: Auth
- MVP 2: Tweet CRUD
- MVP 3: Tweet Index Page

- You do not need a backend. 
- `Auth` can simply be inserting a `user` object into state. 