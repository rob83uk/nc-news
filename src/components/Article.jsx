import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle, patchVote } from './api';
import Error from './Error';

const ArticleId = (props) => {
  const { article_id } = useParams();
  const { article, setArticle } = props;
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setHasErrored(false);
        setArticle(article);
      })
      .catch((error) => {
        setHasErrored(true);
      });
  }, [article_id, setArticle]);

  const convertTime = (time) => {
    let date = new Date(time);
    return date.toDateString();
  };

  const handleVote = (num) => {
    patchVote(article_id, num)
      .then((article) => {
        setArticle((article) => {
          const updatedArticle = { ...article };
          updatedArticle.votes += num;
          return updatedArticle;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (hasErrored) return <Error />;

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

              <div className="article-data">
                <i className="far fa-comments fa-2x"></i>
                <h3>{article.comment_count} Comments</h3>
                <h3>{article.votes} Likes</h3>
                <span
                  className="like"
                  onClick={() => {
                    handleVote(1);
                  }}
                >
                  <i className="far fa-thumbs-up"></i>
                </span>
                <span
                  className="dislike"
                  onClick={() => {
                    handleVote(-1);
                  }}
                >
                  <i className="far fa-thumbs-down" />
                </span>
              </div>
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
