import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import { Link, useHistory } from "react-router-dom";
import { createEvent } from "../../services/eventsService";
import { toast } from "react-toastify";

const CreateEventForm = () => {
  const topics = useStoreState((state) => state.topics.allTopics);

  const [eventName, setEventName] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [eventTopics, setEventTopics] = useState([]);
  const [timezone, setTimezone] = useState("IST");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const history = useHistory();

  const handleMultiSelect = (e) => {
    setEventTopics(
      Array.from(e.target.selectedOptions, (option) => parseInt(option.value))
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async () => {
    let errors = [];

    if (eventName === "") {
      errors.push("Event Name Cannot Be Blank");
    }
    if (
      !eventLink.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
      )
    ) {
      errors.push("Enter Valid URL");
    }
    if (eventTopics.length <= 0 || eventTopics.length > 3) {
      errors.push("Select At least 1 and At most 3 topics");
    }
    if (date === "") {
      errors.push("Invalid Date");
    }
    if (description === "") {
      errors.push("Please Enter a description");
    }

    if (errors.length === 0) {
      try {
        var formData = new FormData();
        formData.append("name", eventName);
        formData.append("link", eventLink);
        eventTopics.forEach((item) => {
          formData.append("tags", item);
        });
        formData.append("date", date);
        formData.append("timezone", timezone);
        formData.append("description", description);

        if (image) {
          formData.append("image", image);
        }

        const { data, status } = await createEvent(formData);
        toast.success(`Event "${data.name}" created`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        if (status === 201) {
          history.push(`/profile/pending`);
        }
      } catch (error) {
        toast.error("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } else {
      errors.forEach((item) => {
        toast.error(item, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
    }
  };

  return (
    <div className="p-6">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Event Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Webinar on Tensorflow"
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Event Link
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Link to YouTube/Zoom etc"
              onChange={(e) => setEventLink(e.target.value)}
            />
          </div>

          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Event Topics (select multiple)
            </label>
            <p className="text-gray-600 text-xs my-2">
              topic not available?{" "}
              <Link to="/profile/topics" className="text-blue-500">
                create topic
              </Link>
            </p>
            <select
              className="form-multiselect md:h-48 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              multiple
              onChange={handleMultiSelect}
            >
              {topics
                .sort(function (a, b) {
                  if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                  }
                  if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                  }
                  return 0;
                })
                .map((topic, index) => {
                  return (
                    <option key={index} value={topic.id}>
                      {topic.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="w-full px-3 md:w-1/2 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Date and time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="datetime-local"
              placeholder="Link to YouTube/Zoom etc"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="w-full px-3 md:w-1/2 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Timezone
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              <option>IST</option>
              <option>PDT</option>
              <option>EST</option>
              <option>CST</option>
              <option>GMT</option>
            </select>
          </div>

          <div className="w-full px-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <textarea
              className="appearance-none md:h-48 block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="some details about your event"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Poster
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="file"
              placeholder="some details about your event"
              onChange={handleImageUpload}
            />
          </div>

          <div className="w-full px-3 mt-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Submit for review
            </button>

            <p className="text-gray-600 text-xs italic mt-2">
              * Your event will be approved only if it follows{" "}
              <Link to="/policy-and-guidelines" className="text-blue-500">
                community guidelines
              </Link>
            </p>
            <p className="text-gray-600 text-xs italic">
              * Please allow upto 12-hrs for approval
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
