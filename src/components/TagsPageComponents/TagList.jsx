import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import { fetchPublicTopics } from "../../services/topicsService";

import Tag from "./Tag";

const TagList = () => {
  const setTopics = useStoreActions((action) => action.topics.setTopics);
  const topics = useStoreState((state) => state.topics.allTopics);

  useEffect(() => {
    const fetchData = async () => {
      const topics = await fetchPublicTopics();
      setTopics(topics);
    };

    if (topics.length === 0) {
      fetchData();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2">
      {topics.length === 0 ? "No Topics" : null}
      {topics.map((topic, index) => {
        return <Tag name={topic.name} key={index} />;
      })}
    </div>
  );
};

export default TagList;
