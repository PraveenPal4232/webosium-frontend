import React, { useEffect } from "react";
import ReactGa from "react-ga";

const Guidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa.pageview("/guidelines");

    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-4 max-w-xl">
      <h1 className="text-3xl">Community Guidelines</h1>
      <p>
        Please follow the following guidelines while using this application. The
        main objective of this app is to provide a non-profit social platform to
        find webinars. In no way this site means any harm to anyone and it'll be
        great if the users also follow the same objective{" "}
      </p>
      <div className="my-4">
        <h1 className="text-xl">
          Event Posting Guidelines{" "}
          <span role="img" aria-label="tick">
            ✅
          </span>
        </h1>
        <ul className="list-disc">
          <li>Post events with clear and self describing title</li>
          <li>Provide a suitable description</li>
          <li>Rectangular image of dimensions 600x400 preferred</li>
          <li>Prefer giving an event link of the webinar itself</li>
        </ul>
      </div>
      <div className="my-4">
        <h1 className="text-xl">
          Your event may not be approved if{" "}
          <span role="img" aria-label="smile">
            ❌
          </span>
        </h1>
        <ul className="list-disc">
          <li>The event promotes violence/hatespeech/bullying</li>
          <li>The image/link/details contains anything explicit</li>
          <li>If the post is not a webinar</li>
          <li>If it goes against sentiments of anything</li>
        </ul>
      </div>
      <div className="my-4">
        <p>
          The decision of the admin is final but you can contact the admin on{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href="mailto:kautukkundan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            kautukkundan@gmail.com
          </a>{" "}
          in case of any confusion
        </p>
      </div>
      <div>
        <h1 className="text-3xl">Site Privacy Policy</h1>
        <ul className="list-disc">
          <li>
            We don't store any personal information other than username and
            email id which is provided by Google Oauth
          </li>
          <li>We expect you to accept cookies to maintain sessions</li>
          <li>
            Google Analytics is used to well... get analytics, but no PII is
            used
          </li>
          <li>
            I created this app with good intentions, please contact me if there
            is any policy issue, I will be happy to correct it and learn.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Guidelines;
