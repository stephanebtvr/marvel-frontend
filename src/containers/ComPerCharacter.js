import { useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";
import logo from "../../src/logo.svg";
import CardComics from "../components/CardComics";

const ComPerCharacter=()=> {
  const { characterId } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://btvr-marvel-backend.herokuapp.com/comics/${characterId}`
          
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert("An error occurred");
      }
    };
    fetchData();
  }, [characterId]);
  

  return isLoading ? (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  ) : (
    <div className="comcharacter-page">
      <img className="introduction-character"
        src={`${data.thumbnail.path}${"."}${data.thumbnail.extension}`}
        alt=""
      />
        <h1>{`Comics associés à ${data.name} `}</h1>
      
      <div className="main-container">
        { data.comics.map((comic, index) => {
          
          return <CardComics key={comic._id} item={comic} />;
        })} 
      </div>
    </div>
  );
};

export default ComPerCharacter;
