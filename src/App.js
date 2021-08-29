import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Header from './components/Header';
import Article from './components/Article';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/articles/">
          <ArticleList />
        </Route>
        <Route exact path="/articles/topic/:topic/">
          <ArticleList />
        </Route>
        <Route exact path="/articles/:article_id">
          <Article />
          <Comments />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
