import React from "react";

function Article(props) {
  const { article } = props;

  const coffeeCups = Math.ceil(article.estimatedTime / 5); // Calculate the number of coffee cups to display

  // Generate an array of coffee cup emojis to display
  const coffeeCupArray = Array.from({ length: coffeeCups }, (_, index) => (
    <span key={index}>☕️</span>
  ));

  return (
    <article>
      <h3>{article.title}</h3>
      <small>
        {coffeeCupArray} {article.estimatedTime} min read
      </small>
      <p>{article.preview}</p>
    </article>
  );
}

export default Article;
