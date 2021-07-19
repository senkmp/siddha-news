import classes from "./newsContent.module.css";
const NewsContent = (props) => {
  const news = props.news;
  return (
    <div className={classes.newsContent}>
      <h2>
        <span>{news.source.name}</span>
      </h2>

      <h1>
        <u>{news.title}</u>
      </h1>
      <p>
        {news.publishedAt.replace("T", ", ").replace("Z", "")} UTC
      </p>
      <figure>
        {" "}
        <img src={news.image} alt="Unabel to load Image" />
        <figcaption>© Provided by {news.source.name}</figcaption>
      </figure>
      <div className={classes.content}>
        <p>{news.description}</p>
        <p>
          {news.content} <a href={news.url}>Read More</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default NewsContent;
