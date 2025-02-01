import React from 'react';
import { articles } from 'declarations/articles';
import logo from './logo2.svg';

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const article = {
      id: 12,
      title: "Waduh",
      content: "waduh",
      created_at: "waduh"
    };

    try {
      await articles.create_article(article);
      alert("Article created successfully!");
    } catch (err) {
      console.error("Failed to create article:", err);
      alert("Error: " + err.message);
    }
  };

  const getArticle = async () => {
    try {
      const articleList = await articles.list_articles();
      console.log("Articles:", articleList);
    } catch (err) {
      console.error("Failed to retrieve articles:", err);
    }
  };

  return (
    <main>
      <img src={logo} alt="DFINITY logo" />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" name="name" type="text" alt="Name" />
        <button type="submit">Click Me!</button>
        <button onClick={getArticle} type="button">Get Articles</button>
      </form>
    </main>
  );
}

export default App;
