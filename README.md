# 🧆 Restaurant Finder 🇩🇪

## 🔍 Project description

This is a final project of the React.js course from ReDI School Berlin. It includes very basic yet important React.js framework features such as ES6 recap, JSX syntax, Components, Props, Fetching API, React Hooks, React Routing, Styled Component, etc.

Users are able to

- click 'Let's explore' for entering a main page
- click a category of the dietary restrictions
- see the filtered restaurant list in Berlin and its information

## 🔨 Note

### ❗️

There was an issue crashing the endpoint of the restaurants API from _Heroku_.

In an attempt to solve this

- I should have replaced to another address which contains the original contents. So, I have asked to my teachers and the other people from ReDI school but unfortunately, no one had the access for the Heroku API.
- I got a _JSON_ file `data.json` with the same information.

```jsx
//from this
//App.js

const [restaurants, setRestaurants] = useState([]);

useEffect(() => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch("./resturants-api.json", requestOptions)
    .then((response) => response.json())
    .then((result) => setRestaurants(result.results))
    .catch((error) => console.log("error", error));
}, []);
```

- [More info of Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

```jsx
//to this
//filter-section

const [dataRestaurant, setDataRestaurant] = useState([]);

const getData = () => {
  fetch("data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      setDataRestaurant(myJson.results);
    });
};
useEffect(() => {
  getData();
}, []);
```

### ❗️❗️

In an attept to practice one of the essential CSS libraries,

- I converted Post CSS styling to _[Styled Components](https://styled-components.com/docs/basics)_.

### ❗️❗️❗️

In an attept to practice the latest version of _[React Router](https://reactrouter.com/en/main/start/overview)_,

- I added `Intro.jsx` component

```jsx
//Intro.jsx
import { Link } from 'react-router-dom';
...
  return
    <Link to='/restaurantberlin'>
      <Click>Let's Explore</Click>
    </Link>
...
```

```jsx
//app.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
...
  return
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Intro />} />
        <Route path='/restaurantberlin' element={<RestaurantList />} />
      </Routes>
    </BrowserRouter>
...
```
