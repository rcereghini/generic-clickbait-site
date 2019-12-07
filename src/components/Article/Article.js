import React from "react";
import "./article.css";
import book from "../../assets/book.jpg";

const Article = () => (
  <div className="article">
    <div className="image-wrap">
      <img style={{ width: "100%" }} src={book}></img>
    </div>
    <p>
      Freddie Wilson lived an ordinary life. He was born and raised in Michigan,
      where all seemed peaceful.
    </p>
    <p>That was until Freddie found the book in his attic.</p>
    <p>He couldn't have imagined where this book would take him.</p>
  </div>
);
export default Article;
