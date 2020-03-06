import React, { useEffect, useState} from "react";
import "./App.css";
import Image from "./Image";
import axios from "axios";



function App() {
  const [data, setData] = useState({});
  useEffect ( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(responce => {
      setData(responce.data);
      console.log(responce)
    })
  }, []);

  return (
    <div className="App">
      <h1 className="title">{data.title}</h1>
      <p className="parag">{data.explanation}</p>
      <Image image={data.url}/>
    </div>
  );
}

export default App;
