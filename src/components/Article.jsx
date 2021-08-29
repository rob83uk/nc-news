import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from './api';

const ArticleId = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <div>
      <section id="article">
        <div className="container">
          <div className="page-container">
            <article className="card">
              <img
                src={`https://source.unsplash.com/400x400/?${article.topics}`}
                alt="Random topic representation"
              />
              <h1 className="l-heading">{article.title}</h1>

              <p>Written by {article.author}</p>
              <p>{article.body}</p>
            </article>
            <aside id="categories" className="card">
              <h2>Catergories</h2>
            </aside>
            <aside className="card bg-secondary">Sign Up</aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleId;
