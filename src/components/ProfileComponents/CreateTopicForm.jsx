import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createTopic, fetchPublicTopics } from "../../services/topicsService";
import { toast } from "react-toastify";
import { useStoreActions } from "easy-peasy";

const CreateTopicForm = () => {
  const setTopics = useStoreActions((action) => action.topics.setTopics);

  const [topic, setTopic] = useState("");

  const submitTopic = async (name) => {
    if (topic && topic !== "") {
      try {
        const { data, status } = await createTopic(name.toLowerCase());
        toast.success(`Topic ${data.name} created`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        if (status === 201) {
          const topics = await fetchPublicTopics();
          setTopics(topics);
        }
      } catch (error) {
        toast.error("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } else {
      toast.warning("Invalid Topic Format", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <div className="p-6">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Topic Name (see{" "}
              <Link className="text-blue-500" to="/topics">
                Existing Topics
              </Link>
              )
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Communities/Blockchain"
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div className="w-full px-3 mt-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                submitTopic(topic);
              }}
            >
              Create Topic
            </button>

            <p className="text-gray-600 text-xs italic mt-2">
              * Please create topics that follow our{" "}
              <Link to="/profile" className="text-blue-500">
                community guidelines
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTopicForm;
