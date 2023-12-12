import { config } from "../js/config.js";
import { client } from "../js/client.js";

const { SERVER_API } = config;

const getTodos = async () => {
  const { data } = await client.get(`${SERVER_API}/todos`);
  console.log(data);
};
getTodos();
