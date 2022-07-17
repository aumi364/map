import { Button } from 'antd';
import React from 'react';

import Map from './features/map/Map';
import Home from './pages/home';

function App() {
  // const token = fourSquare?.token;
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: token,
  //     },
  //   };

  //   fetch(
  //     `https://api.foursquare.com/v3/places/search?v=20220626&query=restaurant`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }, [token]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
