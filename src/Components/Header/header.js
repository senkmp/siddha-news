import classes from "./header.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
const Header = (props) => {
  const refSearchValue = useRef();
  const history = useHistory();
  const getSearchValue = (event) => {
    event.preventDefault();
    if (refSearchValue.current.value.trim().length !== 0) {
      props.searchValueHandler(refSearchValue.current.value);
      history.push("/search");
    } else {
      alert("Please Enter Valid Value");
    }
  };
  return (
    <div className={classes.header}>
      <h1>Siddha News</h1>
      <form onSubmit={getSearchValue}>
        <input type="text" placeholder="Search News.." ref={refSearchValue} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
