import http from "./httpService";
import APIURL from "./apiUrl";

const fetchPublicTopics = async () => {
  const topics = await http.get(APIURL.TOPICS_PUBLIC);
  return topics.data;
};

const createTopic = async (TopicName) => {
  http.setAuthToken(localStorage.getItem("accessToken"));
  const res = await http.post(APIURL.TOPICS_PROTECTED, {
    name: TopicName,
  });

  return { data: res.data, status: res.status };
};

export { fetchPublicTopics, createTopic };
