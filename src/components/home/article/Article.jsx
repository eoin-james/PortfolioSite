import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const Articles = ({ heading, medium_api }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(medium_api)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [medium_api]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="article__container container grid">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
