import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faChevronCircleLeft, faChevronCircleRight);


const Page = ({ count, limit, setLimit, skip, setSkip }) => {
  const location = useLocation();

  const [page, setPage] = useState(1);

  return (
    (location.pathname === "/characters" || location.pathname === "/comics") && (
      <div className="bloc-pagenav">
        <div className="bloc-pagenav">
          {page > 1 ? (
            <FontAwesomeIcon
              icon="chevron-circle-left"
              onClick={() => {
                setPage(page - 1);
                setSkip(skip - limit);
                window.scrollTo(0, 0);
              }}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FontAwesomeIcon
              icon="chevron-circle-left"
              style={{ color: "red" }}
            />
          )}

          <div>
            <span
              onClick={() => {
                setLimit(25);
              }}
            >
              [25]
            </span>
            <span
              onClick={() => {
                setLimit(50);
              }}
            >
              [50]
            </span>
            <span
              onClick={() => {
                setLimit(100);
              }}
            >
              [100]
            </span>
          </div>

          {page * limit < count ? (
            <FontAwesomeIcon
              icon="chevron-circle-right"
              onClick={() => {
                setPage(page + 1);
                setSkip(skip + limit);
                window.scrollTo(0, 0);
              }}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FontAwesomeIcon
              icon="chevron-circle-right"
              style={{ color: "red" }}
            />
          )}
        </div>
      </div>
    )
  );
};

export default Page;
