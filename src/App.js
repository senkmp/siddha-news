import NewsList from "./Components/News/newsList";
import { useState } from "react";
import NewsContent from "./Components/News/newsContent";
import Header from "./Components/Header/header";
import NavigationBar from "./Components/NavigationBar/navigationBar";
import { Route, Switch, useHistory } from "react-router-dom";
function App() {
  const [clickedNews, setCLickedNews] = useState(null);
  const newsContnetHandler = (news) => {
    setCLickedNews(news);
  };
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(null);
  const [country, setCountry] = useState("in");
  const [countryName, setCountryName] = useState("India");
  const apiKey = "259cee6b1b6c04daf9b2232665759184";
  const getSearchValueHandler = (searchValueRaw) => {
    setSearchValue(encodeURIComponent(searchValueRaw));
  };
  const setCountryHandler = (country) => {
    console.log(country);
    switch (country) {
      case "India":
        setCountry("in");
        setCountryName("India");
        break;
      case "USA":
        setCountry("us");
        setCountryName("USA");
        break;

      case "Australia":
        setCountry("au");
        setCountryName("Australia");
        break;
      default:
        setCountry("in");
        setCountryName("India");
    }
  };

  return (
    <>
      <Header searchValueHandler={getSearchValueHandler} />
      <NavigationBar
        changeCountry={setCountryHandler}
        countryName={countryName}
      />

      <Switch>
        <Route path="/" exact>
          <p style={{ margin: "20px", fontSize: "24px" }}>
            Trending in {countryName}...
          </p>
          <NewsList
            onClick={newsContnetHandler}
            url={`https://gnews.io/api/v4/top-headlines?token=${apiKey}&country=${country}&lang=en`}
          />
        </Route>

        <Route path="/news">
          {clickedNews ? <NewsContent news={clickedNews} /> : history.push("/")}
        </Route>

        <Route path="/search">
          <NewsList
            onClick={newsContnetHandler}
            url={`https://gnews.io/api/v4/search?q=${searchValue}&token=${apiKey}`}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
