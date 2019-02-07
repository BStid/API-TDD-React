import axios from "axios";

export default async () => {
  return await axios
    .get("http://www.amiiboapi.com/api/amiibo")
    .then(response => {
      console.log(response.data);
      return response.data.amiibo;
    });
};
