import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
const Articles = ({ heading, medium_api }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(medium_api)
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  return (
    <div className="article__container container grid">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;
