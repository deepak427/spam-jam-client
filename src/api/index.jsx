import axios from "axios";

const API = axios.create({ baseURL: "https://spam-jam-web.onrender.com" });

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

export const getChats = async (setchats) =>
  await API.get("/chat/get")
    .then( (response) => {
      setchats(response.data.result)
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
