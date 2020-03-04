import React from "react";
import { Link } from "react-router-dom";

import "./articlePage.css";

import AdBanner from "../../components/AdBanner/AdBanner";
import AdSideBanner from "../../components/AdSideBanner/AdSideBanner";
import Article from "../../components/Article/Article";
import NextPageButton from "../../components/NextPageButton/NextPageButton";
import RecommendedPages from "../../components/RecommendedPages/RecommendedPages";

const ArticlePage = () => (
  <div className="article-page">
    <aside className="side-bar sb-left">
      <AdSideBanner />
    </aside>
    <div className="article-section">
      <AdBanner />
      <Article />
      <NextPageButton />
    </div>
    <aside className="side-bar sb-right">
      <AdSideBanner />
    </aside>
    {/* <span></span>
    <RecommendedPages /> */}
  </div>
);

export default ArticlePage;
