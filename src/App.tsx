import React, { useEffect } from "react";
import "./App.css";
import { fourSquare } from "./httpService/httpService";

function App() {
  const token = fourSquare?.token;
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
    };

    fetch(
      `https://api.foursquare.com/v3/places/search?v=20220626&query=restaurant`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, [token]);
  return <div className="App">hello</div>;
}

export default App;
