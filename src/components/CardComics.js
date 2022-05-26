import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CardComics(props) {
  const { item,/* addFav,*/ removeFav, emptyStar, fullStar, token } = props;

  return (
    <div className="card">
      <img
        src={`${item.thumbnail.path}${"."}${item.thumbnail.extension}`}
        alt=""
      />
      <div className="paragraph">
        <h3>{item.title}</h3>
        <span className="description">{item.description}</span>
        <div className="ajout-comics">
        {token ? (
            emptyStar ? (
              <div className="text-btn-empty-star">
                <FontAwesomeIcon
                  key={item._id}
                 /* onClick={addFav(item._id, "comic")}*/
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

export default CardComics;
