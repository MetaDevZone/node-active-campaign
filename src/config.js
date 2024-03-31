let apiUrl;
let apiKey;

function config(url, key) {
  if (!url) {
    throw new Error("API URL is required");
  } else if (!key) {
    throw new Error("API Key is required");
  }

  apiUrl = url;
  apiKey = key;
  console.log("Config after setting values", apiUrl, apiKey);
}

function getConfig() {
  let new_apiUrl = `${apiUrl}/api/3/`;

  return { new_apiUrl, apiKey };
}

module.exports = {
  config,
  getConfig,
};
