function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Mock API call logic here
    const responseFromAPI = true; // Example response, replace with actual API call

    if (responseFromAPI) {
      resolve(responseFromAPI); // resolve with API response
    } else {
      reject(new Error('Error: API call failed')); // reject with error message
    }
  });
}

export default getResponseFromAPI;
