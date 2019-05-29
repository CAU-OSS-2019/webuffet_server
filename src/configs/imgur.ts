import { imgur_private } from './private';

const config = {
  api_url: "https://api.imgur.com/3/",
  headers: {
    Authorization: "Client-ID " + imgur_private.client_id
  }
};

export default config;
