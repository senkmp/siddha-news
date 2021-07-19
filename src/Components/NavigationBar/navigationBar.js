import classes from "./navigationBar.module.css";
import { useHistory, NavLink } from "react-router-dom";

const NavigationBar = (props) => {
  const history = useHistory();
  const getCountryName = (country) => {
    props.changeCountry(country);
    history.push("/");
  };

  return (
    <div className={classes.navbar}>
      <NavLink activeClassName={classes.active} to="/">
        Home
      </NavLink>
      <div className={classes["dropdown"]}>
        <button className={classes["dropbtn"]}>{props.countryName} ⏬</button>
        <div className={classes["dropdown-content"]}>
          <p onClick={() => getCountryName("India")}>India</p>
          <p onClick={() => getCountryName("USA")}>US</p>

          <p onClick={() => getCountryName("Australia")}>Australia</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
