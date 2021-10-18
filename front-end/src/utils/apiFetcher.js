// make API calls from here

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }
    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

//! <<------- STORIES ------->>

/**
 * Retrieves all existing stories.
 * @returns {Promise<[story]>}
 *  a promise that resolves to a possibly empty array of stories saved in the database.
 */

export async function listStories(params, signal) {
  const url = new URL(`${API_BASE_URL}/stories`);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value.toString())
  );
  return await fetchJson(url, { headers: myHeaders, signal }, []);
}

export async function listBusinesses(signal) {
  const url = new URL(`${API_BASE_URL}/businesses`);
  return await fetchJson(url, { headers: myHeaders, signal }, []);
}

export async function getGradsByBusinessId(businessId, signal) {
  const url = new URL(`${API_BASE_URL}/businesses/${businessId}/graduates`);
  return await fetchJson(url, { headers: myHeaders, signal }, []);
}

export async function postStory(story, signal){
  const url = new URL(`${API_BASE_URL}/stories`);
  return await fetchJson(
    url,
    {
      signal,
      headers: myHeaders,
      method: "POST",
      credentials: "include",
      body: JSON.stringify(story)
    },
    []
  );
}

export async function registerUser(credentials, signal) {
  const url = new URL(`${API_BASE_URL}/graduates/register`);
  return await fetchJson(
    url,
    {
      signal,
      headers: myHeaders,
      method: "POST",
      credentials: "include",
      body: JSON.stringify(credentials),
    },
    []
  );
}

export async function loginUser(credentials, signal) {
  const url = new URL(`${API_BASE_URL}/graduates/login`);
  return await fetchJson(
    url,
    {
      signal,
      credentials: "include",
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify(credentials),
    },
    []
  );
}

export async function listAllGrads(signal) {
  const url = new URL(`${API_BASE_URL}/graduates`);
  return await fetchJson(url, { signal, headers: myHeaders, credentials: "include" });
}

export async function getSignedUrl(filename, awsMethod, signal) {
  const url = new URL(
    `${API_BASE_URL}/resumes?filename=${filename}&awsMethod=${awsMethod}`
  );

  return await fetchJson(url, {
    headers: myHeaders,
    signal,
  });
}

export async function getGradById(id, signal){
  const url = new URL(`${API_BASE_URL}/graduates/${id}`);
  return await fetchJson(url, {headers: myHeaders, signal});
}

export async function filterResultsForMap(filters, signal){
  const url = new URL(`${API_BASE_URL}/filters/map`);
  return await fetchJson(
    url,
    {
      signal,
      credentials: "include",
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({data: filters}),
    },
    []
  );
}

export async function filterResultsForStories(filters, signal){
  const url = new URL(`${API_BASE_URL}/filters/stories`);
  return await fetchJson(
    url,
    {
      signal,
      credentials: "include",
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify({data: filters}),
    },
    []
  );
}
