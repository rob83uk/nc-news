import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Header from './components/Header';
import Article from './components/Article';
import Comments from './components/Comments';
import Privicy from './components/Privicy';
import Users from './components/Users';

function App() {
  const [article, setArticle] = useState({});
  const [user, setUser] = useState({ username: 'butter_bridge' });

  return (
    <div className="App">
      <Header user={user} />
      <Switch>
        <Route exact path="/articles/">
          <ArticleList />
        </Route>
        <Route exact path="/articles/topic/:topic/">
          <ArticleList />
        </Route>
        <Route exact path="/articles/:article_id">
          <Article article={article} setArticle={setArticle} />
          <Comments article={article} />
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
