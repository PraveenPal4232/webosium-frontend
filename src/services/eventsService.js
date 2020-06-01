import http from "./httpService";
import APIURL from "./apiUrl";

const fetchPublicEvents = async () => {
  const events = await http.get(APIURL.EVENTS_PUBLIC);
  return events.data;
};

const fetchPublicEventDetails = async (id) => {
  const events = await http.get(APIURL.EVENTS_PUBLIC + `${id}/`);
  return events.data;
};

const fetchPublicEventsByTags = async (tags) => {
  const events = await http.get(APIURL.EVENTS_PUBLIC + `?tags=${tags}`);
  return events.data;
};

const fetchPublicEventsByTitle = async (title) => {
  const events = await http.get(APIURL.EVENTS_PUBLIC + `?title=${title}`);
  return events.data;
};

const fetchUserEvents = async (status) => {
  http.setAuthToken(localStorage.getItem("accessToken"));
  const events = await http.get(APIURL.EVENTS_USER + `?status=${status}`);
  return events.data;
};

const createEvent = async (data) => {
  http.setAuthToken(localStorage.getItem("accessToken"));
  const res = await http.post(APIURL.EVENTS_PROTECTED, data, {
    headers: { "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW" },
  });

  return { data: res.data, status: res.status };
};

// const fetchMailDetails = async (box, id) => {
//   http.setAuthToken(localStorage.getItem("HCtoken"));
//   if (box === "inbox") {
//     const res = await http.get(APIURL.GET_INBOX + `/${id}`);
//     return res.data.email;
//   } else if (box === "outbox") {
//     const res = await http.get(APIURL.GET_OUTBOX + `/${id}`);
//     return res.data.email;
//   }
// };

// const sendMail = async (
//   receiver_email,
//   sender_email,
//   subject,
//   text,
//   amount,
//   tokens,
//   streamId,
//   rate,
//   expiryDate,
//   tokenname
// ) => {
//   http.setAuthToken(localStorage.getItem("HCtoken"));

//   const res = await http.post(APIURL.SEND_MAIL, {
//     receiver_email: receiver_email,
//     sender_email: sender_email,
//     subject: subject,
//     text: text,
//     html: " ",
//     amount: amount,
//     tokens: tokens,
//     streamId: streamId,
//     rate: rate,
//     expiryDate,
//     tokenname: tokenname
//   });

//   return res;
// };

// const sendReply = async (receiver_email, sender_email, subject, text) => {
//   http.setAuthToken(localStorage.getItem("HCtoken"));
//   const res = await http.post(APIURL.SEND_MAIL, {
//     receiver_email: receiver_email,
//     sender_email: sender_email,
//     subject: subject,
//     text: text,
//     html: " "
//   });

//   return res;
// };

export {
  fetchPublicEvents,
  fetchPublicEventsByTags,
  fetchPublicEventsByTitle,
  fetchPublicEventDetails,
  fetchUserEvents,
  createEvent,
};
