import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Card(props) {
  const { item, /*addFav,*/ fullStar, emptyStar, removeFav, token } = props;

  return (
    <div className="card">
      <img
        src={`${item.thumbnail.path}${"."}${item.thumbnail.extension}`}
        alt=""
      />
      <div className="paragraph">
        <h3>{item.name}</h3>
        <span className="description">{item.description}</span>
        <div className="ajout">
          <Link to={`/comics/${item._id}`} style={{ textDecoration: "none" }}>
            <div className="btn-card">En savoir plus...</div>
          </Link>
          {token ? (
            emptyStar ? (
              <div className="text-btn-empty-star">
                <FontAwesomeIcon
                  key={item._id}
                 /* onClick={addFav(item._id, "hero")}*/
                  icon={faStar}
                />
              </div>
            ) : fullStar ? (
              <div className="text-btn-full-star">
                <FontAwesomeIcon
                  key={item._id}
                /*  onClick={removeFav(item._id)}*/
                  icon={faStar}
                />
              </div>
            ) : null
          ) : (
            <div className="text-btn-empty-star">
              <FontAwesomeIcon
                key={item._id}
                onClick={() => {
                  alert("Veuillez vous connecter pour ajouter des favoris");
                }}
                icon={faStar}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
