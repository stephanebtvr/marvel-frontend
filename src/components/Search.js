import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const { search, handleSearch } = props;
  return (
    <div className="search">
      <input
        onChange={handleSearch}
        className="search"
        type="text"
        placeholder="Faites votre recherche"
        value={search}
      />

      <div> </div>
    </div>
  );
};

export default Search;
