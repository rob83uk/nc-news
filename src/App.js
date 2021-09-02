import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Header from './components/Header';
import Article from './components/Article';
import Comments from './components/Comments';
import Privicy from './components/Privicy';
import Users from './components/Users';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [article, setArticle] = useState({});
  const [user, setUser] = useState({ username: 'cooljmessy' });
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <ScrollToTop />
      <Header user={user} setPage={setPage} />
      <Switch>
        <Route exact path="/articles/">
          <ArticleList page={page} setPage={setPage} />
        </Route>
        <Route exact path="/articles/topic/:topic/">
          <ArticleList page={page} setPage={setPage} />
        </Route>
        <Route exact path="/articles/:article_id">
          <Article article={article} setArticle={setArticle} />
          <Comments article={article} user={user} />
        </Route>
        <Route exact path="/privicy/">
          <Privicy />
        </Route>
        <Route exact path="/users/">
          <Users user={user} setUser={setUser} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
