import axios from "axios";

const node_env = process.env.NODE_ENV;

const base_api_url =
  node_env === "development"
    ? "http://localhost:1337"
    : "https://api-boiler-strapi-k7c6n.ondigitalocean.app";

export default {
  upload_user_avatar(user_id, user_jwt) {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user_jwt
      }
    };

    const data = {
      url:
        "https://images.unsplash.com/photo-1607053075919-028173cb9910?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      parent_id: user_id
    };

    axios.post(`${base_api_url}/aws-images`, data, options).then(
      response => {
        console.log(response, "added user avatar");
      },
      error => {
        console.log(error);
      }
    );
  }
};
