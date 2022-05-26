import { React, useEffect, useState } from "react";

import axios from "axios";
import logo from "../../src/logo.svg";
import CardComics from "../components/CardComics";
import Search from "../components/Search";
import Page from "../components/Page";

const Comics = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResults] = useState(data.results);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  const { token, addFav } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://btvr-marvel-backend.herokuapp.com/comics?limit=${limit}&skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert("An error occurred");
      }
    };
    fetchData();
  }, [limit, skip]);

  const handleSearch = (event) => {
    const newResults = [];
    const value = event.target.value;
    for (let i = 0; i < data.results.length; i++) {
      if (data.results[i].title.indexOf(value.toLowerCase()) !== -1) {
        if (newResults.length <= 1000) {
          newResults.push(data.results[i]);
        } else {
          break;
        }
      }
    }
    setResults(newResults);
  };
  /* const handleSearchFilter = (event) => {
    const value = event.target.value;
    const search = data.results;
    const newResults = search
      .filter((search) => search.title.indexOf(value) !== -1)
      .slice(0, 100);
    setResults(newResults);
  };*/
  return isLoading ? (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
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
          ? result.map((item, index) => {
              // j'ai remis le data.results car le result ne fonctionnait pas tout le temps
              return (
                <CardComics
                  key={index}
                  item={item}
                  token={token}
                  addFav={addFav}
                  emptyStar
                />
              );
            })
          : data.results.map((item, index) => {
              // j'ai remis le data.results car le result ne fonctionnait pas tout le temps
              return (
                <CardComics
                  key={index}
                  item={item}
                  token={token}
                  addFav={addFav}
                  emptyStar
                />
              );
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

export default Comics;
