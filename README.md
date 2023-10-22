# 🧆 Restaurant Finder 🇩🇪

## 🔍 Project description

This is a final project of the React.js course from ReDI School Berlin. It includes very basic yet important React.js framwork features such as JSX syntax,

Users are able to

- click a category of the dietary restrictions

- see the filtered restaurant list and its information

## 🔨 Note

### ❗️

There was an issue crashing the endpoint of the restaurants API from _Heroku_.

In and attempt to solve this

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
