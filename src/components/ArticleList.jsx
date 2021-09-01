import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticles } from './api';

const ArticleList = (props) => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const { page, setPage } = props;

  useEffect(() => {
    getArticles(topic, page).then((articles) => {
      setArticles(articles);
    });
  }, [topic, page]);

  return (
    <div>
      <section id="home-articles" className="py-2">
        <div className="container">
          <h2>Editor Picks</h2>
          <div className="articles-container">
            {articles.map((article) => {
              return (
                <article className="card" key={article.article_id}>
                  <img
                    src={`https://source.unsplash.com/400x400/?${
                      article.topics
                    }&sig=${Math.random()}`}
                    alt="Random image of the topic"
                  />
                  <div>
                    <div className={`category category-${article.topics}`}>
                      {article.topics}
                    </div>
                    <Link to={`/articles/${article.article_id}`}>
                      <h3>{article.title}</h3>
                    </Link>
                    <p>{article.body.slice(0, 200)}...</p>
                    <br />
                    <p>{article.comment_count} comments</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <div className="container page" id="page-buttons">
        <button
          className="btn btn-secondary"
          id="previous"
          onClick={() => {
            setPage((page) => {
              return page === 1 ? 1 : page - 1;
            });
          }}
        >
          Previous
        </button>
        <p>Page {page}</p>
        <button
          className="btn btn-primary"
          id="next"
          onClick={() => {
            setPage((page) => {
              return page + 1;
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ArticleList;

{
  /* <header id="showcase">
        <div className="container">
          <div className="showcase-container">
            <div className="showcae-content">
              <div className={`category category-${articles[0].topics}`}>
                {articles[0].topics}
              </div>
              <h2>{articles[0].title}</h2>
              <p>{articles[0].body.slice(0, 250)}...</p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </header> */
}
