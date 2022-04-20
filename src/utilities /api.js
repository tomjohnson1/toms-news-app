import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://toms-news-app.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get("/articles", {
      params: {
        topic: topic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
