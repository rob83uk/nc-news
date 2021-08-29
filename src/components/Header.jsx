import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from './api';

const Header = () => {
  //  use state to determine the topics
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, [topics]);
  // use topics in nav bar

  return (
    <div id="main-nav">
      <div className="container">
        <div className="logo">
          <h1>
            <Link to="/articles/">
              <span id="NC">NC</span> News
            </Link>
          </h1>
        </div>
        <div className="nav-links">
          <ul>
            <Link to="/articles/">
              <li key="home">Home</li>
            </Link>
            {topics.map((topic) => {
              return (
                <Link to={`/articles/topic/${topic.slug}/`}>
                  <li key={topic.slug}>{topic.slug}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
