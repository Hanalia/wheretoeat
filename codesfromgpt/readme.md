Great, Vite is a modern build tool that provides a faster and leaner development experience for modern web projects. It is easy to set up and works well with TypeScript and React.

Let's start by setting up a new Vite project with React and TypeScript:

1. **Setup**:
```bash
npm init @vitejs/app
```
Choose `react-ts` when prompted. This will create a new Vite project with React and TypeScript.

2. **Install Dependencies**:
Move into your new project directory, and install the additional dependencies:
```bash
cd your-project-name
npm install react-router-dom @emotion/react axios firebase
npm install -D @types/react-router-dom
```

3. **Structure**:
Create a `components` directory under `src`. This will be used to store all your components. You can start off by creating files like `Home.tsx`, `FoodCategories.tsx`, `RestaurantCard.tsx`, `GroupModal.tsx`, `Loader.tsx` etc.

```bash
mkdir src/components
touch src/components/{Home,FoodCategories,RestaurantCard,GroupModal,Loader}.tsx
```

4. **Routing**:
Set up your routing in `src/App.tsx` using `react-router-dom`. Here's a skeleton to get started:
```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import FoodCategories from './components/FoodCategories';
// import other components

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/categories">
          <FoodCategories />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        {/* add other routes */}
      </Switch>
    </Router>
  );
}

export default App;
```

5. **Firebase Setup**:
Set up Firebase in a separate file (e.g., `firebase.ts` in the `src` directory). Initialize Firebase and export the functions you'll use in your components. You'll need to replace the config object with your own Firebase project configuration:
```jsx
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // your config here
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
```

You can continue from here, building out your components according to the specifications in your prompt. Remember to use React's state and props to manage data, and use the Firebase Firestore functions to interact with your backend.