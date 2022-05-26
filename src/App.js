import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";
import ComPerCharacter from "./containers/ComPerCharacter";
import Home from "./containers/Home";
import Cookie from "js-cookie";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";

function App() {
  //Tout ce qui est authentif c'est dans App.js
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const [fav, setFav] = useState(
    (Cookie.get("fav") && JSON.parse(Cookie.get("fav"))) || [[], []]
  );

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      //créer un cookie
      Cookie.set("userToken", tokenToSet);

      setToken(tokenToSet);
    } else {
      //supprimer un cookie
      Cookie.remove("userToken");
      setToken(null);
    }
  };
  // const addFav = (id, type) => {
  //   let favTab = [...fav];
  //   if (type === "hero") {
  //     if (favTab[0].indexOf(id) === -1) {
  //       favTab[0].push(id);
  //       alert("Ajouté dans la base de données de favoris");
  //     } else {
  //       alert("Déjà en favoris");
  //     }
  //   } 
  //    if(type==="comic") {
  //   if (favTab[1].indexOf(id) === -1) {
  //     favTab[1].push(id);
  //     alert("Ajouté dans la base de données de favoris");
  //   } else {
  //    alert("Déjà en favoris");
  //   }}
  //   setFav(favTab);
  //   Cookie.set("fav", JSON.stringify(favTab));
  // };
  return (
    <>
      <div className="App2">
        <Router>
          <Header token={token} setUser={setUser} />
          <Switch>
            <Route path="/comics/:characterId">
              <ComPerCharacter />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/characters" token={token}>
              <Characters token={token} /* addFav={addFav} */ />
            </Route>
            <Route path="/comics">
              <Comics token={token} /* addFav={addFav}*/ />
            </Route>
            {/* <Route path="/favorites">
              <Favorites token={token} fav={fav} />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
