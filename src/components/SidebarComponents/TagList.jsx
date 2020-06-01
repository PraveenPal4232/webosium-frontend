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
    <div className="p-4 mt-4">
      <h5 className="text-xs uppercase tracking-widest text-gray-600 mb-4">
        Topics
      </h5>
      {topics.length === 0 ? "No Topics" : null}
      {topics.map((topic, index) => {
        return <Tag name={topic.name} key={index} />;
      })}
    </div>
  );
};

export default TagList;
