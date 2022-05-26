import { React, useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import logo from "../../src/logo.svg";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Page from "../components/Page";

const Characters = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //const [fav, setFav] = useState([]);
  const [result, setResults] = useState(data.results);
  //const { fav, setFav } = props;
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  const {token, addFav}= props;
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://btvr-marvel-backend.herokuapp.com/characters?limit=${limit}&skip=${skip}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert("An error occurred");
      }
    };
    fetchData();
  }, [limit, skip]);

  /*const addFav = (character) => {
    let newTab = [];
    if (fav.length === 0) {
      newTab.push(character);
    }

    newTab = [...fav, character];
    setFav(newTab);
    console.log(fav);
  };*/
  const handleSearch = (event) => {
    const newResults = [];
    for (let i = 0; i < data.results.length; i++) {
      if (
        data.results[i].name.indexOf(event.target.value.toLowerCase()) !== -1
      ) {
        if (newResults.length <= 100) {
          newResults.push(data.results[i]);
        } else {
          break;
        }
      }
    }
    setResults(newResults);
  };

  /*const addFav = (item) => {
    // console.log("*********");
    // console.log("favorites avant modification : ", favorites);
    let tab = [...fav];
    // console.log("objet à ajouter : ", item);
    let newTab = true;
    // array.map((value, key) => {
    tab.forEach((value, key) => {
      if (value.id === item.id) {
        tab.splice(key, 1);
        setFav(tab);
        localStorage.removeItem(item.id);
        // console.log(item.id,"supprimer de localstorage.");
        newTab = false;
      }
    });
    if (newTab) {
      tab.push(item);
      setFav(tab);
      localStorage.setItem("favorites", [tab]);
      // console.log(item.id,"ajouter dans localstorage.");
    }
  };*/

  return isLoading ? (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  ) : (
    <div className="main">
      <Search handleSearch={handleSearch} />
      <div className="page-nav">
        {" "}
        <Page
          count={data.count}
          skip={skip}
          setSkip={setSkip}
          limit={limit}
          setLimit={setLimit}
        />
      </div>
      <div className="main-container">
        {result
          ? result.map((item) => {
              return <Card key={item._id} item={item} addFav={addFav} token={token} emptyStar/>;
            })
          : data.results.map((item) => {
              return <Card key={item._id} item={item} addFav={addFav} token={token} emptyStar />;
            })}
      </div>
      <div className="page-nav">
        {" "}
        <Page
          count={data.count}
          skip={skip}
          setSkip={setSkip}
          limit={limit}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
};

export default Characters;
