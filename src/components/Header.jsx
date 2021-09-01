import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from './api';

const Header = (props) => {
  const [topics, setTopics] = useState([]);
  const { user, setPage } = props;

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div id="main-nav">
      <div className="container">
        <div className="logo">
          <h1>
            <Link
              to="/articles/"
              onClick={() => {
                setPage(() => 1);
              }}
            >
              <span id="NC">NC</span> News
            </Link>
          </h1>
        </div>
        <div className="nav-links">
          <ul>
            <Link
              to="/articles/"
              onClick={() => {
                setPage(1);
              }}
            >
              <li key="home">Home</li>
            </Link>
            {topics.map((topic) => {
              return (
                <Link
                  to={`/articles/topic/${topic.slug}/`}
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  <li key={topic.slug}>{topic.slug}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="user">
        <p>
          <i className="far fa-user" /> {user.username}
        </p>
        <Link to="/users/">
          <button class="btn btn-dark">Change User</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
