import React from "react";
import Article from "./Article";

function ArticleList(props) {
  const { articles } = props;

  return (
    <main>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </main>
  );
}

export default ArticleList;

