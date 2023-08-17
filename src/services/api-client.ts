import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cc071b0b36424f31a88b21651e1e0ab5",
  },
});
