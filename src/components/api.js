import axios from 'axios';

const articlesApi = axios.create({
  baseURL: 'https://rob-news.herokuapp.com/api'
});

export const getArticles = async (topic, page) => {
  const { data } = await articlesApi.get(`/articles`, {
    params: { topic, page }
  });
  return data.articles;
};

export const getTopics = async () => {
  const { data } = await articlesApi.get('/topics');
  return data.topics;
};

export const getArticle = async (article_id) => {
  const { data } = await articlesApi.get(`/articles/${article_id}`);
  return data.article;
};

export const getComments = async (article_id, page) => {
  const { data } = await articlesApi.get(
    `/articles/${article_id}/comments?page=${page}`
  );
  return data.comments;
};

export const getUsers = async () => {
  const { data } = await articlesApi.get('/users');
  return data.users;
};
