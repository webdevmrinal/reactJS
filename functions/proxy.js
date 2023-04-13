const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6724138&lng=86.1527555&page_type=DESKTOP_WEB_LISTING";
  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  };
};
