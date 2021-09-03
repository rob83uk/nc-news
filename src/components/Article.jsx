import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from './api';

const ArticleId = (props) => {
  const { article_id } = useParams();
  const { article, setArticle } = props;

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id, setArticle]);

  const convertTime = (time) => {
    let date = new Date(time);
    return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
  };

  return (
    <div>
      <section id="article">
        <div className="container">
          <div className="page-container">
            <article className="card">
              <img
                src={`https://source.unsplash.com/400x400/?${article.topics}`}
                alt="cooking"
              />
              <h1 className="l-heading">{article.title}</h1>

              <p>
                <i className="fas fa-user" />
                Written by {article.author} || {convertTime(article.created_at)}
              </p>
              <p>{article.body}</p>
              <br />
              <i className="far fa-comments fa-2x"></i>
              <h3>{article.comment_count} Comments</h3>
            </article>
            <aside id="categories" className="card">
              <br />
              <h2>Catergories</h2>
            </aside>
            <aside id="sign-up" className="card bg-secondary">
              Sign Up
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleId;
