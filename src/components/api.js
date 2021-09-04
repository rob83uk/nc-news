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

export const setVote = async (num, comment_id) => {
  const vote = { inc_votes: num };
  const { data } = await articlesApi.patch(`/comments/${comment_id}`, vote);
  return data.comment.votes;
};

export const postComment = async (article_id, username, comment) => {
  const newComment = {
    username: username,
    body: comment
  };
  const { data } = await articlesApi.post(
    `/articles/${article_id}/comments`,
    newComment
  );
  return data.comment;
};

export const deleteComment = async (comment_id) => {
  const { data } = await articlesApi.delete(`/comments/${comment_id}`);
  return data;
};

export const patchVote = async (id, vote) => {
  const newVote = { inc_votes: vote };
  const { data } = await articlesApi.patch(`/articles/${id}`, newVote);
  return data.article;
};
