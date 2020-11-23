import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-8e2f1.cloudfunctions.net/api",
});

export default instance;

// const instance = axios.create({
//     baseURL: "http://localhost:5001/challenge-8e2f1/us-central1/api",
//   });
