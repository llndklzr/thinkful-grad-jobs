// make API calls from here

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
const headers = new Headers();
headers.append("Content-Type", "application/json");

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
  return await fetchJson(url, { headers, signal }, []);
}

export async function listBusinesses(signal){
  const url = new URL(`${API_BASE_URL}/businesses`);
  return await fetchJson(url, {headers, signal}, []);
}

export async function getGradsByBusinessId(businessId, signal){
  const url = new URL(`${API_BASE_URL}/businesses/${businessId}/graduates`)
  return await fetchJson(url, {headers, signal}, []);
}

export async function postStory(story, signal){

}

export async function registerUser(user, signal){
  const url = new URL(`${API_BASE_URL}/graduates/register`);
  return await fetchJson(url, {
    signal,
    headers,
    method: "POST",
    body: JSON.stringify(user)
  }, []);
}

export async function loginUser(user, signal){
  const url = new URL(`${API_BASE_URL}/graduates/login`);
  return await fetchJson(url, {
    signal,
    headers,
    method: "POST",
    body: JSON.stringify(user)
  }, [])
}
